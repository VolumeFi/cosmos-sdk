package tmservice_test

import (
	"context"
	"fmt"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"
	bankcli "github.com/cosmos/cosmos-sdk/x/bank/client/testutil"
	"testing"

	"github.com/stretchr/testify/suite"

	"github.com/cosmos/cosmos-sdk/client/grpc/tmservice"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/cosmos/cosmos-sdk/testutil/network"
	"github.com/cosmos/cosmos-sdk/testutil/rest"
	qtypes "github.com/cosmos/cosmos-sdk/types/query"
	"github.com/cosmos/cosmos-sdk/version"
)

type IntegrationTestSuite struct {
	suite.Suite

	cfg     network.Config
	network *network.Network

	queryClient tmservice.ServiceClient

	startingHeight int64
}

func (s *IntegrationTestSuite) SetupSuite() {
	s.T().Log("setting up integration test suite")

	cfg := network.DefaultConfig()
	cfg.NumValidators = 1

	s.cfg = cfg

	var err error
	s.network, err = network.New(s.T(), s.T().TempDir(), s.cfg)
	s.Require().NoError(err)

	val := s.network.Validators[0]

	_, err = s.network.WaitForHeight(1)
	s.Require().NoError(err)

	s.queryClient = tmservice.NewServiceClient(s.network.Validators[0].ClientCtx)

	// Create a new MsgSend tx from val to itself.
	out, err := bankcli.MsgSendExec(
		val.ClientCtx,
		val.Address,
		val.Address,
		sdk.NewCoins(
			sdk.NewCoin(s.cfg.BondDenom, sdk.NewInt(10)),
		),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(s.cfg.BondDenom, sdk.NewInt(10))).String()),
		fmt.Sprintf("--gas=%d", flags.DefaultGasLimit),
		fmt.Sprintf("--%s=foobar", flags.FlagNote),
	)
	var txRes sdk.TxResponse
	s.Require().NoError(err)
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txRes))
	s.Require().Equal(uint32(0), txRes.Code)
	s.Require().NoError(s.network.WaitForNextBlock())
	height, err := s.network.LatestHeight()
	s.Require().NoError(err)
	s.startingHeight = height
}

func (s *IntegrationTestSuite) TearDownSuite() {
	s.T().Log("tearing down integration test suite")
	s.network.Cleanup()
}

func (s IntegrationTestSuite) TestQueryNodeInfo() {
	val := s.network.Validators[0]

	res, err := s.queryClient.GetNodeInfo(context.Background(), &tmservice.GetNodeInfoRequest{})
	s.Require().NoError(err)
	s.Require().Equal(res.ApplicationVersion.AppName, version.NewInfo().AppName)

	restRes, err := rest.GetRequest(fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/node_info", val.APIAddress))
	s.Require().NoError(err)
	var getInfoRes tmservice.GetNodeInfoResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(restRes, &getInfoRes))
	s.Require().Equal(getInfoRes.ApplicationVersion.AppName, version.NewInfo().AppName)
}

func (s IntegrationTestSuite) TestQuerySyncing() {
	val := s.network.Validators[0]

	_, err := s.queryClient.GetSyncing(context.Background(), &tmservice.GetSyncingRequest{})
	s.Require().NoError(err)

	restRes, err := rest.GetRequest(fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/syncing", val.APIAddress))
	s.Require().NoError(err)
	var syncingRes tmservice.GetSyncingResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(restRes, &syncingRes))
}

func (s IntegrationTestSuite) TestQueryLatestBlock() {
	val := s.network.Validators[0]

	_, err := s.queryClient.GetLatestBlock(context.Background(), &tmservice.GetLatestBlockRequest{})
	s.Require().NoError(err)

	restRes, err := rest.GetRequest(fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/blocks/latest", val.APIAddress))
	s.Require().NoError(err)
	var blockInfoRes tmservice.GetLatestBlockResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(restRes, &blockInfoRes))
}

func (s IntegrationTestSuite) TestQueryBlockByHeight() {
	val := s.network.Validators[0]
	_, err := s.queryClient.GetBlockByHeight(context.Background(), &tmservice.GetBlockByHeightRequest{Height: 1})
	s.Require().NoError(err)

	restRes, err := rest.GetRequest(fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/blocks/%d", val.APIAddress, s.startingHeight))
	s.Require().NoError(err)
	var blockInfoRes tmservice.GetBlockByHeightResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(restRes, &blockInfoRes))
	s.Require().NotZero(len(blockInfoRes.Txs), "expected transactions in this block")
	s.Require().Equal(blockInfoRes.Txs[0].Body.Memo, "foobar")
}

func (s IntegrationTestSuite) TestQueryLatestValidatorSet() {
	val := s.network.Validators[0]

	// nil pagination
	res, err := s.queryClient.GetLatestValidatorSet(context.Background(), &tmservice.GetLatestValidatorSetRequest{
		Pagination: nil,
	})
	s.Require().NoError(err)
	s.Require().Equal(1, len(res.Validators))
	content, ok := res.Validators[0].PubKey.GetCachedValue().(cryptotypes.PubKey)
	s.Require().Equal(true, ok)
	s.Require().Equal(content, val.PubKey)

	//with pagination
	_, err = s.queryClient.GetLatestValidatorSet(context.Background(), &tmservice.GetLatestValidatorSetRequest{Pagination: &qtypes.PageRequest{
		Offset: 0,
		Limit:  10,
	}})
	s.Require().NoError(err)

	// rest request without pagination
	_, err = rest.GetRequest(fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/latest", val.APIAddress))
	s.Require().NoError(err)

	// rest request with pagination
	restRes, err := rest.GetRequest(fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/latest?pagination.offset=%d&pagination.limit=%d", val.APIAddress, 0, 1))
	s.Require().NoError(err)
	var validatorSetRes tmservice.GetLatestValidatorSetResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(restRes, &validatorSetRes))
	s.Require().Equal(1, len(validatorSetRes.Validators))
	anyPub, err := codectypes.NewAnyWithValue(val.PubKey)
	s.Require().NoError(err)
	s.Require().Equal(validatorSetRes.Validators[0].PubKey, anyPub)
}

func (s IntegrationTestSuite) TestLatestValidatorSet_GRPC() {
	vals := s.network.Validators
	testCases := []struct {
		name      string
		req       *tmservice.GetLatestValidatorSetRequest
		expErr    bool
		expErrMsg string
	}{
		{"nil request", nil, true, "cannot be nil"},
		{"no pagination", &tmservice.GetLatestValidatorSetRequest{}, false, ""},
		{"with pagination", &tmservice.GetLatestValidatorSetRequest{Pagination: &qtypes.PageRequest{Offset: 0, Limit: uint64(len(vals))}}, false, ""},
	}
	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			grpcRes, err := s.queryClient.GetLatestValidatorSet(context.Background(), tc.req)
			if tc.expErr {
				s.Require().Error(err)
				s.Require().Contains(err.Error(), tc.expErrMsg)
			} else {
				s.Require().NoError(err)
				s.Require().Len(grpcRes.Validators, len(vals))
				s.Require().Equal(grpcRes.Pagination.Total, uint64(len(vals)))
				content, ok := grpcRes.Validators[0].PubKey.GetCachedValue().(cryptotypes.PubKey)
				s.Require().Equal(true, ok)
				s.Require().Equal(content, vals[0].PubKey)
			}
		})
	}
}

func (s IntegrationTestSuite) TestLatestValidatorSet_GRPCGateway() {
	vals := s.network.Validators
	testCases := []struct {
		name      string
		url       string
		expErr    bool
		expErrMsg string
	}{
		{"no pagination", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/latest", vals[0].APIAddress), false, ""},
		{"pagination invalid fields", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/latest?pagination.offset=-1&pagination.limit=-2", vals[0].APIAddress), true, "strconv.ParseUint"},
		{"with pagination", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/latest?pagination.offset=0&pagination.limit=2", vals[0].APIAddress), false, ""},
	}
	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			res, err := rest.GetRequest(tc.url)
			s.Require().NoError(err)
			if tc.expErr {
				s.Require().Contains(string(res), tc.expErrMsg)
			} else {
				var result tmservice.GetLatestValidatorSetResponse
				err = vals[0].ClientCtx.Codec.UnmarshalJSON(res, &result)
				s.Require().NoError(err)
				s.Require().Equal(uint64(len(vals)), result.Pagination.Total)
				anyPub, err := codectypes.NewAnyWithValue(vals[0].PubKey)
				s.Require().NoError(err)
				s.Require().Equal(result.Validators[0].PubKey, anyPub)
			}
		})
	}
}

func (s IntegrationTestSuite) TestValidatorSetByHeight_GRPC() {
	vals := s.network.Validators
	testCases := []struct {
		name      string
		req       *tmservice.GetValidatorSetByHeightRequest
		expErr    bool
		expErrMsg string
	}{
		{"nil request", nil, true, "request cannot be nil"},
		{"empty request", &tmservice.GetValidatorSetByHeightRequest{}, true, "height must be greater than zero"},
		{"no pagination", &tmservice.GetValidatorSetByHeightRequest{Height: 1}, false, ""},
		{"with pagination", &tmservice.GetValidatorSetByHeightRequest{Height: 1, Pagination: &qtypes.PageRequest{Offset: 0, Limit: 1}}, false, ""},
	}
	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			grpcRes, err := s.queryClient.GetValidatorSetByHeight(context.Background(), tc.req)
			if tc.expErr {
				s.Require().Error(err)
				s.Require().Contains(err.Error(), tc.expErrMsg)
			} else {
				s.Require().NoError(err)
				s.Require().Len(grpcRes.Validators, len(vals))
				s.Require().Equal(grpcRes.Pagination.Total, uint64(len(vals)))
			}
		})
	}
}

func (s IntegrationTestSuite) TestValidatorSetByHeight_GRPCGateway() {
	vals := s.network.Validators
	testCases := []struct {
		name      string
		url       string
		expErr    bool
		expErrMsg string
	}{
		{"invalid height", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/%d", vals[0].APIAddress, -1), true, "height must be greater than zero"},
		{"no pagination", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/%d", vals[0].APIAddress, 1), false, ""},
		{"pagination invalid fields", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/%d?pagination.offset=-1&pagination.limit=-2", vals[0].APIAddress, 1), true, "strconv.ParseUint"},
		{"with pagination", fmt.Sprintf("%s/cosmos/base/tendermint/v1beta1/validatorsets/%d?pagination.offset=0&pagination.limit=2", vals[0].APIAddress, 1), false, ""},
	}
	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			res, err := rest.GetRequest(tc.url)
			s.Require().NoError(err)
			if tc.expErr {
				s.Require().Contains(string(res), tc.expErrMsg)
			} else {
				var result tmservice.GetValidatorSetByHeightResponse
				err = vals[0].ClientCtx.Codec.UnmarshalJSON(res, &result)
				s.Require().NoError(err)
				s.Require().Equal(uint64(len(vals)), result.Pagination.Total)
			}
		})
	}
}

func TestIntegrationTestSuite(t *testing.T) {
	suite.Run(t, new(IntegrationTestSuite))
}

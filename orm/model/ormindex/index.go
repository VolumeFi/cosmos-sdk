package ormindex

import (
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"

	"github.com/cosmos/cosmos-sdk/orm/backend/kv"
)

type Index interface {
	Fields() []protoreflect.Name
	PrefixKey([]protoreflect.Value) ([]byte, error)
	ReadValueFromIndexKey(store kv.IndexCommitmentReadStore, key, value []byte, message proto.Message) error

	doNotImplement()
}

type UniqueIndex interface {
	Index
	Has(store kv.IndexCommitmentReadStore, keyValues []protoreflect.Value) (found bool, err error)
	Get(store kv.IndexCommitmentReadStore, keyValues []protoreflect.Value, message proto.Message) (found bool, err error)
}

type IteratorOptions struct {
	Reverse bool
	Cursor  []byte
}

type Indexer interface {
	OnCreate(store kv.Store, message protoreflect.Message) error
	OnUpdate(store kv.Store, new, existing protoreflect.Message) error
	OnDelete(store kv.Store, message protoreflect.Message) error

	doNotImplement()
}

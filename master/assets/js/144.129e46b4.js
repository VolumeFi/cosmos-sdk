(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{656:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"transaction-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-tips"}},[e._v("#")]),e._v(" Transaction Tips")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Transaction tips are a mechanism to pay for transaction fees using another denom than the native fee denom of the chain.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("In a Cosmos ecosystem where more and more chains are connected via "),a("a",{attrs:{href:"https://ibc.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),a("OutboundLink")],1),e._v(", it happens that users want to perform actions on chains where they don't have native tokens yet. An example would be an Osmosis user who wants to vote on a proposal on the Cosmos Hub, but they don't have ATOMs in their wallet. A solution would be to swap OSMO for ATOM just for voting on this proposal, but that is cumbersome. Cross-chain DeFi project "),a("a",{attrs:{href:"https://emeris.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emeris"),a("OutboundLink")],1),e._v(" is another use case.")]),e._v(" "),a("p",[e._v("Transaction tips is a new solution for cross-chain transaction fees payment, whereby the transaction initiator signs a transaction without specifying fees, but uses a new "),a("code",[e._v("Tip")]),e._v(" field. They send this signed transaction to a fee relayer who will choose the transaction fees and broadcast the final transaction, and the SDK provides a mechanism that will transfer the pre-defined "),a("code",[e._v("Tip")]),e._v(" to the fee payer, to cover for fees.")]),e._v(" "),a("p",[e._v("Assuming we have two chains, A and B, we define the following terms:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("the tipper")]),e._v(": this is the initiator of the transaction, who wants to execute a "),a("code",[e._v("Msg")]),e._v(" on chain A, but doesn't have any native chain A tokens, only chain B tokens. In our example above, the tipper is the Osmosis (chain B) user wanting to vote on a Cosmos Hub (chain A) proposal.")]),e._v(" "),a("li",[a("strong",[e._v("the fee payer")]),e._v(": this is the party that will relay and broadcast the final transaction on chain A, and has chain A tokens. The tipper doesn't need to trust the feepayer.")]),e._v(" "),a("li",[a("strong",[e._v("the target chain")]),e._v(": the chain where the "),a("code",[e._v("Msg")]),e._v(" is executed, chain A in this case.")])]),e._v(" "),a("h2",{attrs:{id:"transaction-tips-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-tips-flow"}},[e._v("#")]),e._v(" Transaction Tips Flow")]),e._v(" "),a("p",[e._v("The transaction tips flow happens in multipe steps.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The tipper sends via IBC some chain B tokens to chain A. These tokens will cover for fees on the target chain A. This means that chain A's bank module holds some IBC tokens under the tipper's address.")])]),e._v(" "),a("li",[a("p",[e._v("The tipper drafts a transaction to be executed on the chain A. It can include chain A "),a("code",[e._v("Msg")]),e._v("s. However, instead of creating a normal transaction, they create the following "),a("code",[e._v("AuxSignerData")]),e._v(" document:")])])]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQXV4U2lnbmVyRGF0YSBpcyB0aGUgaW50ZXJtZWRpYXJ5IGZvcm1hdCB0aGF0IGFuIGF1eGlsaWFyeSBzaWduZXIgKGUuZy4gYQovLyB0aXBwZXIpIGJ1aWxkcyBhbmQgc2VuZHMgdG8gdGhlIGZlZSBwYXllciAod2hvIHdpbGwgYnVpbGQgYW5kIGJyb2FkY2FzdCB0aGUKLy8gYWN0dWFsIHR4KS4gQXV4U2lnbmVyRGF0YSBpcyBub3QgYSB2YWxpZCB0eCBpbiBpdHNlbGYsIGFuZCB3aWxsIGJlIHJlamVjdGVkCi8vIGJ5IHRoZSBub2RlIGlmIHNlbnQgZGlyZWN0bHkgYXMtaXMuCi8vCi8vIFNpbmNlOiBjb3Ntb3Mtc2RrIDAuNDYKbWVzc2FnZSBBdXhTaWduZXJEYXRhIHsKICAvLyBhZGRyZXNzIGlzIHRoZSBiZWNoMzItZW5jb2RlZCBhZGRyZXNzIG9mIHRoZSBhdXhpbGlhcnkgc2lnbmVyLiBJZiB1c2luZwogIC8vIEF1eFNpZ25lckRhdGEgYWNyb3NzIGRpZmZlcmVudCBjaGFpbnMsIHRoZSBiZWNoMzIgcHJlZml4IG9mIHRoZSB0YXJnZXQKICAvLyBjaGFpbiAod2hlcmUgdGhlIGZpbmFsIHRyYW5zYWN0aW9uIGlzIGJyb2FkY2FzdGVkKSBzaG91bGQgYmUgdXNlZC4KICBzdHJpbmcgYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICAvLyBzaWduX2RvYyBpcyB0aGUgU0lHTl9NT0RfRElSRUNUX0FVWCBzaWduIGRvYyB0aGF0IHRoZSBhdXhpbGlhcnkgc2lnbmVyCiAgLy8gc2lnbnMuIE5vdGU6IHdlIHVzZSB0aGUgc2FtZSBzaWduIGRvYyBldmVuIGlmIHdlJ3JlIHNpZ25pbmcgd2l0aAogIC8vIExFR0FDWV9BTUlOT19KU09OLgogIFNpZ25Eb2NEaXJlY3RBdXggc2lnbl9kb2MgPSAyOwogIC8vIG1vZGUgaXMgdGhlIHNpZ25pbmcgbW9kZSBvZiB0aGUgc2luZ2xlIHNpZ25lcgogIGNvc21vcy50eC5zaWduaW5nLnYxYmV0YTEuU2lnbk1vZGUgbW9kZSA9IDM7CiAgLy8gc2lnIGlzIHRoZSBzaWduYXR1cmUgb2YgdGhlIHNpZ24gZG9jLgogIGJ5dGVzIHNpZyA9IDQ7Cn0="}})],1),e._v(" "),a("p",[e._v("where we have defined "),a("code",[e._v("SignDocDirectAux")]),e._v(" as:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2lnbkRvY0RpcmVjdEF1eCBpcyB0aGUgdHlwZSB1c2VkIGZvciBnZW5lcmF0aW5nIHNpZ24gYnl0ZXMgZm9yCi8vIFNJR05fTU9ERV9ESVJFQ1RfQVVYLgovLwovLyBTaW5jZTogY29zbW9zLXNkayAwLjQ2Cm1lc3NhZ2UgU2lnbkRvY0RpcmVjdEF1eCB7CiAgLy8gYm9keV9ieXRlcyBpcyBwcm90b2J1ZiBzZXJpYWxpemF0aW9uIG9mIGEgVHhCb2R5IHRoYXQgbWF0Y2hlcyB0aGUKICAvLyByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICBieXRlcyBib2R5X2J5dGVzID0gMTsKCiAgLy8gcHVibGljX2tleSBpcyB0aGUgcHVibGljIGtleSBvZiB0aGUgc2lnbmluZyBhY2NvdW50LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgcHVibGljX2tleSA9IDI7CgogIC8vIGNoYWluX2lkIGlzIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBjaGFpbiB0aGlzIHRyYW5zYWN0aW9uIHRhcmdldHMuCiAgLy8gSXQgcHJldmVudHMgc2lnbmVkIHRyYW5zYWN0aW9ucyBmcm9tIGJlaW5nIHVzZWQgb24gYW5vdGhlciBjaGFpbiBieSBhbgogIC8vIGF0dGFja2VyLgogIHN0cmluZyBjaGFpbl9pZCA9IDM7CgogIC8vIGFjY291bnRfbnVtYmVyIGlzIHRoZSBhY2NvdW50IG51bWJlciBvZiB0aGUgYWNjb3VudCBpbiBzdGF0ZS4KICB1aW50NjQgYWNjb3VudF9udW1iZXIgPSA0OwoKICAvLyBzZXF1ZW5jZSBpcyB0aGUgc2VxdWVuY2UgbnVtYmVyIG9mIHRoZSBzaWduaW5nIGFjY291bnQuCiAgdWludDY0IHNlcXVlbmNlID0gNTsKCiAgLy8gVGlwIGlzIHRoZSBvcHRpb25hbCB0aXAgdXNlZCBmb3IgbWV0YS10cmFuc2FjdGlvbnMuIEl0IHNob3VsZCBiZSBsZWZ0CiAgLy8gZW1wdHkgaWYgdGhlIHNpZ25lciBpcyBub3QgdGhlIHRpcHBlciBmb3IgdGhpcyB0cmFuc2FjdGlvbi4KICBUaXAgdGlwID0gNjsKfQ=="}})],1),e._v(" "),a("p",[e._v("where "),a("code",[e._v("Tip")]),e._v(" is defined as")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVGlwIGlzIHRoZSB0aXAgdXNlZCBmb3IgbWV0YS10cmFuc2FjdGlvbnMuCi8vCi8vIFNpbmNlOiBjb3Ntb3Mtc2RrIDAuNDYKbWVzc2FnZSBUaXAgewogIC8vIGFtb3VudCBpcyB0aGUgYW1vdW50IG9mIHRoZSB0aXAKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gYW1vdW50ID0gMQogICAgICBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5jYXN0cmVwZWF0ZWQpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2lucyZxdW90O107CiAgLy8gdGlwcGVyIGlzIHRoZSBhZGRyZXNzIG9mIHRoZSBhY2NvdW50IHBheWluZyBmb3IgdGhlIHRpcAogIHN0cmluZyB0aXBwZXIgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),e._v(" "),a("p",[e._v("Notice that this document doesn't sign over the final chain A fees. Instead, it includes a "),a("code",[e._v("Tip")]),e._v(" field. It also doesn't include the whole "),a("code",[e._v("AuthInfo")]),e._v(" object as in "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(", only the minimum information needed by the tipper")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("The tipper signs the "),a("code",[e._v("SignDocDirectAux")]),e._v(" document and attaches the signature to the "),a("code",[e._v("AuxSignerData")]),e._v(", then sends the signed "),a("code",[e._v("AuxSignerData")]),e._v(" to the fee payer.")])]),e._v(" "),a("li",[a("p",[e._v("From the signed "),a("code",[e._v("AuxSignerData")]),e._v(" document, the fee payer constructs a transaction, using the following algorithm:")])])]),e._v(" "),a("ul",[a("li",[e._v("use as "),a("code",[e._v("TxBody")]),e._v(" the exact "),a("code",[e._v("AuxSignerData.SignDocDirectAux.body_bytes")]),e._v(", to not alter the original intent of the tipper,")]),e._v(" "),a("li",[e._v("create an "),a("code",[e._v("AuthInfo")]),e._v(" with:\n"),a("ul",[a("li",[a("code",[e._v("AuthInfo.Tip")]),e._v(" copied from "),a("code",[e._v("AuxSignerData.SignDocDirectAux.Tip")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("AuthInfo.Fee")]),e._v(" chosen by the fee payer, which should cover for the transaction gas, but also be small enough so that the tip/fee exchange rate is economically interesting for the fee payer,")]),e._v(" "),a("li",[a("code",[e._v("AuthInfo.SignerInfos")]),e._v(" has two signers: the first signer is the tipper, using the public key, sequence and sign mode specified in "),a("code",[e._v("AuxSignerData")]),e._v("; and the second signer is the fee payer, using their favorite sign mode,")])])]),e._v(" "),a("li",[e._v("a "),a("code",[e._v("Signatures")]),e._v(" array with two items: the tipper's signature from "),a("code",[e._v("AuxSignerData.Sig")]),e._v(", and the final fee payer's signature.")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Broadcast the final transaction signed by the two parties to the target chain. Once included, the Cosmos SDK will trigger a transfer of the "),a("code",[e._v("Tip")]),e._v(" specified in the transaction from the tipper address to the fee payer address.")])]),e._v(" "),a("h3",{attrs:{id:"fee-payers-market"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fee-payers-market"}},[e._v("#")]),e._v(" Fee Payers Market")]),e._v(" "),a("p",[e._v("The benefit of transaction tips for the tipper is clear: there is no need to swap tokens before executing a cross-chain message.")]),e._v(" "),a("p",[e._v("For the fee payer, the benefit is in the tip v.s. fee exchange. Put simply, the fee payer pays the fees of an unknown tipper's transaction, and gets in exchange the tip that the tipper chose. There is an economic incentive for the fee payer to do so only when the tip is greater than the transaction fees, given the exchange rates between the two tokens.")]),e._v(" "),a("p",[e._v("In the future, we imagine a market where fee payers will compete to include transactions from tippers, who on their side will optimize by specifying the lowest tip possible. A number of automated services might spin up to perform transaction gas simulation and exchange rate monitoring to optimize both the tip and fee values in real-time.")]),e._v(" "),a("h3",{attrs:{id:"tipper-and-fee-payer-sign-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipper-and-fee-payer-sign-modes"}},[e._v("#")]),e._v(" Tipper and Fee Payer Sign Modes")]),e._v(" "),a("p",[e._v("As we mentioned in the flow above, the tipper signs over the "),a("code",[e._v("SignDocDirectAux")]),e._v(", and the fee payer signs over the whole final transaction. As such, both parties might use different sign modes.")]),e._v(" "),a("ul",[a("li",[e._v("The tipper MUST use "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(". That is because the tipper needs to sign over the body, the tip, but not the other signers' information and not over the fee (which is unknown to the tipper).")]),e._v(" "),a("li",[e._v("The fee payer MUST use "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(". The fee payer signs over the whole transaction.")])]),e._v(" "),a("p",[e._v("For example, if the fee payer signs the whole transaction with "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(", it will be rejected by the node, as that would introduce malleability issues ("),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" doesn't sign over fees).")]),e._v(" "),a("p",[e._v("In both cases, using "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(" is recommended only if hardware wallet signing is needed.")]),e._v(" "),a("h2",{attrs:{id:"enabling-tips-on-your-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-tips-on-your-chain"}},[e._v("#")]),e._v(" Enabling Tips on your Chain")]),e._v(" "),a("p",[e._v("The transaction tips functionality is introduced in Cosmos SDK v0.46, so earlier versions do not have support for tips. If you're using v0.46 or later, then enabling tips on your chain is as simple as adding the "),a("code",[e._v("TipMiddleware")]),e._v(" in your middleware stack:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3VHhIYW5kbGVyIGRlZmluZXMgYSBUeEhhbmRsZXIgbWlkZGxld2FyZSBzdGFjay4KZnVuYyBOZXdUeEhhbmRsZXIob3B0aW9ucyBUeEhhbmRsZXJPcHRpb25zKSAodHguSGFuZGxlciwgZXJyb3IpIHsKICAgIC8vIC0tc25pcC0tCgogICAgcmV0dXJuIENvbXBvc2VNaWRkbGV3YXJlcygKICAgICAgICAvLyBiYXNlIHR4IGhhbmRsZXIgdGhhdCBleGVjdXRlcyBNc2dzCiAgICAgICAgTmV3UnVuTXNnc1R4SGFuZGxlcihvcHRpb25zLk1zZ1NlcnZpY2VSb3V0ZXIsIG9wdGlvbnMuTGVnYWN5Um91dGVyKSwKICAgICAgICAvLyAtLXNuaXAgb3RoZXIgbWlkZGxld2FyZXMtLQoKICAgICAgICAvLyBBZGQgdGhlIFRpcE1pZGRsZXdhcmUKICAgICAgICBOZXdUaXBNaWRkbGV3YXJlKG9wdGlvbnMuQmFua0tlZXBlciksCiAgICApCn0K"}}),e._v(" "),a("p",[e._v("Notice that "),a("code",[e._v("NewTipMiddleware")]),e._v(" needs a reference to the BankKeeper, for transferring the tip to the fee payer.")]),e._v(" "),a("p",[e._v("If you are using the Cosmos SDK's default middleware stack "),a("code",[e._v("NewDefaultTxHandler()")]),e._v(", then the tip middleware is included by default.")]),e._v(" "),a("h2",{attrs:{id:"cli-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-usage"}},[e._v("#")]),e._v(" CLI Usage")]),e._v(" "),a("p",[e._v("The Cosmos SDK also provides some CLI tooling for the transaction tips flow, both for the tipper and for the feepayer.")]),e._v(" "),a("p",[e._v("For the tipper, the CLI "),a("code",[e._v("tx")]),e._v(" subcommand has two new flags: "),a("code",[e._v("--aux")]),e._v(" and "),a("code",[e._v("--tip")]),e._v(". The "),a("code",[e._v("--aux")]),e._v(" flag is used to denote that we are creating an "),a("code",[e._v("AuxSignerData")]),e._v(" instead of a "),a("code",[e._v("Tx")]),e._v(", and the "),a("code",[e._v("--tip")]),e._v(" is used to populate its "),a("code",[e._v("Tip")]),e._v(" field.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBzaW1kIHR4IGdvdiB2b3RlIDE2IHllcyAtLWZyb20gJmx0O3RpcHBlcl9hZGRyZXNzJmd0OyAtLWF1eCAtLXRpcCA1MGliY2Rlbm9tCgoKIyMjIFByaW50cyB0aGUgQXV4U2lnbmVyRGF0YSBhcyBKU09OOgojIyMgeyZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMXEwYXlmNXZxNmZkMnh4cndoMzB1cGcwNWh4ZG55dzJoNTI0OWEyJnF1b3Q7LCZxdW90O3NpZ25fZG9jJnF1b3Q7OnsmcXVvdDtib2R5X2J5dGVzJnF1b3Q7OiZxdW90O0Nvc0JDaHd2WTI5emJXOXpMbUpoYm1zdWRqRmlaWFJoTVM1TmMyZFRaVzVrRW1zS0xXTnZjMjF2Y3pGeE1HRjVaalYyY1RabVpESjRlSEozYURNd2RYQm5NRFZvZUdSdWVYY3lhRFV5TkRsaE1oSXRZMjl6Ylc5ek1YZGxOV295WlhJMk1IVjVPWEYzWXpCdGEzcHRkR2R0ZEhBNVozRjVOWFkyYmpoblpHZGxHZ3NLQlhOMFlXdGxFZ0l4TUE9PSZxdW90OywmcXVvdDtwdWJsaWNfa2V5JnF1b3Q7OnsmcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5JnF1b3Q7LCZxdW90O2tleSZxdW90OzomcXVvdDtBb2pPRi8xbHVRNUgvblpEU3JFMXczQ3l6R0poSmRRdVM3aEZYNXdBQTZ1SiZxdW90O30sJnF1b3Q7Y2hhaW5faWQmcXVvdDs6JnF1b3Q7JnF1b3Q7LCZxdW90O2FjY291bnRfbnVtYmVyJnF1b3Q7OiZxdW90OzAmcXVvdDssJnF1b3Q7c2VxdWVuY2UmcXVvdDs6JnF1b3Q7MSZxdW90OywmcXVvdDt0aXAmcXVvdDs6eyZxdW90O2Ftb3VudCZxdW90OzpbeyZxdW90O2Rlbm9tJnF1b3Q7OiZxdW90O2liY2Rlbm9tJnF1b3Q7LCZxdW90O2Ftb3VudCZxdW90OzomcXVvdDs1MCZxdW90O31dLCZxdW90O3RpcHBlciZxdW90OzomcXVvdDtjb3Ntb3MxcTBheWY1dnE2ZmQyeHhyd2gzMHVwZzA1aHhkbnl3Mmg1MjQ5YTImcXVvdDt9fSwmcXVvdDttb2RlJnF1b3Q7OiZxdW90O1NJR05fTU9ERV9ESVJFQ1RfQVVYJnF1b3Q7LCZxdW90O3NpZyZxdW90OzomcXVvdDt2L2QvYkdxOUZHZGVjczZmYU1HMnQvL25SaXJGVGlxd0Z0VUI2NU02a2gwUWRVZU02amczcjhvSlgxbzE3eGtvRHhKMDlFeUppU3l2bzZmYlU3dlV4Zz09JnF1b3Q7fQo="}}),e._v(" "),a("p",[e._v("It is useful to pipe the JSON output to a file, "),a("code",[e._v("> aux_signed_tx.json")])]),e._v(" "),a("p",[e._v("For the fee payer, the Cosmos SDK added a "),a("code",[e._v("tx aux-to-fee")]),e._v(" subcommand to include an "),a("code",[e._v("AuxSignerData")]),e._v(" into a transaction, add fees to it, and broadcast it.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBzaW1kIHR4IGF1eC10by1mZWUgYXV4X3NpZ25lZF90eC5qc29uIC0tZnJvbSAmbHQ7ZmVlX3BheWVyX2FkZHJlc3MmZ3Q7IC0tZmVlcyAzMGF0b20KCiMjIyBQcmludHMgdGhlIGJyb2FkY2FzdGVkIHR4IHJlc3BvbnNlOgojIyMgY29kZTogMAojIyMgY29kZXNwYWNlOiBzZGsKIyMjIGRhdGE6ICZxdW90OyZxdW90OwojIyMgZXZlbnRzOiBbXQojIyMgZ2FzX3VzZWQ6ICZxdW90OzAmcXVvdDsKIyMjIGdhc193YW50ZWQ6ICZxdW90OzAmcXVvdDsKIyMjIGhlaWdodDogJnF1b3Q7MCZxdW90OwojIyMgaW5mbzogJnF1b3Q7JnF1b3Q7CiMjIyBsb2dzOiBbXQojIyMgdGltZXN0YW1wOiAmcXVvdDsmcXVvdDsKIyMjIHR4OiBudWxsCg=="}}),e._v(" "),a("p",[e._v("Upon completion of the second command, the fee payer's balance will be down the "),a("code",[e._v("30atom")]),e._v(" fees, and up the "),a("code",[e._v("50ibcdenom")]),e._v(" tip.")]),e._v(" "),a("p",[e._v("For both commands, the flag "),a("code",[e._v("--sign-mode=amino-json")]),e._v(" is still available for hardware wallet signing.")]),e._v(" "),a("h2",{attrs:{id:"programmatic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programmatic-usage"}},[e._v("#")]),e._v(" Programmatic Usage")]),e._v(" "),a("p",[e._v("For the tipper, the SDK exposes a new transaction builder, the "),a("code",[e._v("AuxTxBuilder")]),e._v(", for generating an "),a("code",[e._v("AuxSignerData")]),e._v(". The API of "),a("code",[e._v("AuxTxBuilder")]),e._v(" is defined "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-beta1/client/tx/aux_builder.go#L16",target:"_blank",rel:"noopener noreferrer"}},[e._v("in "),a("code",[e._v("client/tx")]),a("OutboundLink")],1),e._v(", and can be used as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTm90ZTogdGhlcmUncyBubyBuZWVkIHRvIHVzZSBjbGllbnRDdHguVHhDb25maWcgYW55bW9yZS4KCmJsZHIgOj0gY2xpZW50dHguTmV3QXV4VHhCdWlsZGVyKCkKZXJyIDo9IGJsZHIuU2V0TXNncyhtc2dzLi4uKQpibGRyLlNldEFkZHJlc3MoJnF1b3Q7Y29zbW9zMS4uLiZxdW90OykKYmxkci5TZXRNZW1vKC4uLikKYmxkci5TZXRUaXAoLi4uKQpibGRyLlNldFB1YktleSguLi4pCmVyciA6PSBibGRyLlNldFNpZ25Nb2RlKC4uLikgLy8gRElSRUNUX0FVWCBvciBBTUlOTywgb3IgZWxzZSBlcnJvcgovLyAuLi4gb3RoZXIgc2V0dGVycyBhcmUgYWxzbyBhdmFpbGFibGUKCi8vIEdldCB0aGUgYnl0ZXMgdG8gc2lnbi4Kc2lnbkJ6LCBlcnIgOj0gYmxkci5HZXRTaWduQnl0ZXMoKQoKLy8gU2lnbiB0aGUgYnogdXNpbmcgeW91ciBmYXZvcml0ZSBtZXRob2QuCnNpZywgZXJyIDo9IHByaXZLZXkuc2lnbihzaWduQnopCgovLyBTZXQgdGhlIHNpZ25hdHVyZQpibGRyLlNldFNpZyhzaWcpCgovLyBHZXQgdGhlIGZpbmFsIGF1eFNpZ25lckRhdGEgdG8gYmUgc2VudCB0byB0aGUgZmVlIHBheWVyCmF1eFNpZ25lckRhdGEsIGVycjo9IGJsZHIuR2V0QXV4U2lnbmVyRGF0YSgpCg=="}}),e._v(" "),a("p",[e._v("For the fee payer, the SDK added a new method on the existing "),a("code",[e._v("TxBuilder")]),e._v(" to import data from an "),a("code",[e._v("AuxSignerData")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZ2V0IGBhdXhTaWduZXJEYXRhYCBmcm9tIHRpcHBlciwgc2VlIGNvZGUgc25pcHBldCBhYm92ZS4KCnR4QnVpbGRlciA6PSBjbGllbnRDdHguVHhDb25maWcuTmV3VHhCdWlsZGVyKCkKZXJyIDo9IHR4QnVpbGRlci5BZGRBdXhTaWduZXJEYXRhKGF1eFNpZ25lckRhdGEpCmlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9CgovLyBBIGxvdCBvZiBmaWVsZHMgd2lsbCBiZSBwb3B1bGF0ZWQgaW4gdHhCdWlsZGVyLCBzdWNoIGFzIGl0cyBNc2dzLCB0aXAKLy8gbWVtbywgZXRjLi4uCgovLyBUaGUgZmVlIHBheWVyIGNob3NlcyB0aGUgZmVlIHRvIHNldCBvbiB0aGUgdHJhbnNhY3Rpb24uCnR4QnVpbGRlci5TZXRGZWVQYXllcigmbHQ7ZmVlX3BheWVyX2FkZHJlc3MmZ3Q7KQp0eEJ1aWxkZXIuU2V0RmVlQW1vdW50KC4uLikKdHhCdWlsZGVyLlNldEdhc0xpbWl0KC4uLikKCi8vIFVzdWFsIHNpZ25pbmcgY29kZQplcnIgPSBhdXRoY2xpZW50LlNpZ25UeCguLi4pCmlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);
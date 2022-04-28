(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{803:function(l,c,Z){"use strict";Z.r(c);var d=Z(1),g=Object(d.a)({},(function(){var l=this,c=l.$createElement,Z=l._self._c||c;return Z("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[Z("h1",{attrs:{id:"concepts"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[l._v("#")]),l._v(" Concepts")]),l._v(" "),Z("h2",{attrs:{id:"grant"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[l._v("#")]),l._v(" Grant")]),l._v(" "),Z("p",[Z("code",[l._v("Grant")]),l._v(" is stored in the KVStore to record a grant with full context. Every grant will contain "),Z("code",[l._v("granter")]),l._v(", "),Z("code",[l._v("grantee")]),l._v(" and what kind of "),Z("code",[l._v("allowance")]),l._v(" is granted. "),Z("code",[l._v("granter")]),l._v(" is an account address who is giving permission to "),Z("code",[l._v("grantee")]),l._v(" (the beneficiary account address) to pay for some or all of "),Z("code",[l._v("grantee")]),l._v("'s transaction fees. "),Z("code",[l._v("allowance")]),l._v(" defines what kind of fee allowance ("),Z("code",[l._v("BasicAllowance")]),l._v(" or "),Z("code",[l._v("PeriodicAllowance")]),l._v(", see below) is granted to "),Z("code",[l._v("grantee")]),l._v(". "),Z("code",[l._v("allowance")]),l._v(" accepts an interface which implements "),Z("code",[l._v("FeeAllowanceI")]),l._v(", encoded as "),Z("code",[l._v("Any")]),l._v(" type. There can be only one existing fee grant allowed for a "),Z("code",[l._v("grantee")]),l._v(" and "),Z("code",[l._v("granter")]),l._v(", self grants are not allowed.")]),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBhbGxvd2FuY2UgY2FuIGJlIGFueSBvZiBiYXNpYyBhbmQgZmlsdGVyZWQgZmVlIGFsbG93YW5jZS4KICBnb29nbGUucHJvdG9idWYuQW55IGFsbG93YW5jZSA9IDMgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90O107Cn0K"}})],1),l._v(" "),Z("p",[Z("code",[l._v("FeeAllowanceI")]),l._v(" looks like:")]),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBGZWVBbGxvd2FuY2VJIGludGVyZmFjZSB7CgkvLyBBY2NlcHQgY2FuIHVzZSBmZWUgcGF5bWVudCByZXF1ZXN0ZWQgYXMgd2VsbCBhcyB0aW1lc3RhbXAgb2YgdGhlIGN1cnJlbnQgYmxvY2sKCS8vIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBwcm9jZXNzIHRoaXMuIFRoaXMgaXMgY2hlY2tlZCBpbgoJLy8gS2VlcGVyLlVzZUdyYW50ZWRGZWVzIGFuZCB0aGUgcmV0dXJuIHZhbHVlcyBzaG91bGQgbWF0Y2ggaG93IGl0IGlzIGhhbmRsZWQgdGhlcmUuCgkvLwoJLy8gSWYgaXQgcmV0dXJucyBhbiBlcnJvciwgdGhlIGZlZSBwYXltZW50IGlzIHJlamVjdGVkLCBvdGhlcndpc2UgaXQgaXMgYWNjZXB0ZWQuCgkvLyBUaGUgRmVlQWxsb3dhbmNlIGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkIHRvIHVwZGF0ZSBpdCdzIGludGVybmFsIHN0YXRlCgkvLyBhbmQgd2lsbCBiZSBzYXZlZCBhZ2FpbiBhZnRlciBhbiBhY2NlcHRhbmNlLgoJLy8KCS8vIElmIHJlbW92ZSBpcyB0cnVlIChyZWdhcmRsZXNzIG9mIHRoZSBlcnJvciksIHRoZSBGZWVBbGxvd2FuY2Ugd2lsbCBiZSBkZWxldGVkIGZyb20gc3RvcmFnZQoJLy8gKGVnLiB3aGVuIGl0IGlzIHVzZWQgdXApLiAoU2VlIGNhbGwgdG8gUmV2b2tlRmVlQWxsb3dhbmNlIGluIEtlZXBlci5Vc2VHcmFudGVkRmVlcykKCUFjY2VwdChjdHggc2RrLkNvbnRleHQsIGZlZSBzZGsuQ29pbnMsIG1zZ3MgW11zZGsuTXNnKSAocmVtb3ZlIGJvb2wsIGVyciBlcnJvcikKCgkvLyBWYWxpZGF0ZUJhc2ljIHNob3VsZCBldmFsdWF0ZSB0aGlzIEZlZUFsbG93YW5jZSBmb3IgaW50ZXJuYWwgY29uc2lzdGVuY3kuCgkvLyBEb24ndCBhbGxvdyBuZWdhdGl2ZSBhbW91bnRzLCBvciBuZWdhdGl2ZSBwZXJpb2RzIGZvciBleGFtcGxlLgoJVmFsaWRhdGVCYXNpYygpIGVycm9yCn0K"}})],1),l._v(" "),Z("h2",{attrs:{id:"fee-allowance-types"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#fee-allowance-types"}},[l._v("#")]),l._v(" Fee Allowance types")]),l._v(" "),Z("p",[l._v("There are two types of fee allowances present at the moment:")]),l._v(" "),Z("ul",[Z("li",[Z("code",[l._v("BasicAllowance")])]),l._v(" "),Z("li",[Z("code",[l._v("PeriodicAllowance")])]),l._v(" "),Z("li",[Z("code",[l._v("AllowedMsgAllowance")])])]),l._v(" "),Z("h2",{attrs:{id:"basicallowance"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#basicallowance"}},[l._v("#")]),l._v(" BasicAllowance")]),l._v(" "),Z("p",[Z("code",[l._v("BasicAllowance")]),l._v(" is permission for "),Z("code",[l._v("grantee")]),l._v(" to use fee from a "),Z("code",[l._v("granter")]),l._v("'s account. If any of the "),Z("code",[l._v("spend_limit")]),l._v(" or "),Z("code",[l._v("expiration")]),l._v(" reaches its limit, the grant will be removed from the state.")]),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQmFzaWNBbGxvd2FuY2UgaW1wbGVtZW50cyBBbGxvd2FuY2Ugd2l0aCBhIG9uZS10aW1lIGdyYW50IG9mIHRva2VucwovLyB0aGF0IG9wdGlvbmFsbHkgZXhwaXJlcy4gVGhlIGdyYW50ZWUgY2FuIHVzZSB1cCB0byBTcGVuZExpbWl0IHRvIGNvdmVyIGZlZXMuCm1lc3NhZ2UgQmFzaWNBbGxvd2FuY2UgewogIG9wdGlvbiAoY29zbW9zX3Byb3RvLmltcGxlbWVudHNfaW50ZXJmYWNlKSA9ICZxdW90O0ZlZUFsbG93YW5jZUkmcXVvdDs7CgogIC8vIHNwZW5kX2xpbWl0IHNwZWNpZmllcyB0aGUgbWF4aW11bSBhbW91bnQgb2YgdG9rZW5zIHRoYXQgY2FuIGJlIHNwZW50CiAgLy8gYnkgdGhpcyBhbGxvd2FuY2UgYW5kIHdpbGwgYmUgdXBkYXRlZCBhcyB0b2tlbnMgYXJlIHNwZW50LiBJZiBpdCBpcwogIC8vIGVtcHR5LCB0aGVyZSBpcyBubyBzcGVuZCBsaW1pdCBhbmQgYW55IGFtb3VudCBvZiBjb2lucyBjYW4gYmUgc3BlbnQuCiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHNwZW5kX2xpbWl0ID0gMQogICAgICBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5jYXN0cmVwZWF0ZWQpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2lucyZxdW90O107CgogIC8vIGV4cGlyYXRpb24gc3BlY2lmaWVzIGFuIG9wdGlvbmFsIHRpbWUgd2hlbiB0aGlzIGFsbG93YW5jZSBleHBpcmVzCiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBleHBpcmF0aW9uID0gMiBbKGdvZ29wcm90by5zdGR0aW1lKSA9IHRydWVdOwp9"}})],1),l._v(" "),Z("ul",[Z("li",[Z("p",[Z("code",[l._v("spend_limit")]),l._v(" is the limit of coins that are allowed to be used from the "),Z("code",[l._v("granter")]),l._v(" account. If it is empty, it assumes there's no spend limit, "),Z("code",[l._v("grantee")]),l._v(" can use any number of available tokens from "),Z("code",[l._v("granter")]),l._v(" account address before the expiration.")])]),l._v(" "),Z("li",[Z("p",[Z("code",[l._v("expiration")]),l._v(" specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.")])]),l._v(" "),Z("li",[Z("p",[l._v("When a grant is created with empty values for "),Z("code",[l._v("spend_limit")]),l._v(" and "),Z("code",[l._v("expiration")]),l._v(", it is still a valid grant. It won't restrict the "),Z("code",[l._v("grantee")]),l._v(" to use any number of tokens from "),Z("code",[l._v("granter")]),l._v(" and it won't have any expiration. The only way to restrict the "),Z("code",[l._v("grantee")]),l._v(" is by revoking the grant.")])])]),l._v(" "),Z("h2",{attrs:{id:"periodicallowance"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#periodicallowance"}},[l._v("#")]),l._v(" PeriodicAllowance")]),l._v(" "),Z("p",[Z("code",[l._v("PeriodicAllowance")]),l._v(" is a repeating fee allowance for the mentioned period, we can mention when the grant can expire as well as when a period can reset. We can also define the maximum number of coins that can be used in a mentioned period of time.")]),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGVyaW9kaWNBbGxvd2FuY2UgZXh0ZW5kcyBBbGxvd2FuY2UgdG8gYWxsb3cgZm9yIGJvdGggYSBtYXhpbXVtIGNhcCwKLy8gYXMgd2VsbCBhcyBhIGxpbWl0IHBlciB0aW1lIHBlcmlvZC4KbWVzc2FnZSBQZXJpb2RpY0FsbG93YW5jZSB7CiAgb3B0aW9uIChjb3Ntb3NfcHJvdG8uaW1wbGVtZW50c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90OzsKCiAgLy8gYmFzaWMgc3BlY2lmaWVzIGEgc3RydWN0IG9mIGBCYXNpY0FsbG93YW5jZWAKICBCYXNpY0FsbG93YW5jZSBiYXNpYyA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwoKICAvLyBwZXJpb2Qgc3BlY2lmaWVzIHRoZSB0aW1lIGR1cmF0aW9uIGluIHdoaWNoIHBlcmlvZF9zcGVuZF9saW1pdCBjb2lucyBjYW4KICAvLyBiZSBzcGVudCBiZWZvcmUgdGhhdCBhbGxvd2FuY2UgaXMgcmVzZXQKICBnb29nbGUucHJvdG9idWYuRHVyYXRpb24gcGVyaW9kID0gMiBbKGdvZ29wcm90by5zdGRkdXJhdGlvbikgPSB0cnVlLCAoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKCiAgLy8gcGVyaW9kX3NwZW5kX2xpbWl0IHNwZWNpZmllcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgY29pbnMgdGhhdCBjYW4gYmUgc3BlbnQKICAvLyBpbiB0aGUgcGVyaW9kCiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHBlcmlvZF9zcGVuZF9saW1pdCA9IDMKICAgICAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMmcXVvdDtdOwoKICAvLyBwZXJpb2RfY2FuX3NwZW5kIGlzIHRoZSBudW1iZXIgb2YgY29pbnMgbGVmdCB0byBiZSBzcGVudCBiZWZvcmUgdGhlIHBlcmlvZF9yZXNldCB0aW1lCiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHBlcmlvZF9jYW5fc3BlbmQgPSA0CiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmNhc3RyZXBlYXRlZCkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zJnF1b3Q7XTsKCiAgLy8gcGVyaW9kX3Jlc2V0IGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoaXMgcGVyaW9kIHJlc2V0cyBhbmQgYSBuZXcgb25lIGJlZ2lucywKICAvLyBpdCBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIHN0YXJ0IHRpbWUgb2YgdGhlIGZpcnN0IHRyYW5zYWN0aW9uIGFmdGVyIHRoZQogIC8vIGxhc3QgcGVyaW9kIGVuZGVkCiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBwZXJpb2RfcmVzZXQgPSA1IFsoZ29nb3Byb3RvLnN0ZHRpbWUpID0gdHJ1ZSwgKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0KCi8vIEFsbG93ZWRNc2dBbGxvd2FuY2UgY3JlYXRlcyBhbGxvd2FuY2Ugb25seSBmb3Igc3BlY2lmaWVkIG1lc3NhZ2UgdHlwZXMuCm1lc3NhZ2UgQWxsb3dlZE1zZ0FsbG93YW5jZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChjb3Ntb3NfcHJvdG8uaW1wbGVtZW50c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90OzsKCiAgLy8gYWxsb3dhbmNlIGNhbiBiZSBhbnkgb2YgYmFzaWMgYW5kIGZpbHRlcmVkIGZlZSBhbGxvd2FuY2UuCiAgZ29vZ2xlLnByb3RvYnVmLkFueSBhbGxvd2FuY2UgPSAxIFsoY29zbW9zX3Byb3RvLmFjY2VwdHNfaW50ZXJmYWNlKSA9ICZxdW90O0ZlZUFsbG93YW5jZUkmcXVvdDtdOwoKICAvLyBhbGxvd2VkX21lc3NhZ2VzIGFyZSB0aGUgbWVzc2FnZXMgZm9yIHdoaWNoIHRoZSBncmFudGVlIGhhcyB0aGUgYWNjZXNzLgogIHJlcGVhdGVkIHN0cmluZyBhbGxvd2VkX21lc3NhZ2VzID0gMjsKfQoKLy8gR3JhbnQgaXMgc3RvcmVkIGluIHRoZSBLVlN0b3JlIHRvIHJlY29yZCBhIGdyYW50IHdpdGggZnVsbCBjb250ZXh0Cm1lc3NhZ2UgR3JhbnQgewogIC8vIGdyYW50ZXIgaXMgdGhlIGFkZHJlc3Mgb2YgdGhlIHVzZXIgZ3JhbnRpbmcgYW4gYWxsb3dhbmNlIG9mIHRoZWlyIGZ1bmRzLgogIHN0cmluZyAgICAgICAgICAgICAgZ3JhbnRlciAgID0gMTsKCiAgLy8gZ3JhbnRlZSBpcyB0aGUgYWRkcmVzcyBvZiB0aGUgdXNlciBiZWluZyBncmFudGVkIGFuIGFsbG93YW5jZSBvZiBhbm90aGVyIHVzZXIncyBmdW5kcy4KICBzdHJpbmcgICAgICAgICAgICAgIGdyYW50ZWUgICA9IDI7"}})],1),l._v(" "),Z("ul",[Z("li",[Z("p",[Z("code",[l._v("basic")]),l._v(" is the instance of "),Z("code",[l._v("BasicAllowance")]),l._v(" which is optional for periodic fee allowance. If empty, the grant will have no "),Z("code",[l._v("expiration")]),l._v(" and no "),Z("code",[l._v("spend_limit")]),l._v(".")])]),l._v(" "),Z("li",[Z("p",[Z("code",[l._v("period")]),l._v(" is the specific period of time, after each period passes, "),Z("code",[l._v("period_spend_limit")]),l._v(" will be reset.")])]),l._v(" "),Z("li",[Z("p",[Z("code",[l._v("period_spend_limit")]),l._v(" specifies the maximum number of coins that can be spent in the period.")])]),l._v(" "),Z("li",[Z("p",[Z("code",[l._v("period_can_spend")]),l._v(" is the number of coins left to be spent before the period_reset time.")])]),l._v(" "),Z("li",[Z("p",[Z("code",[l._v("period_reset")]),l._v(" keeps track of when a next period reset should happen.")])])]),l._v(" "),Z("h2",{attrs:{id:"allowedmsgallowance"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#allowedmsgallowance"}},[l._v("#")]),l._v(" AllowedMsgAllowance")]),l._v(" "),Z("p",[Z("code",[l._v("AllowedMsgAllowance")]),l._v(" is a fee allowance, it can be any of "),Z("code",[l._v("BasicFeeAllowance")]),l._v(", "),Z("code",[l._v("PeriodicAllowance")]),l._v(" but restricted only to the allowed messages mentioned by the granter.")]),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQWxsb3dlZE1zZ0FsbG93YW5jZSBjcmVhdGVzIGFsbG93YW5jZSBvbmx5IGZvciBzcGVjaWZpZWQgbWVzc2FnZSB0eXBlcy4KbWVzc2FnZSBBbGxvd2VkTXNnQWxsb3dhbmNlIHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtGZWVBbGxvd2FuY2VJJnF1b3Q7OwoKICAvLyBhbGxvd2FuY2UgY2FuIGJlIGFueSBvZiBiYXNpYyBhbmQgZmlsdGVyZWQgZmVlIGFsbG93YW5jZS4KICBnb29nbGUucHJvdG9idWYuQW55IGFsbG93YW5jZSA9IDEgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90O107CgogIC8vIGFsbG93ZWRfbWVzc2FnZXMgYXJlIHRoZSBtZXNzYWdlcyBmb3Igd2hpY2ggdGhlIGdyYW50ZWUgaGFzIHRoZSBhY2Nlc3MuCiAgcmVwZWF0ZWQgc3RyaW5nIGFsbG93ZWRfbWVzc2FnZXMgPSAyOwp9"}})],1),l._v(" "),Z("ul",[Z("li",[Z("p",[Z("code",[l._v("allowance")]),l._v(" is either "),Z("code",[l._v("BasicAllowance")]),l._v(" or "),Z("code",[l._v("PeriodicAllowance")]),l._v(".")])]),l._v(" "),Z("li",[Z("p",[Z("code",[l._v("allowed_messages")]),l._v(" is array of messages allowed to execute the given allowance.")])])]),l._v(" "),Z("h2",{attrs:{id:"feegranter-flag"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#feegranter-flag"}},[l._v("#")]),l._v(" FeeGranter flag")]),l._v(" "),Z("p",[Z("code",[l._v("feegrant")]),l._v(" module introduces a "),Z("code",[l._v("FeeGranter")]),l._v(" flag for CLI for the sake of executing transactions with fee granter. When this flag is set, "),Z("code",[l._v("clientCtx")]),l._v(" will append the granter account address for transactions generated through CLI.")]),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWlmIGNsaWVudEN0eC5GZWVHcmFudGVyID09IG5pbCB8fCBmbGFnU2V0LkNoYW5nZWQoZmxhZ3MuRmxhZ0ZlZUFjY291bnQpIHsKCQlncmFudGVyLCBfIDo9IGZsYWdTZXQuR2V0U3RyaW5nKGZsYWdzLkZsYWdGZWVBY2NvdW50KQoKCQlpZiBncmFudGVyICE9ICZxdW90OyZxdW90OyB7CgkJCWdyYW50ZXJBY2MsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoZ3JhbnRlcikKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gY2xpZW50Q3R4LCBlcnIKCQkJfQoKCQkJY2xpZW50Q3R4ID0gY2xpZW50Q3R4LldpdGhGZWVHcmFudGVyQWRkcmVzcyhncmFudGVyQWNjKQoJCX0KCX0="}})],1),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2J1ZmlvJnF1b3Q7CgkmcXVvdDtlcnJvcnMmcXVvdDsKCSZxdW90O2ZtdCZxdW90OwoJJnF1b3Q7bmV0L2h0dHAmcXVvdDsKCSZxdW90O29zJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9zcGYxMy9wZmxhZyZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9mbGFncyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQvaW5wdXQmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY3J5cHRvL2tleXMvc2VjcDI1NmsxJnF1b3Q7CgljcnlwdG90eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NyeXB0by90eXBlcyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy9yZXN0JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4L3NpZ25pbmcmcXVvdDsKCWF1dGhzaWduaW5nICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9hdXRoL3NpZ25pbmcmcXVvdDsKCWF1dGh0eCAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aC90eCZxdW90OwopCgovLyBHZW5lcmF0ZU9yQnJvYWRjYXN0VHhDTEkgd2lsbCBlaXRoZXIgZ2VuZXJhdGUgYW5kIHByaW50IGFuZCB1bnNpZ25lZCB0cmFuc2FjdGlvbgovLyBvciBzaWduIGl0IGFuZCBicm9hZGNhc3QgaXQgcmV0dXJuaW5nIGFuIGVycm9yIHVwb24gZmFpbHVyZS4KZnVuYyBHZW5lcmF0ZU9yQnJvYWRjYXN0VHhDTEkoY2xpZW50Q3R4IGNsaWVudC5Db250ZXh0LCBmbGFnU2V0ICpwZmxhZy5GbGFnU2V0LCBtc2dzIC4uLnNkay5Nc2cpIGVycm9yIHsKCXR4ZiA6PSBOZXdGYWN0b3J5Q0xJKGNsaWVudEN0eCwgZmxhZ1NldCkKCXJldHVybiBHZW5lcmF0ZU9yQnJvYWRjYXN0VHhXaXRoRmFjdG9yeShjbGllbnRDdHgsIHR4ZiwgbXNncy4uLikKfQoKLy8gR2VuZXJhdGVPckJyb2FkY2FzdFR4V2l0aEZhY3Rvcnkgd2lsbCBlaXRoZXIgZ2VuZXJhdGUgYW5kIHByaW50IGFuZCB1bnNpZ25lZCB0cmFuc2FjdGlvbgovLyBvciBzaWduIGl0IGFuZCBicm9hZGNhc3QgaXQgcmV0dXJuaW5nIGFuIGVycm9yIHVwb24gZmFpbHVyZS4KZnVuYyBHZW5lcmF0ZU9yQnJvYWRjYXN0VHhXaXRoRmFjdG9yeShjbGllbnRDdHggY2xpZW50LkNvbnRleHQsIHR4ZiBGYWN0b3J5LCBtc2dzIC4uLnNkay5Nc2cpIGVycm9yIHsKCWlmIGNsaWVudEN0eC5HZW5lcmF0ZU9ubHkgewoJCXJldHVybiBHZW5lcmF0ZVR4KGNsaWVudEN0eCwgdHhmLCBtc2dzLi4uKQoJfQoKCXJldHVybiBCcm9hZGNhc3RUeChjbGllbnRDdHgsIHR4ZiwgbXNncy4uLikKfQoKLy8gR2VuZXJhdGVUeCB3aWxsIGdlbmVyYXRlIGFuIHVuc2lnbmVkIHRyYW5zYWN0aW9uIGFuZCBwcmludCBpdCB0byB0aGUgd3JpdGVyCi8vIHNwZWNpZmllZCBieSBjdHguT3V0cHV0LiBJZiBzaW11bGF0aW9uIHdhcyByZXF1ZXN0ZWQsIHRoZSBnYXMgd2lsbCBiZQovLyBzaW11bGF0ZWQgYW5kIGFsc28gcHJpbnRlZCB0byB0aGUgc2FtZSB3cml0ZXIgYmVmb3JlIHRoZSB0cmFuc2FjdGlvbiBpcwovLyBwcmludGVkLgpmdW5jIEdlbmVyYXRlVHgoY2xpZW50Q3R4IGNsaWVudC5Db250ZXh0LCB0eGYgRmFjdG9yeSwgbXNncyAuLi5zZGsuTXNnKSBlcnJvciB7CglpZiB0eGYuU2ltdWxhdGVBbmRFeGVjdXRlKCkgewoJCWlmIGNsaWVudEN0eC5PZmZsaW5lIHsKCQkJcmV0dXJuIGVycm9ycy5OZXcoJnF1b3Q7Y2Fubm90IGVzdGltYXRlIGdhcyBpbiBvZmZsaW5lIG1vZGUmcXVvdDspCgkJfQoKCQlfLCBhZGp1c3RlZCwgZXJyIDo9IENhbGN1bGF0ZUdhcyhjbGllbnRDdHguUXVlcnlXaXRoRGF0YSwgdHhmLCBtc2dzLi4uKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoKCQl0eGYgPSB0eGYuV2l0aEdhcyhhZGp1c3RlZCkKCQlfLCBfID0gZm10LkZwcmludGYob3MuU3RkZXJyLCAmcXVvdDslc1xuJnF1b3Q7LCBHYXNFc3RpbWF0ZVJlc3BvbnNle0dhc0VzdGltYXRlOiB0eGYuR2FzKCl9KQoJfQoKCXR4LCBlcnIgOj0gQnVpbGRVbnNpZ25lZFR4KHR4ZiwgbXNncy4uLikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCglqc29uLCBlcnIgOj0gY2xpZW50Q3R4LlR4Q29uZmlnLlR4SlNPTkVuY29kZXIoKSh0eC5HZXRUeCgpKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCXJldHVybiBjbGllbnRDdHguUHJpbnRTdHJpbmcoZm10LlNwcmludGYoJnF1b3Q7JXNcbiZxdW90OywganNvbikpCn0KCi8vIEJyb2FkY2FzdFR4IGF0dGVtcHRzIHRvIGdlbmVyYXRlLCBzaWduIGFuZCBicm9hZGNhc3QgYSB0cmFuc2FjdGlvbiB3aXRoIHRoZQovLyBnaXZlbiBzZXQgb2YgbWVzc2FnZXMuIEl0IHdpbGwgYWxzbyBzaW11bGF0ZSBnYXMgcmVxdWlyZW1lbnRzIGlmIG5lY2Vzc2FyeS4KLy8gSXQgd2lsbCByZXR1cm4gYW4gZXJyb3IgdXBvbiBmYWlsdXJlLgpmdW5jIEJyb2FkY2FzdFR4KGNsaWVudEN0eCBjbGllbnQuQ29udGV4dCwgdHhmIEZhY3RvcnksIG1zZ3MgLi4uc2RrLk1zZykgZXJyb3IgewoJdHhmLCBlcnIgOj0gUHJlcGFyZUZhY3RvcnkoY2xpZW50Q3R4LCB0eGYpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJaWYgdHhmLlNpbXVsYXRlQW5kRXhlY3V0ZSgpIHx8IGNsaWVudEN0eC5TaW11bGF0ZSB7CgkJXywgYWRqdXN0ZWQsIGVyciA6PSBDYWxjdWxhdGVHYXMoY2xpZW50Q3R4LlF1ZXJ5V2l0aERhdGEsIHR4ZiwgbXNncy4uLikKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIGVycgoJCX0KCgkJdHhmID0gdHhmLldpdGhHYXMoYWRqdXN0ZWQpCgkJXywgXyA9IGZtdC5GcHJpbnRmKG9zLlN0ZGVyciwgJnF1b3Q7JXNcbiZxdW90OywgR2FzRXN0aW1hdGVSZXNwb25zZXtHYXNFc3RpbWF0ZTogdHhmLkdhcygpfSkKCX0KCglpZiBjbGllbnRDdHguU2ltdWxhdGUgewoJCXJldHVybiBuaWwKCX0KCgl0eCwgZXJyIDo9IEJ1aWxkVW5zaWduZWRUeCh0eGYsIG1zZ3MuLi4pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJaWYgIWNsaWVudEN0eC5Ta2lwQ29uZmlybSB7CgkJb3V0LCBlcnIgOj0gY2xpZW50Q3R4LlR4Q29uZmlnLlR4SlNPTkVuY29kZXIoKSh0eC5HZXRUeCgpKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoKCQlfLCBfID0gZm10LkZwcmludGYob3MuU3RkZXJyLCAmcXVvdDslc1xuXG4mcXVvdDssIG91dCkKCgkJYnVmIDo9IGJ1ZmlvLk5ld1JlYWRlcihvcy5TdGRpbikKCQlvaywgZXJyIDo9IGlucHV0LkdldENvbmZpcm1hdGlvbigmcXVvdDtjb25maXJtIHRyYW5zYWN0aW9uIGJlZm9yZSBzaWduaW5nIGFuZCBicm9hZGNhc3RpbmcmcXVvdDssIGJ1Ziwgb3MuU3RkZXJyKQoKCQlpZiBlcnIgIT0gbmlsIHx8ICFvayB7CgkJCV8sIF8gPSBmbXQuRnByaW50Zihvcy5TdGRlcnIsICZxdW90OyVzXG4mcXVvdDssICZxdW90O2NhbmNlbGxlZCB0cmFuc2FjdGlvbiZxdW90OykKCQkJcmV0dXJuIGVycgoJCX0KCX0KCgl0eC5TZXRGZWVHcmFudGVyKGNsaWVudEN0eC5HZXRGZWVHcmFudGVyQWRkcmVzcygpKQoJZXJyID0gU2lnbih0eGYsIGNsaWVudEN0eC5HZXRGcm9tTmFtZSgpLCB0eCwgdHJ1ZSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCgl0eEJ5dGVzLCBlcnIgOj0gY2xpZW50Q3R4LlR4Q29uZmlnLlR4RW5jb2RlcigpKHR4LkdldFR4KCkpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJLy8gYnJvYWRjYXN0IHRvIGEgVGVuZGVybWludCBub2RlCglyZXMsIGVyciA6PSBjbGllbnRDdHguQnJvYWRjYXN0VHgodHhCeXRlcykKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCglyZXR1cm4gY2xpZW50Q3R4LlByaW50UHJvdG8ocmVzKQp9CgovLyBXcml0ZUdlbmVyYXRlZFR4UmVzcG9uc2Ugd3JpdGVzIGEgZ2VuZXJhdGVkIHVuc2lnbmVkIHRyYW5zYWN0aW9uIHRvIHRoZQovLyBwcm92aWRlZCBodHRwLlJlc3BvbnNlV3JpdGVyLiBJdCB3aWxsIHNpbXVsYXRlIGdhcyBjb3N0cyBpZiByZXF1ZXN0ZWQgYnkgdGhlCi8vIEJhc2VSZXEuIFVwb24gYW55IGVycm9yLCB0aGUgZXJyb3Igd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBodHRwLlJlc3BvbnNlV3JpdGVyLgovLyBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBsZWdhY3kgU3RkVHggQW1pbm8gSlNPTiBmb3JtYXQgZm9yIGNvbXBhdGliaWxpdHkKLy8gd2l0aCBsZWdhY3kgY2xpZW50cy4KZnVuYyBXcml0ZUdlbmVyYXRlZFR4UmVzcG9uc2UoCgljdHggY2xpZW50LkNvbnRleHQsIHcgaHR0cC5SZXNwb25zZVdyaXRlciwgYnIgcmVzdC5CYXNlUmVxLCBtc2dzIC4uLnNkay5Nc2csCikgewoJZ2FzQWRqLCBvayA6PSByZXN0LlBhcnNlRmxvYXQ2NE9yUmV0dXJuQmFkUmVxdWVzdCh3LCBici5HYXNBZGp1c3RtZW50LCBmbGFncy5EZWZhdWx0R2FzQWRqdXN0bWVudCkKCWlmICFvayB7CgkJcmV0dXJuCgl9CgoJZ2FzU2V0dGluZywgZXJyIDo9IGZsYWdzLlBhcnNlR2FzU2V0dGluZyhici5HYXMpCglpZiByZXN0LkNoZWNrQmFkUmVxdWVzdEVycm9yKHcsIGVycikgewoJCXJldHVybgoJfQoKCXR4ZiA6PSBGYWN0b3J5e2ZlZXM6IGJyLkZlZXMsIGdhc1ByaWNlczogYnIuR2FzUHJpY2VzfS4KCQlXaXRoQWNjb3VudE51bWJlcihici5BY2NvdW50TnVtYmVyKS4KCQlXaXRoU2VxdWVuY2UoYnIuU2VxdWVuY2UpLgoJCVdpdGhHYXMoZ2FzU2V0dGluZy5HYXMpLgoJCVdpdGhHYXNBZGp1c3RtZW50KGdhc0FkaikuCgkJV2l0aE1lbW8oYnIuTWVtbykuCgkJV2l0aENoYWluSUQoYnIuQ2hhaW5JRCkuCgkJV2l0aFNpbXVsYXRlQW5kRXhlY3V0ZShici5TaW11bGF0ZSkuCgkJV2l0aFR4Q29uZmlnKGN0eC5UeENvbmZpZykuCgkJV2l0aFRpbWVvdXRIZWlnaHQoYnIuVGltZW91dEhlaWdodCkKCglpZiBici5TaW11bGF0ZSB8fCBnYXNTZXR0aW5nLlNpbXVsYXRlIHsKCQlpZiBnYXNBZGogJmx0OyAwIHsKCQkJcmVzdC5Xcml0ZUVycm9yUmVzcG9uc2UodywgaHR0cC5TdGF0dXNCYWRSZXF1ZXN0LCBzZGtlcnJvcnMuRXJyb3JJbnZhbGlkR2FzQWRqdXN0bWVudC5FcnJvcigpKQoJCQlyZXR1cm4KCQl9CgoJCV8sIGFkanVzdGVkLCBlcnIgOj0gQ2FsY3VsYXRlR2FzKGN0eC5RdWVyeVdpdGhEYXRhLCB0eGYsIG1zZ3MuLi4pCgkJaWYgcmVzdC5DaGVja0ludGVybmFsU2VydmVyRXJyb3IodywgZXJyKSB7CgkJCXJldHVybgoJCX0KCgkJdHhmID0gdHhmLldpdGhHYXMoYWRqdXN0ZWQpCgoJCWlmIGJyLlNpbXVsYXRlIHsKCQkJcmVzdC5Xcml0ZVNpbXVsYXRpb25SZXNwb25zZSh3LCBjdHguTGVnYWN5QW1pbm8sIHR4Zi5HYXMoKSkKCQkJcmV0dXJuCgkJfQoJfQoKCXR4LCBlcnIgOj0gQnVpbGRVbnNpZ25lZFR4KHR4ZiwgbXNncy4uLikKCWlmIHJlc3QuQ2hlY2tCYWRSZXF1ZXN0RXJyb3IodywgZXJyKSB7CgkJcmV0dXJuCgl9CgoJc3RkVHgsIGVyciA6PSBDb252ZXJ0VHhUb1N0ZFR4KGN0eC5MZWdhY3lBbWlubywgdHguR2V0VHgoKSkKCWlmIHJlc3QuQ2hlY2tJbnRlcm5hbFNlcnZlckVycm9yKHcsIGVycikgewoJCXJldHVybgoJfQoKCW91dHB1dCwgZXJyIDo9IGN0eC5MZWdhY3lBbWluby5NYXJzaGFsSlNPTihzdGRUeCkKCWlmIHJlc3QuQ2hlY2tJbnRlcm5hbFNlcnZlckVycm9yKHcsIGVycikgewoJCXJldHVybgoJfQoKCXcuSGVhZGVyKCkuU2V0KCZxdW90O0NvbnRlbnQtVHlwZSZxdW90OywgJnF1b3Q7YXBwbGljYXRpb24vanNvbiZxdW90OykKCXcuV3JpdGVIZWFkZXIoaHR0cC5TdGF0dXNPSykKCV8sIF8gPSB3LldyaXRlKG91dHB1dCkKfQoKLy8gQnVpbGRVbnNpZ25lZFR4IGJ1aWxkcyBhIHRyYW5zYWN0aW9uIHRvIGJlIHNpZ25lZCBnaXZlbiBhIHNldCBvZiBtZXNzYWdlcy4gVGhlCi8vIHRyYW5zYWN0aW9uIGlzIGluaXRpYWxseSBjcmVhdGVkIHZpYSB0aGUgcHJvdmlkZWQgZmFjdG9yeSdzIGdlbmVyYXRvci4gT25jZQovLyBjcmVhdGVkLCB0aGUgZmVlLCBtZW1vLCBhbmQgbWVzc2FnZXMgYXJlIHNldC4KZnVuYyBCdWlsZFVuc2lnbmVkVHgodHhmIEZhY3RvcnksIG1zZ3MgLi4uc2RrLk1zZykgKGNsaWVudC5UeEJ1aWxkZXIsIGVycm9yKSB7CglpZiB0eGYuY2hhaW5JRCA9PSAmcXVvdDsmcXVvdDsgewoJCXJldHVybiBuaWwsIGZtdC5FcnJvcmYoJnF1b3Q7Y2hhaW4gSUQgcmVxdWlyZWQgYnV0IG5vdCBzcGVjaWZpZWQmcXVvdDspCgl9CgoJZmVlcyA6PSB0eGYuZmVlcwoKCWlmICF0eGYuZ2FzUHJpY2VzLklzWmVybygpIHsKCQlpZiAhZmVlcy5Jc1plcm8oKSB7CgkJCXJldHVybiBuaWwsIGVycm9ycy5OZXcoJnF1b3Q7Y2Fubm90IHByb3ZpZGUgYm90aCBmZWVzIGFuZCBnYXMgcHJpY2VzJnF1b3Q7KQoJCX0KCgkJZ2xEZWMgOj0gc2RrLk5ld0RlYyhpbnQ2NCh0eGYuZ2FzKSkKCgkJLy8gRGVyaXZlIHRoZSBmZWVzIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBnYXMgcHJpY2VzLCB3aGVyZQoJCS8vIGZlZSA9IGNlaWwoZ2FzUHJpY2UgKiBnYXNMaW1pdCkuCgkJZmVlcyA9IG1ha2Uoc2RrLkNvaW5zLCBsZW4odHhmLmdhc1ByaWNlcykpCgoJCWZvciBpLCBncCA6PSByYW5nZSB0eGYuZ2FzUHJpY2VzIHsKCQkJZmVlIDo9IGdwLkFtb3VudC5NdWwoZ2xEZWMpCgkJCWZlZXNbaV0gPSBzZGsuTmV3Q29pbihncC5EZW5vbSwgZmVlLkNlaWwoKS5Sb3VuZEludCgpKQoJCX0KCX0KCgl0eCA6PSB0eGYudHhDb25maWcuTmV3VHhCdWlsZGVyKCkKCglpZiBlcnIgOj0gdHguU2V0TXNncyhtc2dzLi4uKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9CgoJdHguU2V0TWVtbyh0eGYubWVtbykKCXR4LlNldEZlZUFtb3VudChmZWVzKQoJdHguU2V0R2FzTGltaXQodHhmLmdhcykKCXR4LlNldFRpbWVvdXRIZWlnaHQodHhmLlRpbWVvdXRIZWlnaHQoKSkKCglyZXR1cm4gdHgsIG5pbAp9CgovLyBCdWlsZFNpbVR4IGNyZWF0ZXMgYW4gdW5zaWduZWQgdHggd2l0aCBhbiBlbXB0eSBzaW5nbGUgc2lnbmF0dXJlIGFuZCByZXR1cm5zCi8vIHRoZSBlbmNvZGVkIHRyYW5zYWN0aW9uIG9yIGFuIGVycm9yIGlmIHRoZSB1bnNpZ25lZCB0cmFuc2FjdGlvbiBjYW5ub3QgYmUKLy8gYnVpbHQuCmZ1bmMgQnVpbGRTaW1UeCh0eGYgRmFjdG9yeSwgbXNncyAuLi5zZGsuTXNnKSAoW11ieXRlLCBlcnJvcikgewoJdHhiLCBlcnIgOj0gQnVpbGRVbnNpZ25lZFR4KHR4ZiwgbXNncy4uLikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoKCS8vIENyZWF0ZSBhbiBlbXB0eSBzaWduYXR1cmUgbGl0ZXJhbCBhcyB0aGUgYW50ZSBoYW5kbGVyIHdpbGwgcG9wdWxhdGUgd2l0aCBhCgkvLyBzZW50aW5lbCBwdWJrZXkuCglzaWcgOj0gc2lnbmluZy5TaWduYXR1cmVWMnsKCQlQdWJLZXk6ICZhbXA7c2VjcDI1NmsxLlB1YktleXt9LAoJCURhdGE6ICZhbXA7c2lnbmluZy5TaW5nbGVTaWduYXR1cmVEYXRhewoJCQlTaWduTW9kZTogdHhmLnNpZ25Nb2RlLAoJCX0sCgkJU2VxdWVuY2U6IHR4Zi5TZXF1ZW5jZSgpLAoJfQoJaWYgZXJyIDo9IHR4Yi5TZXRTaWduYXR1cmVzKHNpZyk7IGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoKCXByb3RvUHJvdmlkZXIsIG9rIDo9IHR4Yi4oYXV0aHR4LlByb3RvVHhQcm92aWRlcikKCWlmICFvayB7CgkJcmV0dXJuIG5pbCwgZm10LkVycm9yZigmcXVvdDtjYW5ub3Qgc2ltdWxhdGUgYW1pbm8gdHgmcXVvdDspCgl9CglzaW1SZXEgOj0gdHguU2ltdWxhdGVSZXF1ZXN0e1R4OiBwcm90b1Byb3ZpZGVyLkdldFByb3RvVHgoKX0KCglyZXR1cm4gc2ltUmVxLk1hcnNoYWwoKQp9CgovLyBDYWxjdWxhdGVHYXMgc2ltdWxhdGVzIHRoZSBleGVjdXRpb24gb2YgYSB0cmFuc2FjdGlvbiBhbmQgcmV0dXJucyB0aGUKLy8gc2ltdWxhdGlvbiByZXNwb25zZSBvYnRhaW5lZCBieSB0aGUgcXVlcnkgYW5kIHRoZSBhZGp1c3RlZCBnYXMgYW1vdW50LgpmdW5jIENhbGN1bGF0ZUdhcygKCXF1ZXJ5RnVuYyBmdW5jKHN0cmluZywgW11ieXRlKSAoW11ieXRlLCBpbnQ2NCwgZXJyb3IpLCB0eGYgRmFjdG9yeSwgbXNncyAuLi5zZGsuTXNnLAopICh0eC5TaW11bGF0ZVJlc3BvbnNlLCB1aW50NjQsIGVycm9yKSB7Cgl0eEJ5dGVzLCBlcnIgOj0gQnVpbGRTaW1UeCh0eGYsIG1zZ3MuLi4pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gdHguU2ltdWxhdGVSZXNwb25zZXt9LCAwLCBlcnIKCX0KCgkvLyBUT0RPIFRoaXMgc2hvdWxkIHVzZSB0aGUgZ2VuZXJhdGVkIHR4IHNlcnZpY2UgQ2xpZW50LgoJLy8gaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2lzc3Vlcy83NzI2CglieiwgXywgZXJyIDo9IHF1ZXJ5RnVuYygmcXVvdDsvY29zbW9zLnR4LnYxYmV0YTEuU2VydmljZS9TaW11bGF0ZSZxdW90OywgdHhCeXRlcykKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiB0eC5TaW11bGF0ZVJlc3BvbnNle30sIDAsIGVycgoJfQoKCXZhciBzaW1SZXMgdHguU2ltdWxhdGVSZXNwb25zZQoKCWlmIGVyciA6PSBzaW1SZXMuVW5tYXJzaGFsKGJ6KTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHR4LlNpbXVsYXRlUmVzcG9uc2V7fSwgMCwgZXJyCgl9CgoJcmV0dXJuIHNpbVJlcywgdWludDY0KHR4Zi5HYXNBZGp1c3RtZW50KCkgKiBmbG9hdDY0KHNpbVJlcy5HYXNJbmZvLkdhc1VzZWQpKSwgbmlsCn0KCi8vIFByZXBhcmVGYWN0b3J5IGVuc3VyZXMgdGhlIGFjY291bnQgZGVmaW5lZCBieSBjdHguR2V0RnJvbUFkZHJlc3MoKSBleGlzdHMgYW5kCi8vIGlmIHRoZSBhY2NvdW50IG51bWJlciBhbmQvb3IgdGhlIGFjY291bnQgc2VxdWVuY2UgbnVtYmVyIGFyZSB6ZXJvIChub3Qgc2V0KSwKLy8gdGhleSB3aWxsIGJlIHF1ZXJpZWQgZm9yIGFuZCBzZXQgb24gdGhlIHByb3ZpZGVkIEZhY3RvcnkuIEEgbmV3IEZhY3Rvcnkgd2l0aAovLyB0aGUgdXBkYXRlZCBmaWVsZHMgd2lsbCBiZSByZXR1cm5lZC4KZnVuYyBQcmVwYXJlRmFjdG9yeShjbGllbnRDdHggY2xpZW50LkNvbnRleHQsIHR4ZiBGYWN0b3J5KSAoRmFjdG9yeSwgZXJyb3IpIHsKCWZyb20gOj0gY2xpZW50Q3R4LkdldEZyb21BZGRyZXNzKCkKCglpZiBlcnIgOj0gdHhmLmFjY291bnRSZXRyaWV2ZXIuRW5zdXJlRXhpc3RzKGNsaWVudEN0eCwgZnJvbSk7IGVyciAhPSBuaWwgewoJCXJldHVybiB0eGYsIGVycgoJfQoKCWluaXROdW0sIGluaXRTZXEgOj0gdHhmLmFjY291bnROdW1iZXIsIHR4Zi5zZXF1ZW5jZQoJaWYgaW5pdE51bSA9PSAwIHx8IGluaXRTZXEgPT0gMCB7CgkJbnVtLCBzZXEsIGVyciA6PSB0eGYuYWNjb3VudFJldHJpZXZlci5HZXRBY2NvdW50TnVtYmVyU2VxdWVuY2UoY2xpZW50Q3R4LCBmcm9tKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gdHhmLCBlcnIKCQl9CgoJCWlmIGluaXROdW0gPT0gMCB7CgkJCXR4ZiA9IHR4Zi5XaXRoQWNjb3VudE51bWJlcihudW0pCgkJfQoKCQlpZiBpbml0U2VxID09IDAgewoJCQl0eGYgPSB0eGYuV2l0aFNlcXVlbmNlKHNlcSkKCQl9Cgl9CgoJcmV0dXJuIHR4ZiwgbmlsCn0KCi8vIFNpZ25XaXRoUHJpdktleSBzaWducyBhIGdpdmVuIHR4IHdpdGggdGhlIGdpdmVuIHByaXZhdGUga2V5LCBhbmQgcmV0dXJucyB0aGUKLy8gY29ycmVzcG9uZGluZyBTaWduYXR1cmVWMiBpZiB0aGUgc2lnbmluZyBpcyBzdWNjZXNzZnVsLgpmdW5jIFNpZ25XaXRoUHJpdktleSgKCXNpZ25Nb2RlIHNpZ25pbmcuU2lnbk1vZGUsIHNpZ25lckRhdGEgYXV0aHNpZ25pbmcuU2lnbmVyRGF0YSwKCXR4QnVpbGRlciBjbGllbnQuVHhCdWlsZGVyLCBwcml2IGNyeXB0b3R5cGVzLlByaXZLZXksIHR4Q29uZmlnIGNsaWVudC5UeENvbmZpZywKCWFjY1NlcSB1aW50NjQsCikgKHNpZ25pbmcuU2lnbmF0dXJlVjIsIGVycm9yKSB7Cgl2YXIgc2lnVjIgc2lnbmluZy5TaWduYXR1cmVWMgoKCS8vIEdlbmVyYXRlIHRoZSBieXRlcyB0byBiZSBzaWduZWQuCglzaWduQnl0ZXMsIGVyciA6PSB0eENvbmZpZy5TaWduTW9kZUhhbmRsZXIoKS5HZXRTaWduQnl0ZXMoc2lnbk1vZGUsIHNpZ25lckRhdGEsIHR4QnVpbGRlci5HZXRUeCgpKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHNpZ1YyLCBlcnIKCX0KCgkvLyBTaWduIHRob3NlIGJ5dGVzCglzaWduYXR1cmUsIGVyciA6PSBwcml2LlNpZ24oc2lnbkJ5dGVzKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHNpZ1YyLCBlcnIKCX0KCgkvLyBDb25zdHJ1Y3QgdGhlIFNpZ25hdHVyZVYyIHN0cnVjdAoJc2lnRGF0YSA6PSBzaWduaW5nLlNpbmdsZVNpZ25hdHVyZURhdGF7CgkJU2lnbk1vZGU6ICBzaWduTW9kZSwKCQlTaWduYXR1cmU6IHNpZ25hdHVyZSwKCX0KCglzaWdWMiA9IHNpZ25pbmcuU2lnbmF0dXJlVjJ7CgkJUHViS2V5OiAgIHByaXYuUHViS2V5KCksCgkJRGF0YTogICAgICZhbXA7c2lnRGF0YSwKCQlTZXF1ZW5jZTogYWNjU2VxLAoJfQoKCXJldHVybiBzaWdWMiwgbmlsCn0KCmZ1bmMgY2hlY2tNdWx0aXBsZVNpZ25lcnMobW9kZSBzaWduaW5nLlNpZ25Nb2RlLCB0eCBhdXRoc2lnbmluZy5UeCkgZXJyb3IgewoJaWYgbW9kZSA9PSBzaWduaW5nLlNpZ25Nb2RlX1NJR05fTU9ERV9ESVJFQ1QgJmFtcDsmYW1wOwoJCWxlbih0eC5HZXRTaWduZXJzKCkpICZndDsgMSB7CgkJcmV0dXJuIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJOb3RTdXBwb3J0ZWQsICZxdW90O1NpZ25pbmcgaW4gRElSRUNUIG1vZGUgaXMgb25seSBzdXBwb3J0ZWQgZm9yIHRyYW5zYWN0aW9ucyB3aXRoIG9uZSBzaWduZXIgb25seSZxdW90OykKCX0KCXJldHVybiBuaWwKfQoKLy8gU2lnbiBzaWducyBhIGdpdmVuIHR4IHdpdGggYSBuYW1lZCBrZXkuIFRoZSBieXRlcyBzaWduZWQgb3ZlciBhcmUgY2FuY29uaWNhbC4KLy8gVGhlIHJlc3VsdGluZyBzaWduYXR1cmUgd2lsbCBiZSBhZGRlZCB0byB0aGUgdHJhbnNhY3Rpb24gYnVpbGRlciBvdmVyd3JpdGluZyB0aGUgcHJldmlvdXMKLy8gb25lcyBpZiBvdmVyd3JpdGU9dHJ1ZSAob3RoZXJ3aXNlLCB0aGUgc2lnbmF0dXJlIHdpbGwgYmUgYXBwZW5kZWQpLgovLyBTaWduaW5nIGEgdHJhbnNhY3Rpb24gd2l0aCBtdXRsdGlwbGUgc2lnbmVycyBpbiB0aGUgRElSRUNUIG1vZGUgaXMgbm90IHN1cHBydGVkIGFuZCB3aWxsCi8vIHJldHVybiBhbiBlcnJvci4KLy8gQW4gZXJyb3IgaXMgcmV0dXJuZWQgdXBvbiBmYWlsdXJlLgpmdW5jIFNpZ24odHhmIEZhY3RvcnksIG5hbWUgc3RyaW5nLCB0eEJ1aWxkZXIgY2xpZW50LlR4QnVpbGRlciwgb3ZlcndyaXRlU2lnIGJvb2wpIGVycm9yIHsKCWlmIHR4Zi5rZXliYXNlID09IG5pbCB7CgkJcmV0dXJuIGVycm9ycy5OZXcoJnF1b3Q7a2V5YmFzZSBtdXN0IGJlIHNldCBwcmlvciB0byBzaWduaW5nIGEgdHJhbnNhY3Rpb24mcXVvdDspCgl9CgoJc2lnbk1vZGUgOj0gdHhmLnNpZ25Nb2RlCglpZiBzaWduTW9kZSA9PSBzaWduaW5nLlNpZ25Nb2RlX1NJR05fTU9ERV9VTlNQRUNJRklFRCB7CgkJLy8gdXNlIHRoZSBTaWduTW9kZUhhbmRsZXIncyBkZWZhdWx0IG1vZGUgaWYgdW5zcGVjaWZpZWQKCQlzaWduTW9kZSA9IHR4Zi50eENvbmZpZy5TaWduTW9kZUhhbmRsZXIoKS5EZWZhdWx0TW9kZSgpCgl9CglpZiBlcnIgOj0gY2hlY2tNdWx0aXBsZVNpZ25lcnMoc2lnbk1vZGUsIHR4QnVpbGRlci5HZXRUeCgpKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCWtleSwgZXJyIDo9IHR4Zi5rZXliYXNlLktleShuYW1lKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoJcHViS2V5IDo9IGtleS5HZXRQdWJLZXkoKQoJc2lnbmVyRGF0YSA6PSBhdXRoc2lnbmluZy5TaWduZXJEYXRhewoJCUNoYWluSUQ6ICAgICAgIHR4Zi5jaGFpbklELAoJCUFjY291bnROdW1iZXI6IHR4Zi5hY2NvdW50TnVtYmVyLAoJCVNlcXVlbmNlOiAgICAgIHR4Zi5zZXF1ZW5jZSwKCX0KCgkvLyBGb3IgU0lHTl9NT0RFX0RJUkVDVCwgY2FsbGluZyBTZXRTaWduYXR1cmVzIGNhbGxzIHNldFNpZ25lckluZm9zIG9uCgkvLyBUeEJ1aWxkZXIgdW5kZXIgdGhlIGhvb2QsIGFuZCBTaWduZXJJbmZvcyBpcyBuZWVkZWQgdG8gZ2VuZXJhdGVkIHRoZQoJLy8gc2lnbiBieXRlcy4gVGhpcyBpcyB0aGUgcmVhc29uIGZvciBzZXR0aW5nIFNldFNpZ25hdHVyZXMgaGVyZSwgd2l0aCBhCgkvLyBuaWwgc2lnbmF0dXJlLgoJLy8KCS8vIE5vdGU6IHRoaXMgbGluZSBpcyBub3QgbmVlZGVkIGZvciBTSUdOX01PREVfTEVHQUNZX0FNSU5PLCBidXQgcHV0dGluZyBpdAoJLy8gYWxzbyBkb2Vzbid0IGFmZmVjdCBpdHMgZ2VuZXJhdGVkIHNpZ24gYnl0ZXMsIHNvIGZvciBjb2RlJ3Mgc2ltcGxpY2l0eQoJLy8gc2FrZSwgd2UgcHV0IGl0IGhlcmUuCglzaWdEYXRhIDo9IHNpZ25pbmcuU2luZ2xlU2lnbmF0dXJlRGF0YXsKCQlTaWduTW9kZTogIHNpZ25Nb2RlLAoJCVNpZ25hdHVyZTogbmlsLAoJfQoJc2lnIDo9IHNpZ25pbmcuU2lnbmF0dXJlVjJ7CgkJUHViS2V5OiAgIHB1YktleSwKCQlEYXRhOiAgICAgJmFtcDtzaWdEYXRhLAoJCVNlcXVlbmNlOiB0eGYuU2VxdWVuY2UoKSwKCX0KCXZhciBwcmV2U2lnbmF0dXJlcyBbXXNpZ25pbmcuU2lnbmF0dXJlVjIKCWlmICFvdmVyd3JpdGVTaWcgewoJCXByZXZTaWduYXR1cmVzLCBlcnIgPSB0eEJ1aWxkZXIuR2V0VHgoKS5HZXRTaWduYXR1cmVzVjIoKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoJfQoJaWYgZXJyIDo9IHR4QnVpbGRlci5TZXRTaWduYXR1cmVzKHNpZyk7IGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCgkvLyBHZW5lcmF0ZSB0aGUgYnl0ZXMgdG8gYmUgc2lnbmVkLgoJYnl0ZXNUb1NpZ24sIGVyciA6PSB0eGYudHhDb25maWcuU2lnbk1vZGVIYW5kbGVyKCkuR2V0U2lnbkJ5dGVzKHNpZ25Nb2RlLCBzaWduZXJEYXRhLCB0eEJ1aWxkZXIuR2V0VHgoKSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCgkvLyBTaWduIHRob3NlIGJ5dGVzCglzaWdCeXRlcywgXywgZXJyIDo9IHR4Zi5rZXliYXNlLlNpZ24obmFtZSwgYnl0ZXNUb1NpZ24pCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJLy8gQ29uc3RydWN0IHRoZSBTaWduYXR1cmVWMiBzdHJ1Y3QKCXNpZ0RhdGEgPSBzaWduaW5nLlNpbmdsZVNpZ25hdHVyZURhdGF7CgkJU2lnbk1vZGU6ICBzaWduTW9kZSwKCQlTaWduYXR1cmU6IHNpZ0J5dGVzLAoJfQoJc2lnID0gc2lnbmluZy5TaWduYXR1cmVWMnsKCQlQdWJLZXk6ICAgcHViS2V5LAoJCURhdGE6ICAgICAmYW1wO3NpZ0RhdGEsCgkJU2VxdWVuY2U6IHR4Zi5TZXF1ZW5jZSgpLAoJfQoKCWlmIG92ZXJ3cml0ZVNpZyB7CgkJcmV0dXJuIHR4QnVpbGRlci5TZXRTaWduYXR1cmVzKHNpZykKCX0KCXByZXZTaWduYXR1cmVzID0gYXBwZW5kKHByZXZTaWduYXR1cmVzLCBzaWcpCglyZXR1cm4gdHhCdWlsZGVyLlNldFNpZ25hdHVyZXMocHJldlNpZ25hdHVyZXMuLi4pCn0KCi8vIEdhc0VzdGltYXRlUmVzcG9uc2UgZGVmaW5lcyBhIHJlc3BvbnNlIGRlZmluaXRpb24gZm9yIHR4IGdhcyBlc3RpbWF0aW9uLgp0eXBlIEdhc0VzdGltYXRlUmVzcG9uc2Ugc3RydWN0IHsKCUdhc0VzdGltYXRlIHVpbnQ2NCBganNvbjomcXVvdDtnYXNfZXN0aW1hdGUmcXVvdDsgeWFtbDomcXVvdDtnYXNfZXN0aW1hdGUmcXVvdDtgCn0KCmZ1bmMgKGdyIEdhc0VzdGltYXRlUmVzcG9uc2UpIFN0cmluZygpIHN0cmluZyB7CglyZXR1cm4gZm10LlNwcmludGYoJnF1b3Q7Z2FzIGVzdGltYXRlOiAlZCZxdW90OywgZ3IuR2FzRXN0aW1hdGUpCn0K"}})],1),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAodyAqd3JhcHBlcikgU2V0RmVlR3JhbnRlcihmZWVHcmFudGVyIHNkay5BY2NBZGRyZXNzKSB7CglpZiB3LnR4LkF1dGhJbmZvLkZlZSA9PSBuaWwgewoJCXcudHguQXV0aEluZm8uRmVlID0gJmFtcDt0eC5GZWV7fQoJfQoKCXcudHguQXV0aEluZm8uRmVlLkdyYW50ZXIgPSBmZWVHcmFudGVyLlN0cmluZygpCgoJLy8gc2V0IGF1dGhJbmZvQnogdG8gbmlsIGJlY2F1c2UgdGhlIGNhY2hlZCBhdXRoSW5mb0J6IG5vIGxvbmdlciBtYXRjaGVzIHR4LkF1dGhJbmZvCgl3LmF1dGhJbmZvQnogPSBuaWwKfQ=="}})],1),l._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRmVlIGluY2x1ZGVzIHRoZSBhbW91bnQgb2YgY29pbnMgcGFpZCBpbiBmZWVzIGFuZCB0aGUgbWF4aW11bQovLyBnYXMgdG8gYmUgdXNlZCBieSB0aGUgdHJhbnNhY3Rpb24uIFRoZSByYXRpbyB5aWVsZHMgYW4gZWZmZWN0aXZlICZxdW90O2dhc3ByaWNlJnF1b3Q7LAovLyB3aGljaCBtdXN0IGJlIGFib3ZlIHNvbWUgbWltaW51bSB0byBiZSBhY2NlcHRlZCBpbnRvIHRoZSBtZW1wb29sLgptZXNzYWdlIEZlZSB7CiAgLy8gYW1vdW50IGlzIHRoZSBhbW91bnQgb2YgY29pbnMgdG8gYmUgcGFpZCBhcyBhIGZlZQogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgPSAxCiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmNhc3RyZXBlYXRlZCkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zJnF1b3Q7XTsKCiAgLy8gZ2FzX2xpbWl0IGlzIHRoZSBtYXhpbXVtIGdhcyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyYW5zYWN0aW9uIHByb2Nlc3NpbmcKICAvLyBiZWZvcmUgYW4gb3V0IG9mIGdhcyBlcnJvciBvY2N1cnMKICB1aW50NjQgZ2FzX2xpbWl0ID0gMjsKCiAgLy8gaWYgdW5zZXQsIHRoZSBmaXJzdCBzaWduZXIgaXMgcmVzcG9uc2libGUgZm9yIHBheWluZyB0aGUgZmVlcy4gSWYgc2V0LCB0aGUgc3BlY2lmaWVkIGFjY291bnQgbXVzdCBwYXkgdGhlIGZlZXMuCiAgLy8gdGhlIHBheWVyIG11c3QgYmUgYSB0eCBzaWduZXIgKGFuZCB0aHVzIGhhdmUgc2lnbmVkIHRoaXMgZmllbGQgaW4gQXV0aEluZm8pLgogIC8vIHNldHRpbmcgdGhpcyBmaWVsZCBkb2VzICpub3QqIGNoYW5nZSB0aGUgb3JkZXJpbmcgb2YgcmVxdWlyZWQgc2lnbmVycyBmb3IgdGhlIHRyYW5zYWN0aW9uLgogIHN0cmluZyBwYXllciA9IDM7CgogIC8vIGlmIHNldCwgdGhlIGZlZSBwYXllciAoZWl0aGVyIHRoZSBmaXJzdCBzaWduZXIgb3IgdGhlIHZhbHVlIG9mIHRoZSBwYXllciBmaWVsZCkgcmVxdWVzdHMgdGhhdCBhIGZlZSBncmFudCBiZSB1c2VkCiAgLy8gdG8gcGF5IGZlZXMgaW5zdGVhZCBvZiB0aGUgZmVlIHBheWVyJ3Mgb3duIGJhbGFuY2UuIElmIGFuIGFwcHJvcHJpYXRlIGZlZSBncmFudCBkb2VzIG5vdCBleGlzdCBvciB0aGUgY2hhaW4gZG9lcwogIC8vIG5vdCBzdXBwb3J0IGZlZSBncmFudHMsIHRoaXMgd2lsbCBmYWlsCiAgc3RyaW5nIGdyYW50ZXIgPSA0Owp9"}})],1),l._v(" "),Z("p",[l._v("Example cmd:")]),l._v(" "),Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li9zaW1kIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgLS10aXRsZT0mcXVvdDtUZXN0IFByb3Bvc2FsJnF1b3Q7IC0tZGVzY3JpcHRpb249JnF1b3Q7TXkgYXdlc29tZSBwcm9wb3NhbCZxdW90OyAtLXR5cGU9JnF1b3Q7VGV4dCZxdW90OyAtLWZyb20gdmFsaWRhdG9yLWtleSAtLWZlZS1ncmFudGVyPWNvc21vczF4aDQ0aHh0N3NwcjY3aHFhYTdueXg1Z251dHJ6NWZyYXc2Z3J4biAtLWNoYWluLWlkPXRlc3RuZXQgLS1mZWVzPSZxdW90OzEwc3Rha2UmcXVvdDsK"}}),l._v(" "),Z("h2",{attrs:{id:"granted-fee-deductions"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#granted-fee-deductions"}},[l._v("#")]),l._v(" Granted Fee Deductions")]),l._v(" "),Z("p",[l._v("Fees are deducted from grants in the "),Z("code",[l._v("x/auth")]),l._v(" ante handler. To learn more about how ante handlers work, read the "),Z("RouterLink",{attrs:{to:"/auth/spec/03_antehandlers.html"}},[l._v("Auth Module AnteHandlers Guide")]),l._v(".")],1),l._v(" "),Z("h2",{attrs:{id:"gas"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[l._v("#")]),l._v(" Gas")]),l._v(" "),Z("p",[l._v("In order to prevent DoS attacks, using a filtered "),Z("code",[l._v("x/feegrant")]),l._v(" incurs gas. The SDK must assure that the "),Z("code",[l._v("grantee")]),l._v("'s transactions all conform to the filter set by the "),Z("code",[l._v("granter")]),l._v(". The SDK does this by iterating over the allowed messages in the filter and charging 10 gas per filtered message. The SDK will then iterate over the messages being sent by the "),Z("code",[l._v("grantee")]),l._v(" to ensure the messages adhere to the filter, also charging 10 gas per message. The SDK will stop iterating and fail the transaction if it finds a message that does not conform to the filter.")]),l._v(" "),Z("p",[Z("strong",[l._v("WARNING")]),l._v(": The gas is charged against the granted allowance. Ensure your messages conform to the filter, if any, before sending transactions using your allowance.")]),l._v(" "),Z("h2",{attrs:{id:"pruning"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#pruning"}},[l._v("#")]),l._v(" Pruning")]),l._v(" "),Z("p",[l._v("A queue in the state maintained with the prefix of expiration of the grants and checks them on EndBlock with the current block time for every block to prune.")])],1)}),[],!1,null,null,null);c.default=g.exports}}]);
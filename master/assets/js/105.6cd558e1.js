(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{607:function(e,a,t){"use strict";t.r(a);var s=t(1),d=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-045-baseapp-check-deliver-tx-as-middlewares"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-045-baseapp-check-deliver-tx-as-middlewares"}},[e._v("#")]),e._v(" ADR 045: BaseApp "),t("code",[e._v("{Check,Deliver}Tx")]),e._v(" as Middlewares")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("20.08.2021: Initial draft.")]),e._v(" "),t("li",[e._v("07.12.2021: Update "),t("code",[e._v("tx.Handler")]),e._v(" interface ("),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10693",target:"_blank",rel:"noopener noreferrer"}},[e._v("#10693"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("ACCEPTED")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("This ADR replaces the current BaseApp "),t("code",[e._v("runTx")]),e._v(" and antehandlers design with a middleware-based design.")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("BaseApp's implementation of ABCI "),t("code",[e._v("{Check,Deliver}Tx()")]),e._v(" and its own "),t("code",[e._v("Simulate()")]),e._v(" method call the "),t("code",[e._v("runTx")]),e._v(" method under the hood, which first runs antehandlers, then executes "),t("code",[e._v("Msg")]),e._v("s. However, the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9406",target:"_blank",rel:"noopener noreferrer"}},[e._v("transaction Tips"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/2150",target:"_blank",rel:"noopener noreferrer"}},[e._v("refunding unused gas"),t("OutboundLink")],1),e._v(" use cases require custom logic to be run after the "),t("code",[e._v("Msg")]),e._v("s execution. There is currently no way to achieve this.")]),e._v(" "),t("p",[e._v("An naive solution would be to add post-"),t("code",[e._v("Msg")]),e._v(" hooks to BaseApp. However, the Cosmos SDK team thinks in parallel about the bigger picture of making app wiring simpler ("),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/9182",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9181"),t("OutboundLink")],1),e._v("), which includes making BaseApp more lightweight and modular.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("We decide to transform Baseapp's implementation of ABCI "),t("code",[e._v("{Check,Deliver}Tx")]),e._v(" and its own "),t("code",[e._v("Simulate")]),e._v(" methods to use a middleware-based design.")]),e._v(" "),t("p",[e._v("The two following interfaces are the base of the middleware design, and are defined in "),t("code",[e._v("types/tx")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIYW5kbGVyIGludGVyZmFjZSB7CiAgICBDaGVja1R4KGN0eCBjb250ZXh0LkNvbnRleHQsIHJlcSBSZXF1ZXN0LCBjaGVja1JlcSBSZXF1ZXN0Q2hlY2tUeCkgKFJlc3BvbnNlLCBSZXNwb25zZUNoZWNrVHgsIGVycm9yKQogICAgRGVsaXZlclR4KGN0eCBjb250ZXh0LkNvbnRleHQsIHJlcSBSZXF1ZXN0KSAoUmVzcG9uc2UsIGVycm9yKQogICAgU2ltdWxhdGVUeChjdHggY29udGV4dC5Db250ZXh0LCByZXEgUmVxdWVzdCAoUmVzcG9uc2UsIGVycm9yKQp9Cgp0eXBlIE1pZGRsZXdhcmUgZnVuYyhIYW5kbGVyKSBIYW5kbGVyCg=="}}),e._v(" "),t("p",[e._v("where we define the following arguments and return types:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZXF1ZXN0IHN0cnVjdCB7CglUeCAgICAgIHNkay5UeAoJVHhCeXRlcyBbXWJ5dGUKfQoKdHlwZSBSZXNwb25zZSBzdHJ1Y3QgewoJR2FzV2FudGVkIHVpbnQ2NAoJR2FzVXNlZCAgIHVpbnQ2NAoJLy8gTXNnUmVzcG9uc2VzIGlzIGFuIGFycmF5IGNvbnRhaW5pbmcgZWFjaCBNc2cgc2VydmljZSBoYW5kbGVyJ3MgcmVzcG9uc2UKCS8vIHR5cGUsIHBhY2tlZCBpbiBhbiBBbnkuIFRoaXMgd2lsbCBnZXQgcHJvdG8tc2VyaWFsaXplZCBpbnRvIHRoZSBgRGF0YWAgZmllbGQKCS8vIGluIHRoZSBBQkNJIENoZWNrL0RlbGl2ZXJUeCByZXNwb25zZXMuCglNc2dSZXNwb25zZXMgW10qY29kZWN0eXBlcy5BbnkKCUxvZyAgICAgICAgICBzdHJpbmcKCUV2ZW50cyAgICAgICBbXWFiY2kuRXZlbnQKfQoKdHlwZSBSZXF1ZXN0Q2hlY2tUeCBzdHJ1Y3QgewoJVHlwZSBhYmNpLkNoZWNrVHhUeXBlCn0KCnR5cGUgUmVzcG9uc2VDaGVja1R4IHN0cnVjdCB7CglQcmlvcml0eSBpbnQ2NAp9Cg=="}}),e._v(" "),t("p",[e._v("Please note that because CheckTx handles separate logic related to mempool priotization, its signature is different than DeliverTx and SimulateTx.")]),e._v(" "),t("p",[e._v("BaseApp holds a reference to a "),t("code",[e._v("tx.Handler")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCYXNlQXBwICBzdHJ1Y3QgewogICAgLy8gb3RoZXIgZmllbGRzCiAgICB0eEhhbmRsZXIgdHguSGFuZGxlcgp9Cg=="}}),e._v(" "),t("p",[e._v("Baseapp's ABCI "),t("code",[e._v("{Check,Deliver}Tx()")]),e._v(" and "),t("code",[e._v("Simulate()")]),e._v(" methods simply call "),t("code",[e._v("app.txHandler.{Check,Deliver,Simulate}Tx()")]),e._v(" with the relevant arguments. For example, for "),t("code",[e._v("DeliverTx")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBEZWxpdmVyVHgocmVxIGFiY2kuUmVxdWVzdERlbGl2ZXJUeCkgYWJjaS5SZXNwb25zZURlbGl2ZXJUeCB7CiAgICB2YXIgYWJjaVJlcyBhYmNpLlJlc3BvbnNlRGVsaXZlclR4CgljdHggOj0gYXBwLmdldENvbnRleHRGb3JUeChydW5UeE1vZGVEZWxpdmVyLCByZXEuVHgpCglyZXMsIGVyciA6PSBhcHAudHhIYW5kbGVyLkRlbGl2ZXJUeChjdHgsIHR4LlJlcXVlc3R7VHhCeXRlczogcmVxLlR4fSkKCWlmIGVyciAhPSBuaWwgewoJCWFiY2lSZXMgPSBzZGtlcnJvcnMuUmVzcG9uc2VEZWxpdmVyVHgoZXJyLCB1aW50NjQocmVzLkdhc1VzZWQpLCB1aW50NjQocmVzLkdhc1dhbnRlZCksIGFwcC50cmFjZSkKCQlyZXR1cm4gYWJjaVJlcwoJfQoKCWFiY2lSZXMsIGVyciA9IGNvbnZlcnRUeFJlc3BvbnNlVG9EZWxpdmVyVHgocmVzKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHNka2Vycm9ycy5SZXNwb25zZURlbGl2ZXJUeChlcnIsIHVpbnQ2NChyZXMuR2FzVXNlZCksIHVpbnQ2NChyZXMuR2FzV2FudGVkKSwgYXBwLnRyYWNlKQoJfQoKCXJldHVybiBhYmNpUmVzCn0KCi8vIGNvbnZlcnRUeFJlc3BvbnNlVG9EZWxpdmVyVHggY29udmVydHMgYSB0eC5SZXNwb25zZSBpbnRvIGEgYWJjaS5SZXNwb25zZURlbGl2ZXJUeC4KZnVuYyBjb252ZXJ0VHhSZXNwb25zZVRvRGVsaXZlclR4KHR4UmVzIHR4LlJlc3BvbnNlKSAoYWJjaS5SZXNwb25zZURlbGl2ZXJUeCwgZXJyb3IpIHsKCWRhdGEsIGVyciA6PSBtYWtlQUJDSURhdGEodHhSZXMpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gYWJjaS5SZXNwb25zZURlbGl2ZXJUeHt9LCBuaWwKCX0KCglyZXR1cm4gYWJjaS5SZXNwb25zZURlbGl2ZXJUeHsKCQlEYXRhOiAgIGRhdGEsCgkJTG9nOiAgICB0eFJlcy5Mb2csCgkJRXZlbnRzOiB0eFJlcy5FdmVudHMsCgl9LCBuaWwKfQoKLy8gbWFrZUFCQ0lEYXRhIGdlbmVyYXRlcyB0aGUgRGF0YSBmaWVsZCB0byBiZSBzZW50IHRvIEFCQ0kgQ2hlY2svRGVsaXZlclR4LgpmdW5jIG1ha2VBQkNJRGF0YSh0eFJlcyB0eC5SZXNwb25zZSkgKFtdYnl0ZSwgZXJyb3IpIHsKCXJldHVybiBwcm90by5NYXJzaGFsKCZhbXA7c2RrLlR4TXNnRGF0YXtNc2dSZXNwb25zZXM6IHR4UmVzLk1zZ1Jlc3BvbnNlc30pCn0K"}}),e._v(" "),t("p",[e._v("The implementations are similar for "),t("code",[e._v("BaseApp.CheckTx")]),e._v(" and "),t("code",[e._v("BaseApp.Simulate")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("baseapp.txHandler")]),e._v("'s three methods' implementations can obviously be monolithic functions, but for modularity we propose a middleware composition design, where a middleware is simply a function that takes a "),t("code",[e._v("tx.Handler")]),e._v(", and returns another "),t("code",[e._v("tx.Handler")]),e._v(" wrapped around the previous one.")]),e._v(" "),t("h3",{attrs:{id:"implementing-a-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-middleware"}},[e._v("#")]),e._v(" Implementing a Middleware")]),e._v(" "),t("p",[e._v("In practice, middlewares are created by Go function that takes as arguments some parameters needed for the middleware, and returns a "),t("code",[e._v("tx.Middleware")]),e._v(".")]),e._v(" "),t("p",[e._v("For example, for creating an arbitrary "),t("code",[e._v("MyMiddleware")]),e._v(", we can implement:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gbXlUeEhhbmRsZXIgaXMgdGhlIHR4LkhhbmRsZXIgb2YgdGhpcyBtaWRkbGV3YXJlLiBOb3RlIHRoYXQgaXQgaG9sZHMgYQovLyByZWZlcmVuY2UgdG8gdGhlIG5leHQgdHguSGFuZGxlciBpbiB0aGUgc3RhY2suCnR5cGUgbXlUeEhhbmRsZXIgc3RydWN0IHsKICAgIC8vIG5leHQgaXMgdGhlIG5leHQgdHguSGFuZGxlciBpbiB0aGUgbWlkZGxld2FyZSBzdGFjay4KICAgIG5leHQgdHguSGFuZGxlcgogICAgLy8gc29tZSBvdGhlciBmaWVsZHMgdGhhdCBhcmUgcmVsZXZhbnQgdG8gdGhlIG1pZGRsZXdhcmUgY2FuIGJlIGFkZGVkIGhlcmUKfQoKLy8gTmV3TXlNaWRkbGV3YXJlIHJldHVybnMgYSBtaWRkbGV3YXJlIHRoYXQgZG9lcyB0aGlzIGFuZCB0aGF0LgpmdW5jIE5ld015TWlkZGxld2FyZShhcmcxLCBhcmcyKSB0eC5NaWRkbGV3YXJlIHsKICAgIHJldHVybiBmdW5jICh0eGggdHguSGFuZGxlcikgdHguSGFuZGxlciB7CiAgICAgICAgcmV0dXJuIG15VHhIYW5kbGVyewogICAgICAgICAgICBuZXh0OiB0eGgsCiAgICAgICAgICAgIC8vIG9wdGlvbmFsbHksIHNldCBhcmcxLCBhcmcyLi4uIGlmIHRoZXkgYXJlIG5lZWRlZCBpbiB0aGUgbWlkZGxld2FyZQogICAgICAgIH0KICAgIH0KfQoKLy8gQXNzZXJ0IG15VHhIYW5kbGVyIGlzIGEgdHguSGFuZGxlci4KdmFyIF8gdHguSGFuZGxlciA9IG15VHhIYW5kbGVye30KCmZ1bmMgKGggbXlUeEhhbmRsZXIpIENoZWNrVHgoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxIFJlcXVlc3QsIGNoZWNrUmVxIFJlcXVlc3RjaGVja1R4KSAoUmVzcG9uc2UsIFJlc3BvbnNlQ2hlY2tUeCwgZXJyb3IpIHsKICAgIC8vIENoZWNrVHggc3BlY2lmaWMgcHJlLXByb2Nlc3NpbmcgbG9naWMKCiAgICAvLyBydW4gdGhlIG5leHQgbWlkZGxld2FyZQogICAgcmVzLCBjaGVja1JlcywgZXJyIDo9IHR4aC5uZXh0LkNoZWNrVHgoY3R4LCByZXEsIGNoZWNrUmVxKQoKICAgIC8vIENoZWNrVHggc3BlY2lmaWMgcG9zdC1wcm9jZXNzaW5nIGxvZ2ljCgogICAgcmV0dXJuIHJlcywgY2hlY2tSZXMsIGVycgp9CgpmdW5jIChoIG15VHhIYW5kbGVyKSBEZWxpdmVyVHgoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxIFJlcXVlc3QpIChSZXNwb25zZSwgZXJyb3IpIHsKICAgIC8vIERlbGl2ZXJUeCBzcGVjaWZpYyBwcmUtcHJvY2Vzc2luZyBsb2dpYwoKICAgIC8vIHJ1biB0aGUgbmV4dCBtaWRkbGV3YXJlCiAgICByZXMsIGVyciA6PSB0eGgubmV4dC5EZWxpdmVyVHgoY3R4LCB0eCwgcmVxKQoKICAgIC8vIERlbGl2ZXJUeCBzcGVjaWZpYyBwb3N0LXByb2Nlc3NpbmcgbG9naWMKCiAgICByZXR1cm4gcmVzLCBlcnIKfQoKZnVuYyAoaCBteVR4SGFuZGxlcikgU2ltdWxhdGVUeChjdHggY29udGV4dC5Db250ZXh0LCByZXEgUmVxdWVzdCkgKFJlc3BvbnNlLCBlcnJvcikgewogICAgLy8gU2ltdWxhdGVUeCBzcGVjaWZpYyBwcmUtcHJvY2Vzc2luZyBsb2dpYwoKICAgIC8vIHJ1biB0aGUgbmV4dCBtaWRkbGV3YXJlCiAgICByZXMsIGVyciA6PSB0eGgubmV4dC5TaW11bGF0ZVR4KGN0eCwgdHgsIHJlcSkKCiAgICAvLyBTaW11bGF0ZVR4IHNwZWNpZmljIHBvc3QtcHJvY2Vzc2luZyBsb2dpYwoKICAgIHJldHVybiByZXMsIGVycgp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"composing-middlewares"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composing-middlewares"}},[e._v("#")]),e._v(" Composing Middlewares")]),e._v(" "),t("p",[e._v("While BaseApp simply holds a reference to a "),t("code",[e._v("tx.Handler")]),e._v(", this "),t("code",[e._v("tx.Handler")]),e._v(" itself is defined using a middleware stack. The Cosmos SDK exposes a base (i.e. innermost) "),t("code",[e._v("tx.Handler")]),e._v(" called "),t("code",[e._v("RunMsgsTxHandler")]),e._v(", which executes messages.")]),e._v(" "),t("p",[e._v("Then, the app developer can compose multiple middlewares on top on the base "),t("code",[e._v("tx.Handler")]),e._v(". Each middleware can run pre-and-post-processing logic around its next middleware, as described in the section above. Conceptually, as an example, given the middlewares "),t("code",[e._v("A")]),e._v(", "),t("code",[e._v("B")]),e._v(", and "),t("code",[e._v("C")]),e._v(" and the base "),t("code",[e._v("tx.Handler")]),e._v(" "),t("code",[e._v("H")]),e._v(" the stack looks like:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"QS5wcmUKICAgIEIucHJlCiAgICAgICAgQy5wcmUKICAgICAgICAgICAgSCAjIFRoZSBiYXNlIHR4LmhhbmRsZXIsIGZvciBleGFtcGxlIGBSdW5Nc2dzVHhIYW5kbGVyYAogICAgICAgIEMucG9zdAogICAgQi5wb3N0CkEucG9zdAo="}}),e._v(" "),t("p",[e._v("We define a "),t("code",[e._v("ComposeMiddlewares")]),e._v(' function for composing middlewares. It takes the base handler as first argument, and middlewares in the "outer to inner" order. For the above stack, the final '),t("code",[e._v("tx.Handler")]),e._v(" is:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhIYW5kbGVyIDo9IG1pZGRsZXdhcmUuQ29tcG9zZU1pZGRsZXdhcmVzKEgsIEEsIEIsIEMpCg=="}}),e._v(" "),t("p",[e._v("The middleware is set in BaseApp via its "),t("code",[e._v("SetTxHandler")]),e._v(" setter:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gc2ltYXBwL2FwcC5nbwoKdHhIYW5kbGVyIDo9IG1pZGRsZXdhcmUuQ29tcG9zZU1pZGRsZXdhcmVzKC4uLikKYXBwLlNldFR4SGFuZGxlcih0eEhhbmRsZXIpCg=="}}),e._v(" "),t("p",[e._v("The app developer can define their own middlewares, or use the Cosmos SDK's pre-defined middlewares from "),t("code",[e._v("middleware.NewDefaultTxHandler()")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"middlewares-maintained-by-the-cosmos-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#middlewares-maintained-by-the-cosmos-sdk"}},[e._v("#")]),e._v(" Middlewares Maintained by the Cosmos SDK")]),e._v(" "),t("p",[e._v("While the app developer can define and compose the middlewares of their choice, the Cosmos SDK provides a set of middlewares that caters for the ecosystem's most common use cases. These middlewares are:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Middleware")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("RunMsgsTxHandler")]),e._v(" "),t("td",[e._v("This is the base "),t("code",[e._v("tx.Handler")]),e._v(". It replaces the old baseapp's "),t("code",[e._v("runMsgs")]),e._v(", and executes a transaction's "),t("code",[e._v("Msg")]),e._v("s.")])]),e._v(" "),t("tr",[t("td",[e._v("TxDecoderMiddleware")]),e._v(" "),t("td",[e._v("This middleware takes in transaction raw bytes, and decodes them into a "),t("code",[e._v("sdk.Tx")]),e._v(". It replaces the "),t("code",[e._v("baseapp.txDecoder")]),e._v(" field, so that BaseApp stays as thin as possible. Since most middlewares read the contents of the "),t("code",[e._v("sdk.Tx")]),e._v(", the TxDecoderMiddleware should be run first in the middelware stack.")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",[e._v("Each antehandler is converted to its own middleware. These middlewares perform signature verification, fee deductions and other validations on the incoming transaction.")])]),e._v(" "),t("tr",[t("td",[e._v("IndexEventsTxMiddleware")]),e._v(" "),t("td",[e._v("This is a simple middleware that chooses which events to index in Tendermint. Replaces "),t("code",[e._v("baseapp.indexEvents")]),e._v(" (which unfortunately still exists in baseapp too, because it's used to index Begin/EndBlock events)")])]),e._v(" "),t("tr",[t("td",[e._v("RecoveryTxMiddleware")]),e._v(" "),t("td",[e._v("This index recovers from panics. It replaces baseapp.runTx's panic recovery described in "),t("RouterLink",{attrs:{to:"/architecture/adr-022-custom-panic-handling.html"}},[e._v("ADR-022")]),e._v(".")],1)]),e._v(" "),t("tr",[t("td",[e._v("GasTxMiddleware")]),e._v(" "),t("td",[e._v("This replaces the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.43.0/x/auth/ante/setup.go",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Setup")]),t("OutboundLink")],1),e._v(" Antehandler. It sets a GasMeter on sdk.Context. Note that before, GasMeter was set on sdk.Context inside the antehandlers, and there was some mess around the fact that antehandlers had their own panic recovery system so that the GasMeter could be read by baseapp's recovery system. Now, this mess is all removed: one middleware sets GasMeter, another one handles recovery.")])])])]),e._v(" "),t("h3",{attrs:{id:"similarities-and-differences-between-antehandlers-and-middlewares"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#similarities-and-differences-between-antehandlers-and-middlewares"}},[e._v("#")]),e._v(" Similarities and Differences between Antehandlers and Middlewares")]),e._v(" "),t("p",[e._v("The middleware-based design builds upon the existing antehandlers design described in "),t("RouterLink",{attrs:{to:"/architecture/adr-010-modular-antehandler.html"}},[e._v("ADR-010")]),e._v('. Even though the final decision of ADR-010 was to go with the "Simple Decorators" approach, the middleware design is actually very similar to the other '),t("RouterLink",{attrs:{to:"/architecture/adr-010-modular-antehandler.html#decorator-pattern"}},[e._v("Decorator Pattern")]),e._v(" proposal, also used in "),t("a",{attrs:{href:"https://github.com/iov-one/weave",target:"_blank",rel:"noopener noreferrer"}},[e._v("weave"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("h4",{attrs:{id:"similarities-with-antehandlers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#similarities-with-antehandlers"}},[e._v("#")]),e._v(" Similarities with Antehandlers")]),e._v(" "),t("ul",[t("li",[e._v("Designed as chaining/composing small modular pieces.")]),e._v(" "),t("li",[e._v("Allow code reuse for "),t("code",[e._v("{Check,Deliver}Tx")]),e._v(" and for "),t("code",[e._v("Simulate")]),e._v(".")]),e._v(" "),t("li",[e._v("Set up in "),t("code",[e._v("app.go")]),e._v(", and easily customizable by app developers.")]),e._v(" "),t("li",[e._v("Order is important.")])]),e._v(" "),t("h4",{attrs:{id:"differences-with-antehandlers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#differences-with-antehandlers"}},[e._v("#")]),e._v(" Differences with Antehandlers")]),e._v(" "),t("ul",[t("li",[e._v("The Antehandlers are run before "),t("code",[e._v("Msg")]),e._v(" execution, whereas middlewares can run before and after.")]),e._v(" "),t("li",[e._v("The middleware approach uses separate methods for "),t("code",[e._v("{Check,Deliver,Simulate}Tx")]),e._v(", whereas the antehandlers pass a "),t("code",[e._v("simulate bool")]),e._v(" flag and uses the "),t("code",[e._v("sdkCtx.Is{Check,Recheck}Tx()")]),e._v(" flags to determine in which transaction mode we are.")]),e._v(" "),t("li",[e._v("The middleware design lets each middleware hold a reference to the next middleware, whereas the antehandlers pass a "),t("code",[e._v("next")]),e._v(" argument in the "),t("code",[e._v("AnteHandle")]),e._v(" method.")]),e._v(" "),t("li",[e._v("The middleware design use Go's standard "),t("code",[e._v("context.Context")]),e._v(", whereas the antehandlers use "),t("code",[e._v("sdk.Context")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"backwards-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),t("p",[e._v("Since this refactor removes some logic away from BaseApp and into middlewares, it introduces API-breaking changes for app developers. Most notably, instead of creating an antehandler chain in "),t("code",[e._v("app.go")]),e._v(", app developers need to create a middleware stack:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSBhbnRlSGFuZGxlciwgZXJyIDo9IGFudGUuTmV3QW50ZUhhbmRsZXIoCi0gICAgYW50ZS5IYW5kbGVyT3B0aW9uc3sKLSAgICAgICAgQWNjb3VudEtlZXBlcjogICBhcHAuQWNjb3VudEtlZXBlciwKLSAgICAgICAgQmFua0tlZXBlcjogICAgICBhcHAuQmFua0tlZXBlciwKLSAgICAgICAgU2lnbk1vZGVIYW5kbGVyOiBlbmNvZGluZ0NvbmZpZy5UeENvbmZpZy5TaWduTW9kZUhhbmRsZXIoKSwKLSAgICAgICAgRmVlZ3JhbnRLZWVwZXI6ICBhcHAuRmVlR3JhbnRLZWVwZXIsCi0gICAgICAgIFNpZ0dhc0NvbnN1bWVyOiAgYW50ZS5EZWZhdWx0U2lnVmVyaWZpY2F0aW9uR2FzQ29uc3VtZXIsCi0gICAgfSwKLSkKK3R4SGFuZGxlciwgZXJyIDo9IGF1dGhtaWRkbGV3YXJlLk5ld0RlZmF1bHRUeEhhbmRsZXIoYXV0aG1pZGRsZXdhcmUuVHhIYW5kbGVyT3B0aW9uc3sKKyAgICBEZWJ1ZzogICAgICAgICAgICAgYXBwLlRyYWNlKCksCisgICAgSW5kZXhFdmVudHM6ICAgICAgIGluZGV4RXZlbnRzLAorICAgIExlZ2FjeVJvdXRlcjogICAgICBhcHAubGVnYWN5Um91dGVyLAorICAgIE1zZ1NlcnZpY2VSb3V0ZXI6ICBhcHAubXNnU3ZjUm91dGVyLAorICAgIExlZ2FjeUFudGVIYW5kbGVyOiBhbnRlSGFuZGxlciwKKyAgICBUeERlY29kZXI6ICAgICAgICAgZW5jb2RpbmdDb25maWcuVHhDb25maWcuVHhEZWNvZGVyLAorfSkKaWYgZXJyICE9IG5pbCB7CiAgICBwYW5pYyhlcnIpCn0KLSBhcHAuU2V0QW50ZUhhbmRsZXIoYW50ZUhhbmRsZXIpCisgYXBwLlNldFR4SGFuZGxlcih0eEhhbmRsZXIpCg=="}}),e._v(" "),t("p",[e._v("Other more minor API breaking changes will also be provided in the CHANGELOG. As usual, the Cosmos SDK will provide a release migration document for app developers.")]),e._v(" "),t("p",[e._v("This ADR does not introduce any state-machine-, client- or CLI-breaking changes.")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Allow custom logic to be run before an after "),t("code",[e._v("Msg")]),e._v(" execution. This enables the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9406",target:"_blank",rel:"noopener noreferrer"}},[e._v("tips"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/2150",target:"_blank",rel:"noopener noreferrer"}},[e._v("gas refund"),t("OutboundLink")],1),e._v(" uses cases, and possibly other ones.")]),e._v(" "),t("li",[e._v("Make BaseApp more lightweight, and defer complex logic to small modular components.")]),e._v(" "),t("li",[e._v("Separate paths for "),t("code",[e._v("{Check,Deliver,Simulate}Tx")]),e._v(" with different returns types. This allows for improved readability (replace "),t("code",[e._v("if sdkCtx.IsRecheckTx() && !simulate {...}")]),e._v(" with separate methods) and more flexibility (e.g. returning a "),t("code",[e._v("priority")]),e._v(" in "),t("code",[e._v("ResponseCheckTx")]),e._v(").")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("It is hard to understand at first glance the state updates that would occur after a middleware runs given the "),t("code",[e._v("sdk.Context")]),e._v(" and "),t("code",[e._v("tx")]),e._v(". A middleware can have an arbitrary number of nested middleware being called within its function body, each possibly doing some pre- and post-processing before calling the next middleware on the chain. Thus to understand what a middleware is doing, one must also understand what every other middleware further along the chain is also doing, and the order of middlewares matters. This can get quite complicated to understand.")]),e._v(" "),t("li",[e._v("API-breaking changes for app developers.")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("p",[e._v("No neutral consequences.")]),e._v(" "),t("h2",{attrs:{id:"further-discussions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/9934",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9934"),t("OutboundLink")],1),e._v(" Decomposing BaseApp's other ABCI methods into middlewares.")]),e._v(" "),t("li",[e._v("Replace "),t("code",[e._v("sdk.Tx")]),e._v(" interface with the concrete protobuf Tx type in the "),t("code",[e._v("tx.Handler")]),e._v(" methods signature.")])]),e._v(" "),t("h2",{attrs:{id:"test-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),t("p",[e._v("We update the existing baseapp and antehandlers tests to use the new middleware API, but keep the same test cases and logic, to avoid introducing regressions. Existing CLI tests will also be left untouched.")]),e._v(" "),t("p",[e._v("For new middlewares, we introduce unit tests. Since middlewares are purposefully small, unit tests suit well.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[e._v("Initial discussion: https://github.com/cosmos/cosmos-sdk/issues/9585")]),e._v(" "),t("li",[e._v("Implementation: "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/9920",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9920 BaseApp refactor"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10028",target:"_blank",rel:"noopener noreferrer"}},[e._v("#10028 Antehandlers migration"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=d.exports}}]);
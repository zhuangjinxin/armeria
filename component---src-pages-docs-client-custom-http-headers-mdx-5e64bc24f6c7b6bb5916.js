(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scalapb"]}')},pWDZ:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("8o2o"),i=(a("q1tI"),a("7ljp")),r=a("xCMr"),c="Sending custom HTTP headers",l={},s={pageTitle:c,_frontmatter:l},o=r.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sending-custom-http-headers",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h1"},{href:"#sending-custom-http-headers","aria-label":"sending custom http headers permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Sending custom HTTP headers"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-clientswithheaders"}),"Using Clients.withHeaders()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-clientoptionheaders"}),"Using ClientOption.HEADERS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-clientbuilderdecorator"}),"Using ClientBuilder.decorator()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#using-a-derived-client"}),"Using a derived client"))),Object(i.b)("p",null,"When sending an RPC request, it is sometimes required to send HTTP headers with it, such as an authentication token.\nThere are four ways to customize the HTTP headers of your RPC request:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://Clients#withHeaders(Consumer):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Clients.html#withHeaders(java.util.function.Consumer)"}),"type://Clients#withHeaders(Consumer)")," method"),Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://ClientOption#HEADERS"}),"type://ClientOption#HEADERS")," option"),Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://ClientBuilder#decorator(Function):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html#decorator(java.util.function.Function)"}),"type://ClientBuilder#decorator(Function)")," method"),Object(i.b)("li",{parentName:"ul"},"Using a derived client")),Object(i.b)("h2",{id:"using-clientswithheaders",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientswithheaders","aria-label":"using clientswithheaders permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"Clients.withHeaders()")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import static com.linecorp.armeria.common.HttpHeaderNames.AUTHORIZATION;\nimport com.linecorp.armeria.common.util.SafeCloseable;\nimport com.linecorp.armeria.client.Clients;\n\nHelloService.Iface client = Clients.newClient("tbinary+http://example.com/hello",\n                                               HelloService.Iface.class);\ntry (SafeCloseable ignored = Clients.withHeaders(\n        headers -> headers.set(AUTHORIZATION, credential))) {\n    client.hello("authorized personnel");\n}\n')),Object(i.b)("p",null,"If you are setting only a single header,\nyou can use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Clients#withHeader(CharSequence,String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Clients.html#withHeader(java.lang.CharSequence,java.lang.String)"}),"type://Clients#withHeader(CharSequence,String)")," simply:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'try (SafeCloseable ignored = Clients.withHeader(AUTHORIZATION, credential)) {\n    client.hello("authorized personnel");\n}\n')),Object(i.b)("p",null,"You can also nest ",Object(i.b)("inlineCode",{parentName:"p"},"withHeader(s)"),". The following example will send both ",Object(i.b)("inlineCode",{parentName:"p"},"user-agent")," header and\n",Object(i.b)("inlineCode",{parentName:"p"},"authorization")," header when calling ",Object(i.b)("inlineCode",{parentName:"p"},"client.hello()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import static com.linecorp.armeria.common.HttpHeaderNames.USER_AGENT;\n\ntry (SafeCloseable ignored1 = Clients.withHeader(USER_AGENT, myUserAgent)) {\n    for (String cred : credentials) {\n        try (SafeCloseable ignored2 = Clients.withHeaders(AUTHORIZATION, cred)) {\n            client.hello("authorized personnel");\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"using-clientoptionheaders",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientoptionheaders","aria-label":"using clientoptionheaders permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"ClientOption.HEADERS")),Object(i.b)("p",null,"If you have a custom HTTP header whose value does not change often, you can use\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ClientOption#HEADERS"}),"type://ClientOption#HEADERS")," which is more efficient:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import static com.linecorp.armeria.common.HttpHeaderNames.AUTHORIZATION;\nimport com.linecorp.armeria.common.HttpHeaders;\nimport com.linecorp.armeria.client.ClientBuilder;\nimport com.linecorp.armeria.client.ClientOption;\n\nClientBuilder cb = Clients.builder("tbinary+http://example.com/hello");\ncb.setHeader(AUTHORIZATION, credential);\n// or:\n// cb.option(ClientOption.HEADERS, HttpHeaders.of(AUTHORIZATION, credential));\nHelloService.Iface client = cb.build(HelloService.Iface.class);\nclient.hello("authorized personnel");\n')),Object(i.b)("h2",{id:"using-clientbuilderdecorator",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-clientbuilderdecorator","aria-label":"using clientbuilderdecorator permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"ClientBuilder.decorator()")),Object(i.b)("p",null,"If you want more freedom on how you manipulate the request headers, use a decorator:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ClientBuilder cb = Clients.builder("tbinary+http://example.com/hello");\n\n// Add a decorator that inserts the custom header.\ncb.decorator((delegate, ctx, req) -> { // See DecoratingHttpClientFunction and DecoratingRpcClientFunction.\n    HttpRequest newReq = req.withHeaders(req.headers().toBuilder().set(AUTHORIZATION, credential));\n    ctx.updateRequest(newReq);\n    return delegate.execute(ctx, newReq);\n});\n\nHelloService.Iface client = cb.build(HelloService.Iface.class);\nclient.hello("authorized personnel");\n')),Object(i.b)("p",null,"Note that this method is as efficient as the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ClientOption#HEADERS"}),"type://ClientOption#HEADERS")," option.\nChoose whichever you prefer."),Object(i.b)("h2",{id:"using-a-derived-client",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#using-a-derived-client","aria-label":"using a derived client permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using a derived client"),Object(i.b)("p",null,"Although not as simple as using ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Clients#withHeader(CharSequence,String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Clients.html#withHeader(java.lang.CharSequence,java.lang.String)"}),"type://Clients#withHeader(CharSequence,String)"),",\nyou can create a derived client to add more custom headers to an existing client:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HelloService.Iface client = ...;\nHelloService.Iface derivedClient = Clients.newDerivedClient(client, options -> {\n    return ClientOptions.builder()\n                        .options(options)\n                        .decorator(...)  // Add a decorator.\n                        .addHeader(AUTHORIZATION, credential)  // Add an HTTP header.\n                        .build();\n});\n")))}d.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var n=a("Wbzz"),i=a("q1tI"),r=a.n(i),c=a("/94A"),l=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return r.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-custom-http-headers-mdx-5e64bc24f6c7b6bb5916.js.map
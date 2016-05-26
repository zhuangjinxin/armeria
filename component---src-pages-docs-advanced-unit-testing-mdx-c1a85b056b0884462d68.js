(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scalapb"]}')},qrcX:function(e,t,n){"use strict";n.r(t),n.d(t,"pageTitle",(function(){return o})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("8o2o"),r=(n("q1tI"),n("7ljp")),i=n("xCMr"),o="Unit-testing Client and Service",c={},s={pageTitle:o,_frontmatter:c},l=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"unit-testing-client-and-service",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#unit-testing-client-and-service","aria-label":"unit testing client and service permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Unit-testing ",Object(r.b)("inlineCode",{parentName:"h1"},"Client")," and ",Object(r.b)("inlineCode",{parentName:"h1"},"Service")),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#using-a-fake-context-to-emulate-an-incoming-request"}),"Using a fake context to emulate an incoming request"))),Object(r.b)("p",null,"A unit test of a client or a service will require you to prepare two objects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://ClientRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html"}),"type://ClientRequestContext")," or ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://ServiceRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html"}),"type://ServiceRequestContext")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"}),"type://HttpRequest")," or ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://RpcRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RpcRequest.html"}),"type://RpcRequest"))),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html"}),"type://ClientRequestContext")," or ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html"}),"type://ServiceRequestContext")," is a more complex object with many properties than\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"}),"type://HttpRequest")," or ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RpcRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RpcRequest.html"}),"type://RpcRequest"),", and thus Armeria provides the API dedicated to building a fake context\nobject easily:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n\nimport com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.AggregatedHttpResponse;\nimport com.linecorp.armeria.client.ClientRequestContext;\nimport com.linecorp.armeria.server.ServiceRequestContext;\n\nclass MyJUnit5Test {\n\n    private MyClient client;\n    private MyService service;\n\n    @BeforeEach\n    void setUp() {\n        client = ...;\n        service = ...;\n    }\n\n    @Test\n    void testClient() {\n        // Given\n        HttpRequest req = HttpRequest.of(HttpMethod.GET, "/greet?name=foo");\n        ClientRequestContext cctx = ClientRequestContext.of(req);\n\n        // When\n        HttpResponse res = client.execute(cctx, req);\n\n        // Then\n        AggregatedHttpResponse aggregatedRes = res.aggregate().join();\n        assertEquals(200, aggregatedRes.status().code());\n    }\n\n    @Test\n    void testService() {\n        // Given\n        HttpRequest req = HttpRequest.of(HttpMethod.POST, "/greet",\n                                         MediaType.JSON_UTF_8,\n                                         "{ \\"name\\": \\"foo\\" }");\n        ServiceRequestContext sctx = ServiceRequestContext.of(req);\n\n        // When\n        HttpResponse res = service.serve(sctx, req);\n\n        // Then\n        AggregatedHttpResponse aggregatedRes = res.aggregate().join();\n        assertEquals(200, aggregatedRes.status().code());\n    }\n}\n')),Object(r.b)("p",null,"Although the fake context returned by ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ClientRequestContext#of(HttpRequest):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#of(com.linecorp.armeria.common.HttpRequest)"}),"type://ClientRequestContext#of(HttpRequest)")," and\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceRequestContext#of(HttpRequest):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#of(com.linecorp.armeria.common.HttpRequest)"}),"type://ServiceRequestContext#of(HttpRequest)")," will provide sensible defaults,\nyou can override its default properties using a builder:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import java.net.InetAddress;\nimport java.net.InetSocketAddress;\nimport java.util.Map;\n\nimport com.linecorp.armeria.common.SessionProtocol;\nimport com.linecorp.armeria.client.ClientRequestContext;\nimport com.linecorp.armeria.server.RoutingResult;\nimport com.linecorp.armeria.server.ServiceRequestContext;\n\nHttpRequest req = HttpRequest.of(...);\n\nClientRequestContext cctx =\n        ClientRequestContext.builder(req)\n                            .sessionProtocol(SessionProtocol.H1C)\n                            .remoteAddress(new InetSocketAddress("192.168.0.2", 443))\n                            .build();\n\nRoutingResult routingResult =\n        RoutingResult.builder()\n                     .path("/mapped/path")                       // Mapped path\n                     .query("foo=bar&baz=qux")                   // Query string\n                     .pathParams(Map.of("pathParam1", "value1",  // Path parameters\n                                        "pathParam2", "value2"))\n                     .build();\n\nServiceRequestContext sctx =\n        ServiceRequestContext.builder(req)\n                             .clientAddress(InetAddress.getByName("192.168.1.2"))\n                             .routingResult(routingResult);\n                             .build();\n')),Object(r.b)("h2",{id:"using-a-fake-context-to-emulate-an-incoming-request",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#using-a-fake-context-to-emulate-an-incoming-request","aria-label":"using a fake context to emulate an incoming request permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using a fake context to emulate an incoming request"),Object(r.b)("p",null,"It is usually not necessary to build a context object by yourself except when writing a unit test,\nbecause Armeria will always create a context object for you. However, you may need to build a fake context and\ninvoke your request processing pipeline with it when you want to handle the requests received via other sources\nsuch as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Non-Armeria services"),Object(r.b)("li",{parentName:"ul"},"Non-HTTP protocols, e.g. Kafka and STOMP"),Object(r.b)("li",{parentName:"ul"},"Timers, i.e. Trigger a certain request every N minutes.")),Object(r.b)("p",null,"The following example shows how to emit a fake request every minute:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import java.util.concurrent.ScheduledExecutorService;\nimport java.util.concurrent.TimeUnit;\n\nimport com.linecorp.armeria.server.HttpService;\n\nScheduledExecutorService executor = ...;\nHttpService sessionManagementService = (ctx, req) -> ...;\n\n// Send a session expiration request to the session management service\n// every minute.\nexecutor.scheduleWithFixedDelay(() -> {\n    HttpRequest req = HttpRequest.of(HttpMethod.POST, "/expire_stall_sessions");\n    ServiceRequestContext ctx = ServiceRequestContext.of(req);\n    try {\n        HttpResponse res = sessionManagementService.servce(ctx, req);\n        AggregatedHttpResponse aggregatedRes = res.aggregate().get();\n        if (aggregatedRes.status().code() != 200) {\n            System.err.println("Failed to expire stall sessions: " +\n                               aggregatedRes);\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}, 1, 1, TimeUnit.MINUTES);\n')))}p.isMDXComponent=!0},xCMr:function(e,t,n){"use strict";var a=n("Wbzz"),r=n("q1tI"),i=n.n(r),o=n("/94A"),c=n("+ejy");t.a=function(e){var t=Object(a.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-unit-testing-mdx-c1a85b056b0884462d68.js.map
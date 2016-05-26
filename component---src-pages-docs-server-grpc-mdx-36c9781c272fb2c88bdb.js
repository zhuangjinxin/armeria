(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scalapb"]}')},"hFX/":function(e,r,a){"use strict";a.r(r),a.d(r,"pageTitle",(function(){return o})),a.d(r,"_frontmatter",(function(){return s})),a.d(r,"default",(function(){return m}));var t,c=a("8o2o"),i=(a("q1tI"),a("7ljp")),n=a("xCMr"),o="Running a gRPC service",s={},l=(t="Tip",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={pageTitle:o,_frontmatter:s},b=n.a;function m(e){var r=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)(b,Object.assign({},p,a,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"running-a-grpc-service",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h1"},{href:"#running-a-grpc-service","aria-label":"running a grpc service permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Running a gRPC service"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#grpcservice"}),"GrpcService")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#decorating-a-grpcservice"}),"Decorating a GrpcService")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#grpc-web"}),"gRPC-Web")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#unframed-requests"}),"Unframed requests")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#blocking-service-implementation"}),"Blocking service implementation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#exception-propagation"}),"Exception propagation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#server-reflection"}),"Server Reflection")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#see-also"}),"See also"))),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria-examples"}),"armeria-examples")," to find a fully working example.")),Object(i.b)("p",null,"Let's assume we have the following ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://grpc.io/"}),"gRPC")," service definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-protobuf"}),'syntax = "proto3";\n\npackage grpc.hello;\n\noption java_package = "com.example.grpc.hello";\n\nservice HelloService {\n  rpc Hello (HelloRequest) returns (HelloReply) {}\n}\n\nmessage HelloRequest {\n  string name = 1;\n}\n\nmessage HelloReply {\n  string message = 1;\n}\n')),Object(i.b)("p",null,"The Protobuf compiler will produce some Java code under the ",Object(i.b)("inlineCode",{parentName:"p"},"com.example.grpc.hello")," package.\nThe most noteworthy one is ",Object(i.b)("inlineCode",{parentName:"p"},"HelloServiceGrpc.java")," which defines the base service class we will implement:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"public class HelloServiceGrpc {\n    ...\n    public static abstract class HelloServiceImplBase implements BindableService {\n        public void hello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {\n            asyncUnimplementedUnaryCall(METHOD_HELLO, responseObserver);\n        }\n        ...\n    }\n    ...\n}\n")),Object(i.b)("p",null,"Our implementation would look like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"public class MyHelloService extends HelloServiceGrpc.HelloServiceImplBase {\n    @Override\n    public void hello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {\n        HelloReply reply = HelloReply.newBuilder()\n                                     .setMessage(\"Hello, \" + req.getName() + '!')\n                                     .build();\n        responseObserver.onNext(reply);\n        responseObserver.onCompleted();\n    }\n}\n")),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,"It is recommended to use the build plugin as explained in\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-java/blob/master/README.md#download"}),"the gRPC-Java README")," rather than\nrunning ",Object(i.b)("inlineCode",{parentName:"p"},"protoc")," manually.")),Object(i.b)("h2",{id:"grpcservice",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#grpcservice","aria-label":"grpcservice permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(i.b)("inlineCode",{parentName:"h2"},"GrpcService")),Object(i.b)("p",null,"Once you've finished the implementation of the service, you need to build a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," using\na ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcServiceBuilder.html"}),"type://GrpcServiceBuilder")," and add it to the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"}),"type://ServerBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\n\nServerBuilder sb = Server.builder();\n...\nsb.service(GrpcService.builder()\n                      .addService(new MyHelloService())\n                      .build());\n...\nServer server = sb.build();\nserver.start();\n")),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,"We bound the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," without specifying any path. It is because ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService"),"\nimplements ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://HttpServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpServiceWithRoutes.html"}),"type://HttpServiceWithRoutes"),", which dynamically provides ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"typeplural://Route:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html"}),"typeplural://Route")," by itself.")),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," supports ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),", ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md"}),"gRPC-Web")," and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/proto3#json"}),"Protobuf-JSON")," by default.\nIf you don't want your ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," support all those formats, specify the formats you want\nusing ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcServiceBuilder#supportedSerializationFormats(Iterable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcServiceBuilder.html#supportedSerializationFormats(java.lang.Iterable)"}),"type://GrpcServiceBuilder#supportedSerializationFormats(Iterable)"),".")),Object(i.b)("h2",{id:"decorating-a-grpcservice",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#decorating-a-grpcservice","aria-label":"decorating a grpcservice permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Decorating a ",Object(i.b)("inlineCode",{parentName:"h2"},"GrpcService")),Object(i.b)("p",null,"Unlike a usual Armeria service, ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," implements a special interface called\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://HttpServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpServiceWithRoutes.html"}),"type://HttpServiceWithRoutes"),". Therefore, it is recommended to decorate a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," by specifying\ndecorator functions as extra parameters rather than using ",Object(i.b)("inlineCode",{parentName:"p"},"Service.decorate()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.server.logging.LoggingService;\n\nServerBuilder sb = Server.builder();\n...\nsb.service(GrpcService.builder()\n                      .addService(new MyHelloService())\n                      .build(),\n           LoggingService.newDecorator());\n...\nServer server = sb.build();\nserver.start();\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/docs/server-decorator#decorating-servicewithroutes"}),"Decorating ",Object(i.b)("inlineCode",{parentName:"a"},"ServiceWithRoutes"))," for more information about ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://HttpServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpServiceWithRoutes.html"}),"type://HttpServiceWithRoutes"),"."),Object(i.b)("h2",{id:"grpc-web",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#grpc-web","aria-label":"grpc web permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(i.b)("inlineCode",{parentName:"h2"},"gRPC-Web")),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," supports the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md"}),"gRPC-Web")," protocol,\na small modification to the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://grpc.io/"}),"gRPC")," wire format that can be used from a browser.\nUse the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-web"}),"gRPC-Web-Client")," to access the service from a browser."),Object(i.b)(l,{mdxType:"Tip"},Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-web"}),"gRPC-Web-Client")," does not support client-side\n(or bi-directional) streaming yet but only server-side streaming.\nSee ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-web/issues/24"}),"here")," for more information.")),Object(i.b)("p",null,"If the origin of the Javascript and API server are different, ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-web"}),"gRPC-Web-Client")," first sends ",Object(i.b)("inlineCode",{parentName:"p"},"preflight"),"\nrequests by the HTTP ",Object(i.b)("inlineCode",{parentName:"p"},"OPTIONS")," method, in order to determine whether the actual request is safe to send\nin terms of CORS. Armeria provides ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://CorsService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsService.html"}),"type://CorsService")," to handle this requests, so you need to decorate it when\nyou build a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.grpc.protocol.GrpcHeaderNames;\nimport com.linecorp.armeria.server.cors.CorsService;\nimport com.linecorp.armeria.server.cors.CorsServiceBuilder;\n\nServerBuilder sb = Server.builder();\n...\nfinal CorsServiceBuilder corsBuilder =\n        CorsService.builder("http://foo.com")\n                   .allowRequestMethods(HttpMethod.POST) // Allow POST method.\n                   // Allow Content-type and X-GRPC-WEB headers.\n                   .allowRequestHeaders(HttpHeaderNames.CONTENT_TYPE,\n                                        HttpHeaderNames.of("X-GRPC-WEB"))\n                   // Expose trailers of the HTTP response to the client.\n                   .exposeHeaders(GrpcHeaderNames.GRPC_STATUS,\n                                  GrpcHeaderNames.GRPC_MESSAGE,\n                                  GrpcHeaderNames.ARMERIA_GRPC_THROWABLEPROTO_BIN);\n\nsb.service(GrpcService.builder()\n                      .addService(new MyHelloService())\n                      .build(),\n           corsBuilder.newDecorator(),\n           LoggingService.newDecorator());\n...\nServer server = sb.build();\nserver.start();\n')),Object(i.b)("p",null,"Please refer to ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/docs/server-cors"}),"Configuring CORS")," for more information."),Object(i.b)("h2",{id:"unframed-requests",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#unframed-requests","aria-label":"unframed requests permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Unframed requests"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," supports serving unary RPC methods (no streaming request or response) without ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),"\nwire format framing. This can be useful for gradually migrating an existing HTTP POST based API to ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),".\nAs ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService")," supports both binary protobuf and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://developers.google.com/protocol-buffers/docs/proto3#json"}),"Protobuf-JSON"),", either legacy protobuf\nor JSON APIs can be used."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = Server.builder();\n...\nsb.service(GrpcService.builder()\n                      .addService(new MyHelloService())\n                      .enableUnframedRequests(true)\n                      .build());\n...\nServer server = sb.build();\nserver.start();\n")),Object(i.b)("p",null,"This service's unary methods can be accessed from any HTTP client at e.g., URL ",Object(i.b)("inlineCode",{parentName:"p"},"/grpc.hello.HelloService/Hello"),"\nwith Content-Type ",Object(i.b)("inlineCode",{parentName:"p"},"application/protobuf")," for binary protobuf POST body or ",Object(i.b)("inlineCode",{parentName:"p"},"application/json; charset=utf-8"),"\nfor JSON POST body."),Object(i.b)("h2",{id:"blocking-service-implementation",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#blocking-service-implementation","aria-label":"blocking service implementation permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Blocking service implementation"),Object(i.b)("p",null,"Unlike upstream gRPC-Java, Armeria does not run service logic in a separate thread pool by default. If your\nservice implementation requires blocking, either run the individual blocking logic in a thread pool, wrap the\nentire service implementation in ",Object(i.b)("inlineCode",{parentName:"p"},"RequestContext.current().blockingTaskExecutor().submit"),", or set\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcServiceBuilder#useBlockingTaskExecutor(boolean):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcServiceBuilder.html#useBlockingTaskExecutor(boolean)"}),"type://GrpcServiceBuilder#useBlockingTaskExecutor(boolean)")," so the above happens automatically for\nall service methods and lifecycle callbacks."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.common.RequestContext;\nimport com.linecorp.armeria.server.ServiceRequestContext;\n\npublic class MyHelloService extends HelloServiceGrpc.HelloServiceImplBase {\n    @Override\n    public void hello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {\n        ServiceRequestContext.current().blockingTaskExecutor().submit(() -> {\n            // Perform a long-running task.\n\n            HelloReply reply = HelloReply.newBuilder()\n                                         .setMessage(\"Hello, \" + req.getName() + '!')\n                                         .build();\n            responseObserver.onNext(reply);\n            responseObserver.onCompleted();\n        });\n    }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.common.RequestContext;\nimport com.linecorp.armeria.server.ServiceRequestContext;\n\npublic class MyHelloService extends HelloServiceGrpc.HelloServiceImplBase {\n    @Override\n    public void hello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {\n        // Perform a long-running task.\n\n        HelloReply reply = HelloReply.newBuilder()\n                                     .setMessage(\"Hello, \" + req.getName() + '!')\n                                     .build();\n        responseObserver.onNext(reply);\n        responseObserver.onCompleted();\n    }\n}\n\nServerBuilder sb = Server.builder();\nsb.service(GrpcService.builder()\n                      .addService(new MyHelloService())\n                      // All service methods will be run within\n                      // the blocking executor.\n                      .useBlockingTaskExecutor(true)\n                      .build());\n")),Object(i.b)("h2",{id:"exception-propagation",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#exception-propagation","aria-label":"exception propagation permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Exception propagation"),Object(i.b)("p",null,"It can be very useful to enable ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Flags#verboseResponses():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Flags.html#verboseResponses()"}),"type://Flags#verboseResponses()")," in your server by specifying the\n",Object(i.b)("inlineCode",{parentName:"p"},"-Dcom.linecorp.armeria.verboseResponses=true")," system property, which will automatically return\ninformation about an exception thrown in the server to gRPC clients. Armeria clients will automatically\nconvert it back into an exception for structured logging, etc. This response will include information about\nthe actual source code in the server - make sure it is safe to send such potentially sensitive information\nto all your clients before enabling this flag!"),Object(i.b)("p",null,"See more details at ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/docs/client-grpc"}),"Client gRPC"),"."),Object(i.b)("h2",{id:"server-reflection",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#server-reflection","aria-label":"server reflection permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Server Reflection"),Object(i.b)("p",null,"Armeria supports gRPC server reflection - just add an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"ProtoReflectionService")," to your server."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import io.grpc.protobuf.services.ProtoReflectionService;\n\nServerBuilder sb = Server.builder();\n...\nsb.service(GrpcService.builder()\n                      .addService(new MyHelloService())\n                      .addService(ProtoReflectionService.newInstance())\n                      .build());\n...\nServer server = sb.build();\nserver.start();\n")),Object(i.b)("p",null,"For more information, see the official ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/grpc/grpc-java/blob/master/documentation/server-reflection-tutorial.md"}),"gRPC Server Reflection tutorial"),"."),Object(i.b)("h2",{id:"see-also",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/docs/client-grpc"}),"Client gRPC"))))}m.isMDXComponent=!0},xCMr:function(e,r,a){"use strict";var t=a("Wbzz"),c=a("q1tI"),i=a.n(c),n=a("/94A"),o=a("+ejy");r.a=function(e){var r=Object(t.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:r,index:n,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-grpc-mdx-36c9781c272fb2c88bdb.js.map
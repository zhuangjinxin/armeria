(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},J3ia:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var r,n=a("8o2o"),i=(a("q1tI"),a("7ljp")),c=a("JkCF"),s={},o=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:s},b=c.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(b,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"28th May 2020"),Object(i.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-new-features","aria-label":" new features permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🌟 New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"New ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"}),"type://CircuitBreakerRule")," and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"}),"type://CircuitBreakerRuleWithContent")," API let you define a complex\ncircuit breaking policy conveniently. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2726"}),"#2726")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"CircuitBreakerRule myRule =\n    CircuitBreakerRule.of(\n        // A failure if an Exception is raised.\n        CircuitBreakerRule.onException(),\n        // Neither a success nor a failure because\n        // the request has not been handled by the server.\n        CircuitBreakerRule.builder()\n                          .onUnprocessed()\n                          .thenIgnore(),\n        // A failure if the response is 5xx.\n        CircuitBreakerRule.onServerErrorStatus(),\n        // A success if the response is 2xx.\n        CircuitBreakerRule.builder()\n                          .onStatusClass(HttpStatusClass.SUCCESS)\n                          .thenSuccess(),\n        // Neither a success nor a failure. Do not take this response into account.\n        CircuitBreakerRule.builder().thenIgnore());\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now easily bind an MDC property to a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," and log it using a logging framework.\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2634"}),"#2634")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2724"}),"#2724")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2729"}),"#2729")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'MDC.put("transactionId", "1234");\nWebClient client = ...;\ntry (SafeCloseable ignored = Clients.withContextCustomizer(ctx -> {\n    RequestScopedMdc.copy(ctx, "transactionId");\n}) {\n    assert MDC.get("transactionId").equals("1234");\n\n    client.execute(...);\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now install a custom hook to ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextStorage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContextStorage.html"}),"type://RequestContextStorage")," in runtime, usually at startup time. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2723"}),"#2723")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'RequestContextStorage.hook(delegate -> new RequestContextStorageWrapper(delegate) {\n    @Nullable\n    @Override\n    public <T extends RequestContext> T push(RequestContext toPush) {\n        // Usually, you can just use RequestScopedMdc for this purpose.\n        MDC.put("foo", toPush.attr(FOO));\n        return super.push(toPush);\n    }\n\n    @Override\n    public void pop(RequestContext current, @Nullable RequestContext toRestore) {\n        MDC.remove("foo");\n        super.pop(current, toRestore);\n    }\n\n    ...\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now set method parameter descriptions for annotated services in\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"}),"type://DocService")," using Javadoc. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2697"}),"#2697"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now easily sanitize headers and content using ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://RegexBasedSanitizer:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RegexBasedSanitizer.html"}),"type://RegexBasedSanitizer"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1810"}),"#1810")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2721"}),"#2721")))),Object(i.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"📈 Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can now easily call ",Object(i.b)("inlineCode",{parentName:"li"},"ownAttr()")," from ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2727"}),"#2727"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You don't have to check if the context is ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://ClientRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html"}),"type://ClientRequestContext")," or not anymore."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"root()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ownAttrs()")," are pulled up as well.")))),Object(i.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can now use Armeria 0.99.6 with Micrometer 1.3.9.\n(It is recommended to use Micrometer 1.5.1, though.) ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2742"}),"#2742")),Object(i.b)("li",{parentName:"ul"},"You can now retry even when the current ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"}),"type://EndpointGroup")," is empty. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2736"}),"#2736")),Object(i.b)("li",{parentName:"ul"},"You can send a request by setting the authority and scheme header to ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://RequestHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestHeaders.html"}),"type://RequestHeaders"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2730"}),"#2730")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2734"}),"#2734")),Object(i.b)("li",{parentName:"ul"},"You no longer see ",Object(i.b)("inlineCode",{parentName:"li"},"&lt;zero-length response&gt;")," in ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"}),"type://DocService")," anymore. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2732"}),"#2732")),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"NullPointerException")," is not raised anymore due to the dependency order when Armeria is shaded.\n",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2731"}),"#2731")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2735"}),"#2735"))),Object(i.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"☢️ Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RetryStrategy")," and ",Object(i.b)("inlineCode",{parentName:"li"},"RetryStrategyWithContent")," are gone in favor of\n",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"}),"type://RetryRule")," and ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://RetryRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContent.html"}),"type://RetryRuleWithContent"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2726"}),"#2726")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CircuitBreakerStrategy")," and ",Object(i.b)("inlineCode",{parentName:"li"},"CircuitBreakerStrategyWithContent")," are gone in favor of\n",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"}),"type://CircuitBreakerRule")," and ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"}),"type://CircuitBreakerRuleWithContent"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2726"}),"#2726")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EndpointSelector.select()")," (and thus EndpointGroup.select() as well) now returns ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"\ninstead of throwing an ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://EmptyEndpointGroupException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EmptyEndpointGroupException.html"}),"type://EmptyEndpointGroupException"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2736"}),"#2736")),Object(i.b)("li",{parentName:"ul"},"The method signature of ",Object(i.b)("inlineCode",{parentName:"li"},"ClientFactory.acquireEventLoop()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"EventLoopScheduler.acquire()"),"\nhave been changed. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2736"}),"#2736"))),Object(i.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Brave 5.11.2 → 5.12.3"),Object(i.b)("li",{parentName:"ul"},"grpc-kotlin-stub 0.1.1 → 0.1.2"),Object(i.b)("li",{parentName:"ul"},"io.dropwizard.metrics 4.1.7 → 4.1.9"),Object(i.b)("li",{parentName:"ul"},"Jetty 9.4.28.v20200408 → 9.4.29.v20200521"),Object(i.b)("li",{parentName:"ul"},"reactor-grpc 1.0.0 → 1.0.1"),Object(i.b)("li",{parentName:"ul"},"Retrofit 2.8.1 → 2.9.0"),Object(i.b)("li",{parentName:"ul"},"Rxjava3 3.0.3 → 3.0.4"),Object(i.b)("li",{parentName:"ul"},"Shaded dependencies",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Caffeine 2.8.2 → 2.8.4"))),Object(i.b)("li",{parentName:"ul"},"Example dependencies",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Kotlin 1.3.71 → 1.3.72"),Object(i.b)("li",{parentName:"ul"},"Kotlin Coroutines 1.3.6 → 1.3.7")))),Object(i.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(i.b)(o,{usernames:["adriancole","amitvc","andrey-tpt","anuraaga","hueneburg","ikhoon","imasahiro","jrhee17","KarboniteKream","matsumana","minwoox","okue","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0},JkCF:function(e,t,a){"use strict";a("tU7J");var r=a("wFql"),n=a("q1tI"),i=a.n(n),c=a("2+3N"),s=a("1lec"),o=a("+ejy"),l=a("+9zj"),b=r.a.Title;t.a=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(c).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(s).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var n=Object(l.a)(e.location),p=e.version||n.substring(n.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),i.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-6-mdx-c4a8b66340d035f514cd.js.map
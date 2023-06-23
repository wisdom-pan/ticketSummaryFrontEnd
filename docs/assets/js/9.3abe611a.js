(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{192:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"构建发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建发布","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建发布")]),s._v(" "),e("p",[s._v("本章节介绍如何构建发布系统。")]),s._v(" "),e("h2",{attrs:{id:"开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发","aria-hidden":"true"}},[s._v("#")]),s._v(" 开发")]),s._v(" "),e("p",[s._v("开发时使用的接口数据有两种方式：")]),s._v(" "),e("ol",[e("li",[s._v("本地mock：注释"),e("code",[s._v(".env.development")]),s._v("的"),e("code",[s._v("VUE_APP_BACK_END_URL")]),s._v("值")]),s._v(" "),e("li",[s._v("某一测试后台返回值：设置"),e("code",[s._v(".env.development")]),s._v("的"),e("code",[s._v("VUE_APP_BACK_END_URL")]),s._v("值为后台的url\n（你可以拷贝"),e("code",[s._v(".env.development")]),s._v("为"),e("code",[s._v(".env.development.local")]),s._v("，然后修改"),e("code",[s._v(".env.development.local")]),s._v("值，因为该文件优先级高于"),e("code",[s._v(".env.development")]),s._v("，且不会被git跟踪）")])]),s._v(" "),e("h2",{attrs:{id:"构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建","aria-hidden":"true"}},[s._v("#")]),s._v(" 构建")]),s._v(" "),e("p",[s._v("运行"),e("code",[s._v("npm run build")]),s._v("命令构建项目：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" vue-cli-service build\n⠙  Building "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" production"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  DONE  Build complete. The dist directory is ready to be deployed.\n   INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("运行结束后在项目的目录下会生成"),e("code",[s._v("dist")]),s._v("文件夹，这就是我们项目构建的结果。")]),s._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("备注")]),s._v(" "),e("p",[s._v("直接打开"),e("code",[s._v("dist/index.html")]),s._v("文件是无法正常访问页面的。因为默认配置中，资源的访问路径是"),e("code",[s._v("/")]),s._v("根目录，\n因此直接打开"),e("code",[s._v("index.html")]),s._v("会导致加载不到"),e("code",[s._v("static")]),s._v("资源文件。当你使用http服务的时候就不会有这个问题。")]),s._v(" "),e("p",[s._v("当你想在本地直接打开网页的时候，你可以修改"),e("code",[s._v("vue.config.js")]),s._v("中的"),e("code",[s._v("publicPath")]),s._v("为"),e("code",[s._v("'./'")]),s._v("来解决这个问题（或者直接修改"),e("code",[s._v(".env")]),s._v("配置文件的环境变量"),e("code",[s._v("VUE_APP_BASE_PATH=./")]),s._v("）。")]),s._v(" "),e("p",[e("strong",[s._v("注意")]),s._v("：Vue Router的"),e("code",[s._v("history")]),s._v("模式不支持系统路径被配置为相对路径，只有"),e("code",[s._v("hash")]),s._v("模式才可以。（"),e("a",{attrs:{href:"https://cli.vuejs.org/zh/config/#publicpath",target:"_blank",rel:"noopener noreferrer"}},[s._v("publicpath说明"),e("OutboundLink")],1),s._v("）")])]),s._v(" "),e("h2",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),e("ol",[e("li",[s._v("拷贝根目录下的"),e("code",[s._v("dist")]),s._v("目录到服务器的"),e("code",[s._v("/your/dist/path/")]),s._v("目录；")]),s._v(" "),e("li",[s._v("使用"),e("code",[s._v("apache2")]),s._v("或"),e("code",[s._v("nginx")]),s._v("代理访问静态资源文件。以"),e("code",[s._v("nginx")]),s._v("为例：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server{\n    listen 80;\n    server_name www.example.com;\n    location / {\n        alias /your/dist/path/;\n    }\n\n    location /api/ {\n        rewrite  ^/api/(.*)$ /$1 break;\n        # api请求代理到实际后台接口\n        proxy_pass   ${BACK_END_URL};\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("备注")]),s._v(" "),e("p",[s._v("如果你使用了Vue Router的"),e("code",[s._v("history")]),s._v("模式，还需要把所有的uri重定向到index.html页面\n（单页面应用固有问题，访问非index.html页面是找不到资源的。Uri路径形如a/b/c.html，需要重定向至index.hml页面，使用index.html自身的路由去解析加载。）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server{\n    listen 80;\n    server_name www.example.com;\n    location / {\n        alias /your/dist/path/;\n    }\n\n    location /api/ {\n        rewrite  ^/api/(.*)$ /$1 break;\n        # api请求代理到实际后台接口\n        proxy_pass   ${BACK_END_URL};\n    }\n\n    location / {\n        # uri重定向至index.html\n        try_files $uri $uri/ index.html;\n    }\n}\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])])]),s._v(" "),e("h2",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),e("p",[s._v("如果你经常需要将代码发布到仓库中，可能你不想重复执行发布命令，如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("你可以创建"),e("code",[s._v("script/release.sh")]),s._v("脚本，将重复的发布命令写在里面。然后在"),e("code",[s._v("package.json")]),s._v("中，\n添加"),e("code",[s._v('scripts.release: "bash script/release.sh"')]),s._v("。之后你就可以直接执行"),e("code",[s._v("npm run release")]),s._v("来发布了。")])])},[],!1,null,null,null);a.default=t.exports}}]);
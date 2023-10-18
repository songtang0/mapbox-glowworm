# 压缩代码
压缩代码： 添加 UglifyJS 可以通过移除注上释、缩短变量名、重整代码来极大程度的减少 bundle 的体积大小 ——
这样在一定程度降低了代码的可读性，但是在网络通信上变得更有效率。通过
`npm install --save-dev rollup-plugin-uglify`安装 `rollup-plugin-uglify` 插件
(该插件目前不支持 es6，可以用 rollup-plugin-terser 替换)，rollup.config.js 配置文件中添加插件配置，执行压缩文件的方法。


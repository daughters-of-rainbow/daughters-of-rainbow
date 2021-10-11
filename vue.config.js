const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath: './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: true,
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
        symbolId: "icon-[name]"
     });
     config.output.filename('[name].[hash].js').end();
     config.plugin('html')
     .tap(args => {
       args[0].title = "Daughters of Rainbow NFT";
       return args;
     })  
   },
   configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // config.plugins.push(new BundleAnalyzerPlugin())
     return {
       plugins: [
         new CompressionPlugin({
           test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
           threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
           deleteOriginalAssets: false // 是否删除原文件
         })
       ]
     }
   }
 },
 devServer: {
  /* 自动打开浏览器 */
  open: true,
  /* 设置为0.0.0.0则所有的地址均能访问 */
  https: false,
  /* 使用代理 */
  proxy: {
      '/': {
          /* 目标代理服务器地址 */
          target: 'https://scan.khchain.io',
          /* 允许跨域 */
          changeOrigin: true,
          pathRewrite:{
            '^/':''
        }
      },
  },
}
   
}

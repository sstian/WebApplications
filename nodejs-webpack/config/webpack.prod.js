/*
  1.该文件是webpack的配置文件，所有webpack的任务、用到的loader、plugins都要配置在这里
  2.该文件要符合CJS模块化规范
*/

// 引入Node中一个内置的path模块，专门用于解决路径问题
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// style-loader: 创建style标签，将样式资源插入，添加到head中生效
// css-loader: 将css文件变成commonjs模块加载js中，里面内容是样式字符串
// const baseCssLoader = ["style-loader", "css-loader"];
// const baseCssLoader = [MiniCssExtractPlugin.loader, "css-loader"];

//css相关loader的配置
const baseCssLoader = [
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          "postcss-preset-env",
        ]
      }
    }
  }
];

// 使用cjs的模块化规范，暴露一个对象，该对象就是webpack的详细配置对象（规则）
module.exports = {
  mode: 'production',  // 工作模式
  entry: './src/js/app.js',  // 入口
  output: {  // 出口（输出）
    path: path.resolve(__dirname, '../build'),  // 输出文件的路径
    filename: 'js/app.js'  // 输出文件的名字
  },
  // module.rules中配置的一个一个的loader
  module: {
    rules: [
      // 配置解析css
      {
        test: /\.css$/,  // 该loader要处理的文件
        use: [...baseCssLoader]
      },
      // 配置解析less
      {
        test: /\.less$/,  // 该loader要处理的文件
        use: [...baseCssLoader, "less-loader"]
      },
      // 处理图片资源：样式中的图片
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-1oader",  // ur1-1oader是对file-loader的上层封装
        options: {
          limit: 8 * 1024,  // 临界值为8KB，小于8KB的图片会被转为base64编码
          name: "[hash:10].[ext]",  // 加工后图片的名字：取前10为hash值，保留扩展名
          outputPath: "img"  // 输出路径
        }
      },
      // 处理图片资源：html中的<img>
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      // 处理其它资源：字体、音视频等
      {
        exclude: /\.(js|json|html|css|less|jpg|png|bmp|gif)$/,
        loader: "file-1oader",
        options: {
          limit: 8 * 1024,  // 临界值为8KB，小于8KB的图片会被转为base64编码
          name: "[hash:10].[ext]",  // 加工后图片的名字：取前10为hash值，保留扩展名
          outputPath: "media"  // 输出路径
        }
      },
      // js语法检查
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",  // 优先执行
        loader: "eslint-loader",
        options: {
          fix: true  // 若有问题自动修复，重要！
        }
      },
      // js语法转换
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  plugins: [
    // 打包html
    new HtmlWebpackPlugin({
      // 以当前文件为模板创建新的HTML（1.结构和原来一样 2.会自动引入打包的资源）
      template: "./src/index.html",  // 模板文件路径
      minify: false  // 压缩html/js: +mode: production
    }),
    // 提取css为单独文件
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/index.css'
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAl1: true } }]
      }
    })
  ]
};


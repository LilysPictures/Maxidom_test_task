const path = require("path")
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').
// BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    entry: {
      bundle:  path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name] [contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist')  
        },
        port:3000,
        open:true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules:[
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
            {
               test: /\.scss$/, 
               use:
               ['style-loader',
               'css-loader',
               'sass-loader'],
            },
            {
                test: /bootstrap\.js$/,
                exclude: /node_modules/, 
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    jQuery: 'jquery',
                    Popper: ['popper.js', 'default']
                  },
                },
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            ],
          },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack online-store',
            filename: 'index.html',
            template: 'src/template.html',
        }),
        // new BundleAnalyzerPlugin(),
        new VueLoaderPlugin()
    ], 
}
  
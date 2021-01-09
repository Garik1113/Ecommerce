import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const webpackConfig = (): Configuration => ({
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    devServer: {
        overlay: true,
        open: true,
        port: 3000,
        writeToDisk: true,
        historyApiFallback: true,
    },
    
    module: {
      rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader',
                      },
                },
              {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     // localIdentName: '[name]-[local]-[hash:base64:3]',
                        //     modules: true
                        // },
                        
                    }
                ]
              },
              {
                test: /\.s[ac]ss$/i,
                include: path.join(__dirname, 'src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                          loader: 'file-loader',
                          options: {
                            publicPath: '/public',
                            name: '[name].[ext]',
                          },
                        },
                      ],
              },
              {
                  test: /\.tsx?$/,
                  loader: 'ts-loader',
                  options: {
                            transpileOnly: true,
                          },
                  exclude: /dist/,
              },
            ],
          },
    devtool: 'inline-source-map',
    plugins: [ 
        new HtmlWebpackPlugin({template: './public/index.html',})],
});
export default webpackConfig;
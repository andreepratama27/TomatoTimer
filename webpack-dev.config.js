const path = require('path')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'index.js')
    ],

    devServer: {
        inline: true,
        port: 3000
    },

    resolve: {
      alias: {
        Actions: path.resolve(__dirname, 'reducers/'),
        Containers: path.resolve(__dirname, 'containers/'),
        Components: path.resolve(__dirname, 'components/'),
        Reducers: path.resolve(__dirname, 'reducers/'),
        Style: path.resolve(__dirname, 'style/')
      }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: extractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),

        new extractTextPlugin('style.css')
    ]
}

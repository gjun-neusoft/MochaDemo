const path = require('path')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        contentBase: "./view/index.html",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    node: {
		fs: "empty"// https://blog.csdn.net/flitrue/article/details/78055738 解决程序中 Cannot resolve module 'fs' 问题
	},
    module: {
        rules:[
            {
				test: /\.js$/,
				// exclude: /(node_modules|bower_components)/,
				use: {
				loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
            {
                test: /.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ],
        
    }
}
var path = require('path');

module.exports = {
	entry: './source/main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'source'),
				loader: 'babel-loader'
			}
		]
	}
};
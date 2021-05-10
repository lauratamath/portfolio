module.exports = {
	mode: 'development',
	devServer: {
		contentBase: 'dist'
	},
	module: {
		rules: [
			{
				test: /.(jsx?)$/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			  },
			  {
				test: /\.(png|jpe?g|gif|svg|ico|otf)$/i,
				use: ['file-loader'],
			  },
		]
	}
}

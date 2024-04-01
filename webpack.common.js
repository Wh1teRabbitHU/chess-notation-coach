import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { __dirname, packageJson } from './node-env.js';

export default {
	entry: './src/react/main.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	output: {
		filename: `${packageJson.name}-${packageJson.version}.bundle.js`,
		path: path.resolve(__dirname, './build'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json']
				},
				use: 'ts-loader'
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/static/index.html' }),
		new CleanWebpackPlugin({ protectWebpackAssets: false, cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'] })
	]
};

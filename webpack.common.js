import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
	entry: './src/react/main.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
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
		new CopyWebpackPlugin({ patterns: [{ from: './src/static/assets', to: 'assets' }] }),
		new CleanWebpackPlugin({ protectWebpackAssets: false, cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'] })
	]
};

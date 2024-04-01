import mergeTool from 'webpack-merge';
import common from './webpack.common.js';

export default function webpackConfig() {
	return mergeTool.merge(common, {
		mode: 'development',
		devtool: 'inline-source-map',
		devServer: {
			port: 3000,
			historyApiFallback: true,
			hot: true,
			liveReload: true
		}
	});
}
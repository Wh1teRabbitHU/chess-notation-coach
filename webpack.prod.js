import mergeTool from 'webpack-merge';
import common from './webpack.common.js';

export default function webpackConfig() {
	return mergeTool.merge(common, {
		mode: 'production',
		optimization: {
			minimize: true
		}
	});
}
import path from 'path';
import mergeTool from 'webpack-merge';
import common from './webpack.common.js';

import { __dirname, packageJson } from './node-env.js';

export default function webpackConfig() {
	return mergeTool.merge(common, {
		mode: 'production',
		output: {
			filename: `${packageJson.name}-${packageJson.version}.bundle.js`,
			path: path.resolve(__dirname, './docs'),
			clean: true
		},
		optimization: {
			minimize: true
		}
	});
}

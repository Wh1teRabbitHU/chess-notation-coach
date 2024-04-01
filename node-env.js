import path from 'path';
import { fileURLToPath } from 'url';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

function filename() {
	return fileURLToPath(import.meta.url);
}

function dirname() {
	return path.dirname(filename());
}

const __dirname = dirname();
const __filename = filename();

export { __dirname, __filename, packageJson };

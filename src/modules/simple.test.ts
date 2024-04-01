import { describe, expect, test } from '@jest/globals';

import { helloWorld } from './simple';

describe('Testing function "helloWorld"', () => {
	test('should return the text "Hello world!"', async () => {
		const text = helloWorld();

		expect('Hello world!').toEqual(text);
	});
});

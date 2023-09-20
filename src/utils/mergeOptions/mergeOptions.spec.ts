import { mergeOptions } from '.';
import type { Options } from '@src/types';

describe('mergeOptions', () => {
	it('should return an empty object if both defaultOptions and requestOptions are undefined', () => {
		const result = mergeOptions();
		expect(result).toEqual({});
	});

	it('should return the defaultOptions if requestOptions is undefined', () => {
		const defaultOptions: Options = { timeout: 5000 };
		const result = mergeOptions(defaultOptions);
		expect(result).toEqual({ timeout: 5000 });
	});

	it('should return the requestOptions if defaultOptions is undefined', () => {
		const requestOptions: Options = { idempotencyKey: 'abc123' };
		const result = mergeOptions(undefined, requestOptions);
		expect(result).toEqual({ idempotencyKey: 'abc123' });
	});

	it('should merge the defaultOptions and requestOptions', () => {
		const defaultOptions: Options = { timeout: 5000 };
		const requestOptions: Options = { idempotencyKey: 'abc123' };
		const result = mergeOptions(defaultOptions, requestOptions);
		expect(result).toEqual({ timeout: 5000, idempotencyKey: 'abc123' });
	});
});

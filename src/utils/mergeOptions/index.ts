import type { Options } from '@src/types';

export function mergeOptions (defaultOptions?: Options, requestOptions?: Options ) {
	return Object.assign(defaultOptions ? defaultOptions : {}, requestOptions);
}

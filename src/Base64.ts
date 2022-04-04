import {brand, Branded, string, TypeOf} from 'io-ts';
import isBase64 from 'validator/lib/isBase64';

interface Base64Brand {
    readonly Base64: unique symbol;
}

/**
 * Binary-to-text base64 encoding - https://en.wikipedia.org/wiki/Base64
 */
export const Base64 = brand(string, (n): n is Branded<string, Base64Brand> => isBase64(n), 'Base64');
export type Base64 = TypeOf<typeof Base64>;

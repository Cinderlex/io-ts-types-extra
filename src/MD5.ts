import {brand, Branded, string, TypeOf} from 'io-ts';
import validator from 'validator';
import isMD5 = validator.isMD5;

interface MD5Brand {
    readonly MD5: unique symbol;
}

/**
 * Result of a cryptographically broken but still widely used hash function - https://en.wikipedia.org/wiki/MD5
 */
export const MD5 = brand(string, (n): n is Branded<string, MD5Brand> => isMD5(n), 'MD5');
export type MD5 = TypeOf<typeof MD5>;

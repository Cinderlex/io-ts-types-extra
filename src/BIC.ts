import {brand, Branded, string, TypeOf} from 'io-ts';
import validator from 'validator';
import isBIC = validator.isBIC;

interface BICBrand {
    readonly BIC: unique symbol;
}

/**
 * Business Identifier Code - https://en.wikipedia.org/wiki/ISO_9362
 */
export const BIC = brand(string, (n): n is Branded<string, BICBrand> => isBIC(n), 'BIC');
export type BIC = TypeOf<typeof BIC>;

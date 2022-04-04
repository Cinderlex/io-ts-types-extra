import {brand, Branded, string, TypeOf} from 'io-ts';
import isISO4217 from 'validator/lib/isISO4217';

interface CurrencyCodeISO4217Brand {
    readonly CurrencyCodeISO4217: unique symbol;
}

/**
 * Currency code in ISO 4217 standard - https://en.wikipedia.org/wiki/ISO_4217
 */
export const CurrencyCodeISO4217 = brand(
    string,
    (n): n is Branded<string, CurrencyCodeISO4217Brand> => isISO4217(n),
    'CurrencyCodeISO4217'
);
export type CurrencyCodeISO4217 = TypeOf<typeof CurrencyCodeISO4217>;

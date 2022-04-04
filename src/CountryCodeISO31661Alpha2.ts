import {brand, Branded, string, TypeOf} from 'io-ts';
import validator from 'validator';
import isISO31661Alpha2 = validator.isISO31661Alpha2;

interface CountryCodeISO31661Alpha2Brand {
    readonly CountryCodeISO31661Alpha2: unique symbol;
}

/**
 * Country code in ISO 3166-1 alpha-2 standard - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
export const CountryCodeISO31661Alpha2 = brand(
    string,
    (n): n is Branded<string, CountryCodeISO31661Alpha2Brand> => isISO31661Alpha2(n),
    'CountryCodeISO31661Alpha2'
);
export type CountryCodeISO31661Alpha2 = TypeOf<typeof CountryCodeISO31661Alpha2>;

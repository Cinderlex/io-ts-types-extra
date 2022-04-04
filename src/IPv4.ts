import {brand, Branded, string, TypeOf} from 'io-ts';
import isIP from 'validator/lib/isIP';

interface IPv4Brand {
    readonly IPv4: unique symbol;
}

/**
 * Codec for IPv4 network addresses like 8.8.8.8 or 127.0.0.1
 */
export const IPv4 = brand(string, (n): n is Branded<string, IPv4Brand> => isIP(n, '4'), 'IPv4');
export type IPv4 = TypeOf<typeof IPv4>;

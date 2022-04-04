import {brand, Branded, string, TypeOf} from 'io-ts';

interface JsonBrand {
    readonly Json: unique symbol;
}

export const isJson = (input: string) => {
    try {
        JSON.parse(input);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Serialization format JavaScript Object Notation - https://en.wikipedia.org/wiki/JSON
 */
export const Json = brand(
    string,
    (n): n is Branded<string, JsonBrand> => isJson(n),
    'Json',
);
export type Json = TypeOf<typeof Json>;

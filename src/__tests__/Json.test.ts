import {Json} from '../Json';
import {Right} from 'fp-ts/Either';

const valid = ['{ "key": "value" }', '{}', 'null', '1234', '"yeap"', '[]', '[1, "two", {"three": true}, false]'];

const invalid = ['{ key: "value" }', "{ 'key': 'value' }", '', '"', '[1234', '{[}]'];

valid.map(entry => {
    test(`JSON valid string [${entry}]`, () => {
        const result = Json.decode(entry);
        expect(result._tag).toBe('Right');
        expect((result as Right<Json>).right).toBe(entry);
    });
});

invalid.map(entry => {
    test(`JSON invalid string [${entry}]`, () => {
        const result = Json.decode(entry);
        expect(result._tag).toBe('Left');
    });
});

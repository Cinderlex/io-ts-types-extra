import {IPv4} from '../IPv4';
import {Right} from 'fp-ts/Either';

const valid = ['0.0.0.0', '1.2.3.4', '1.22.123.255', '255.255.255.255', '127.0.0.1'];

const invalid = [
    '',
    '1',
    '1.2',
    '1.2.3',
    '01.02.03.04',
    '1.2.03.4',
    '256.0.0.1',
    '255.256.255.256',
    '0200.200.200.200',
    '200.0200.200.200',
    '200.200.0200.200',
    '200.200.200.0200',
    '123.123.123.1234',
];

valid.map(entry => {
    test(`IPv4 valid string [${entry}]`, () => {
        const result = IPv4.decode(entry);
        expect(result._tag).toBe('Right');
        expect((result as Right<IPv4>).right).toBe(entry);
    });
});

invalid.map(entry => {
    test(`IPv4 invalid string [${entry}]`, () => {
        const result = IPv4.decode(entry);
        expect(result._tag).toBe('Left');
    });
});

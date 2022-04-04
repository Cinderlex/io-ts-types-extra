import {Right} from 'fp-ts/Either';
import {MD5} from '../MD5';

const valid = [
    'd94f3f016ae679c3008de268209132f2',
    '751adbc511ccbe8edf23d486fa4581cd',
    '88dae00e614d8f24cfd5a8b3f8002e93',
    '0bf1c35032a71a14c2f719e5a14c1e96',
];

const invalid = ['KYT0bf1c35032a71a14c2f719e5a14c1', 'q94375dj93458w34', '39485729348', '%&FHKJFvk'];

valid.map(entry => {
    test(`MD5 valid string [${entry}]`, () => {
        const result = MD5.decode(entry);
        expect(result._tag).toBe('Right');
        expect((result as Right<MD5>).right).toBe(entry);
    });
});

invalid.map(entry => {
    test(`MD5 invalid string [${entry}]`, () => {
        const result = MD5.decode(entry);
        expect(result._tag).toBe('Left');
    });
});

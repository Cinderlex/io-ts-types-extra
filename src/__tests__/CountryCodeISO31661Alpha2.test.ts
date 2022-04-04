import {Right} from 'fp-ts/Either';
import {CountryCodeISO31661Alpha2} from '../CountryCodeISO31661Alpha2';

const valid = ['FR', 'fR', 'GB', 'PT', 'CM', 'JP', 'PM', 'ZW', 'MM', 'cc', 'GG'];

const invalid = ['', 'FRA', 'AA', 'PI', 'RP', 'WV', 'WL', 'UK', 'ZZ'];

valid.map(entry => {
    test(`CountryCodeISO31661Alpha2 valid string [${entry}]`, () => {
        const result = CountryCodeISO31661Alpha2.decode(entry);
        expect(result._tag).toBe('Right');
        expect((result as Right<CountryCodeISO31661Alpha2>).right).toBe(entry);
    });
});

invalid.map(entry => {
    test(`CountryCodeISO31661Alpha2 invalid string [${entry}]`, () => {
        const result = CountryCodeISO31661Alpha2.decode(entry);
        expect(result._tag).toBe('Left');
    });
});

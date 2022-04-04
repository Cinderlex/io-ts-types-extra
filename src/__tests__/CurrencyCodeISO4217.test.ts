import {Right} from 'fp-ts/Either';
import {CurrencyCodeISO4217} from '../CurrencyCodeISO4217';

const valid = ['AED', 'aed', 'AUD', 'CUC', 'EUR', 'GBP', 'LYD', 'MYR', 'SGD', 'USD'];

const invalid = ['', '$', 'US', 'us', 'AAA', 'aaa', 'RWA', 'EURO', 'euro'];

valid.map(entry => {
    test(`CurrencyCodeISO4217 valid string [${entry}]`, () => {
        const result = CurrencyCodeISO4217.decode(entry);
        expect(result._tag).toBe('Right');
        expect((result as Right<CurrencyCodeISO4217>).right).toBe(entry);
    });
});

invalid.map(entry => {
    test(`CurrencyCodeISO4217 invalid string [${entry}]`, () => {
        const result = CurrencyCodeISO4217.decode(entry);
        expect(result._tag).toBe('Left');
    });
});

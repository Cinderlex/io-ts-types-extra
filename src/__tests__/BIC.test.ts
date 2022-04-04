import {Right} from 'fp-ts/Either';
import {BIC} from '../BIC';

const valid = ['SBICKEN1345', 'SBICKEN1', 'SBICKENY', 'SBICKEN1YYP'];

const invalid = ['SBIC23NXXX', 'S23CKENXXXX', 'SBICKENXX', 'SBICKENXX9', 'SBICKEN13458', 'SBICKEN', 'SBICXXN1345'];

valid.map(entry => {
    test(`BIC valid string [${entry}]`, () => {
        const result = BIC.decode(entry);
        expect(result._tag).toBe('Right');
        expect((result as Right<BIC>).right).toBe(entry);
    });
});

invalid.map(entry => {
    test(`BIC invalid string [${entry}]`, () => {
        const result = BIC.decode(entry);
        expect(result._tag).toBe('Left');
    });
});

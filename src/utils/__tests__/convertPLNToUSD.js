import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');
    });

    it('should return NaN when input is text', () => {
        expect(convertPLNToUSD(`tekst`)).toBeNaN();
        expect(convertPLNToUSD(`--`)).toBeNaN();
        expect(convertPLNToUSD(`20`)).toBeNaN();
    });

    it('should return NaN when input is undefined', () => {
        expect(convertPLNToUSD()).toBeNaN();
    });

    it('should return $0.00 when input is less then zero', () => {
        expect(convertPLNToUSD(-1)).toBe(`$0.00`);
        expect(convertPLNToUSD(-20)).toBe(`$0.00`);
    });

    it('should return "Error" when input is different than number and string', () => {
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD([])).toBe('Error');
        expect(convertPLNToUSD(null)).toBe('Error');
        expect(convertPLNToUSD(function() {})).toBe('Error');
      });
});
import { isOver18, isValidName, isValidPostalCode } from './module';

describe('isOver18', () => {
    it('devrait retourner true pour une personne de plus de 18 ans', () => {
        const dateNaissance = new Date();
        dateNaissance.setFullYear(dateNaissance.getFullYear() - 19);
        expect(isOver18(dateNaissance.toISOString().split('T')[0])).toBe(true);
    });

    it('devrait retourner false pour une personne de moins de 18 ans', () => {
        const dateNaissance = new Date();
        dateNaissance.setFullYear(dateNaissance.getFullYear() - 17);
        expect(isOver18(dateNaissance.toISOString().split('T')[0])).toBe(false);
    });

    it('devrait retourner true pour une personne qui a exactement 18 ans', () => {
        const dateNaissance = new Date();
        dateNaissance.setFullYear(dateNaissance.getFullYear() - 18);
        expect(isOver18(dateNaissance.toISOString().split('T')[0])).toBe(true);
    });
});

describe('isValidPostalCode', () => {
    it('devrait retourner true pour un code postal valide', () => {
        expect(isValidPostalCode('75000')).toBe(true);
    });

    it('devrait retourner false pour un code postal invalide', () => {
        expect(isValidPostalCode('7500')).toBe(false);
        expect(isValidPostalCode('7500A')).toBe(false);
        expect(isValidPostalCode('750000')).toBe(false);
    });
});


describe('isValidName', () => {
    it('devrait retourner true pour un nom valide', () => {
        expect(isValidName('John')).toBe(true);
        expect(isValidName('Marie-Claire')).toBe(true);
    });

    it('devrait retourner false pour un nom invalide', () => {
        expect(isValidName('J')).toBe(false);
        expect(isValidName('Jo')).toBe(false);
        expect(isValidName('John-Doe')).toBe(true);
    });
});

/**
 * Vérifie si une personne a 18 ans ou plus.
 * @param birthDate - La date de naissance au format chaîne de caractères (YYYY-MM-DD).
 * @returns Vrai si la personne a 18 ans ou plus, faux sinon.
 */
export const isOver18 = (birthDate: string): boolean => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age >= 18;
};

/**
 * Vérifie si un code postal est valide.
 * @param postalCode - Le code postal à vérifier.
 * @returns Vrai si le code postal est valide (5 chiffres), faux sinon.
 */
export const isValidPostalCode = (postalCode: string): boolean => {
    return /^\d{5}$/.test(postalCode);
};

/**
 * Vérifie si un nom est valide.
 * @param name - Le nom à vérifier.
 * @returns Vrai si le nom est valide (2 à 25 caractères), faux sinon.
 */
export const isValidName = (name: string): boolean => {
    const nameRegex = /^[A-Za-zÀ-ÿ\-]{3,25}$/;
    return nameRegex.test(name);
};
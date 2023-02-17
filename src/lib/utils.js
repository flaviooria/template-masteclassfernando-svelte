/**
 * Función que verífica si el dominio que tiene coincide con el que esta pre establecido
 * @param {string} email
 */
function verifyEmail(email, domain = 'fernando.es') {
	const posAt = email.indexOf('@');
	return email.substring(posAt + 1) === domain;
}

/**
 * Función que capitaliza una palabra que se pase por parametro
 * @example flavio => Flavio
 * @param {string} word 
 */
function capitalizeWord(word) {
	return word.at(0).toUpperCase() + word.substring(1);
}

export { verifyEmail };

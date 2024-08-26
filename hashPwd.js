const bcrypt = require('bcryptjs');

const password = '20Vincent24'; // Dein ursprüngliches Passwort
const saltRounds = 10; // Anzahl der Saltrunden

bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) throw err;
    console.log('Hashed Password:', hash);
});
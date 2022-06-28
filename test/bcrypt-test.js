const bcrypt = require('bcrypt');
const saltRounds = 12;

let hash1, hash2;

let salt = bcrypt.genSaltSync(1);
hash1 = bcrypt.hashSync('dX23%23q*', salt);
hash2 = bcrypt.hashSync('@#%^68fds', 10);

console.log("-----hashed---------")

val1 = bcrypt.compareSync('dX23%231q*', hash1);
console.log(val1)

const bcrypt = require('bcrypt');
const saltRounds = 12;

let hash1, hash2;

let salt = bcrypt.genSaltSync(1);
hash1 = bcrypt.hashSync('prasanth', salt);
hash2 = bcrypt.hashSync('shana', 10);

console.log("-----hashed---------")

val1 = bcrypt.compareSync('prasanth', hash1);
console.log(val1)
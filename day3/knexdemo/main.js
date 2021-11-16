const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    user : 'ynon',
    password : 'ynon',
    database : 'demo'
  }
});

async function main() {
  // prints all the users details
  const users = await knex('client').select('*');
  console.log(users);

  knex.destroy();
}

main();

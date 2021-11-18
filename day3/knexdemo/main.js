// in file knex.js
/*
module.exports = function(connectionOptions) {
  // connect to the database
  // return the client
}
*/

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    user : 'ynon',
    password : 'ynon',
    database : 'demo'
  }
});

async function ex1() {
  // prints all the users details
  const users = await knex('client').
    where('prenom', '=', 'Muriel').
    where('password', '100c4e57374fc998e57164d4c0453bd3a4876a58').
    select('*');

    const muriel = await knex('client').where({
      'prenom': 'Muriel',
      'password': knex.raw('sha1("test11")'),
    }).first();

    // Print the query itself
    console.log(knex('client').where({
      'prenom': 'Muriel',
      'password': knex.raw('sha1("test11")'),
    }).toSQL().toNative());


    console.log(muriel);


  console.log(users);
  knex.destroy();
}

async function ex2() {
  // select nom, count(commande_id) as commande_count
  // from commande_ligne group by nom 
  // having commande_count > 1;
  const products = await knex('commande_ligne').
    select('nom').
    count('commande_id as commande_count').
    groupBy('nom').
    having('commande_count', '>', '1');

  console.log(products);
  knex.destroy();
}

async function ex3() {
  await knex('commande_ligne')
    .whereIn('commande_id', function() {
      this.
      select('id').
      from('commande').
      where('date_achat', '<', knex.raw("DATE('2019-02-1')"));
    }).del();  

  await knex('commande').
    where('date_achat', '<', knex.raw("DATE('2019-02-1')")).
    del();
}


ex3();

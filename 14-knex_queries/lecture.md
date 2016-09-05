# Knex Queries

## Objectives
- Write a read all from a table query
- Write a select one from a table query
- Write a select with a join w/ a where clause
- Insert new info to your database through a Knex query
- Update information in your database through a Knex query
- Delete data with a Knex query
- Set up Knex config
- Integrate queries into routes


### Set up Knex config
knex.js file
    - var environment = process.env.NODE_ENV || 'development';
    - var config = require('../knexfile')[environment];
    - module.exports = require('knex')(config);

query.js file
    - var knex = require('./knex');

### Write a read all from a table query
knex('table')


### Write a select one from a table query
knex('table').where('id', id)


### Write a select with a join
knex('users').innerJoin('accounts', 'users.id', 'accounts.user_id')


### Write a select with a join and where clause
knex('users').innerJoin('accounts', 'users.id', 'accounts.user_id').where('name', 'Harry');


### Insert new info to your database through a Knex query
knex('books').insert({title: 'Slaughterhouse Five'})


### Update information in your database through a Knex query
knex('table')
  .where('published_date', '<', 2000)
  .update({
    status: 'archived',
    thisKeyIsSkipped: undefined
  })


### Delete data with a Knex query
knex('accounts')
  .where('activated', false)
  .del()


### Integrate queries into routes
var pg = require('pg');
var queries = require('../../../db/queries');


### Challenge questions
How many students attend Hogwarts?
    - knex('users').count('active')
How many students are in a specific house?
How many students are taking a class by a given teacher?
How many students are of a given year?
Which students have no parents?

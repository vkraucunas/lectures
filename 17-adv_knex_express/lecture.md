# Advanced Knex & Express

## Tips
- Put migrations and seeds into db directory
- onDelete
- Number seed file names
- Bcrypt seed passwords so you can use them in testing
- Altering the sequence starting place
- Keep queries in the query file
- Abstract out routing
- .status
- setting up TDD for express app
- Git stash & git pop


### Put migrations and seeds into db directory
```javascript
migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
```

### onDelete
.onDelete('CASCADE');

### Number seed file names


### Bcrypt seed passwords so you can use them in testing
``` javascript
bcrypt.hashSync('test', 10)
```

### Altering the sequence starting place
- ALTER SEQUENCE something_id_seq RESTART WITH 3;

### Keep queries in the query file!
```javascript
router.post('/:id/update', function(req, res, next){
  getPosts()
  .where('id', req.params.id)
  .update({
    title: req.body.title,
    content: req.body.content
  })
  .then(function(data){
    res.redirect('/')
  })
})
```

### Knex.raw


### Abstract out routing


### res.status all the things


### setting up TDD for express app


### Git stash & git pop

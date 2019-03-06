// Entry point to our app
// Pretty much all the Javascript will be here
// We have to create a *server* in code using Express (Severus is cool)

let express = require('express');
let knex = require('knex');

let app = express();

app.get('/api/genres', function(request, response) {

	//Database access
  let connection = knex({
    client: 'sqlite3',
    connection: {
      filename: 'chinook.db'
    }
  });

  connection.select().from('genres').then((genres) => {
    response.json(genres);
  });
});

app.get('/api/genres/:id', function(request, response) {
									// response.json( [ 1 , 2 , 3 ] );
  let id = request.params.id;

  let connection = knex({
    client: 'sqlite3',
    connection: {
      filename: 'chinook.db'
    }
  });

	//Up until the from it returns a promise, but the genres parameter can be renamed, async
  connection
    .select()
    .from('genres')
    .where('GenreId', id)
    .first()
    .then((genre) => {
      if (genre) {
        response.json(genre);
      } else {
        response.status(404).json({
          error: `Genre ${id} not found`
        });
      }
    });
});

			/* Server routes for Artist assignment */
app.get('/api/artists?', function(request, response) {
	
	let filter = '%' + request.query.filter + '%';
	console.log(filter);
	
	//First let's access the "chinook.db" database
	let connection = knex({
    client: 'sqlite3',
    connection: {
      filename: 'chinook.db'
    }
  });

	if(request.query.filter) {
		connection.select().from('artists').where('Name','like',filter).then((artists) => {
			response.json(   artists   );
		 });
	}
	else {
		connection.select().from('artists').then((artists) => {
			response.json(   artists   );
		 });
	}

});

app.get

app.listen(process.env.PORT || 8000);
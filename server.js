const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.get('/api/v1/cities', (req, res) => {
  // get request with no params for citites
  database('cities').select()
    // selects the cities table in the database
    .then((cities) => {
      res.status(200).json(cities);
      // responds with all cities in database
    })
    .catch((error) => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});

app.get('/api/v1/markets', (req, res) => {
  // get request with no params for markets
  database('markets').select()
    // selects the markets table in the databse
    .then((markets) => {
      res.status(200).json(markets);
      // responds with all markets
    })
    .catch((error) => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});

app.get('/api/v1/cities/:id', (req, res) => {
  // get request with an id param
  database('cities').where('id', req.params.id).select()
    .then(cities => {
      if (cities.length) {
        // if the response has a value
        res.status(200).json(cities);
        // responds with specific city according to the param id
      } else {
        res.status(404).json({
          error: `Could not find city with id ${req.params.id}`
          // if cities.length has no value responds with 404 and error msg
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});

app.get('/api/v1/cities/markets/:id', (req, res) => {
  // get request with an id param
  database('markets').where('id', req.params.id).select()
    .then(markets => {
      if (markets.length) {
        // if the response has a value
        res.status(200).json(markets);
        // responds with specific market according to the param id
      } else {
        res.status(404).json({
          error: `Could not find market with id ${req.params.id}`
          // if markets.length has no value responds with 404 and error msg
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});

app.post('/api/v1/cities', (req, res) => {
  // post request for creating new city
  const city = req.body;
  // assigns body to city
  const errorMsg = { error: 'Expected both Name and Population of city' }
  if (!city.population || !city.name) return res.status(422).send(errorMsg)
  // if body does not have a value for population and name responds with 422

  database('cities').insert(city, 'id')
    .then(cities => {
      res.status(201).json({ id: cities[0] })
      // responds with 201 and the id of newly created city
    })
    .catch(error => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});

app.post('/api/v1/city/:id/markets', (req, res) => {
  // post request for creating new market
  const city_id = req.params.id
  // assigns params id to city_id for foreign id row
  const market = { ...req.body, city_id };
  // builds new market with id & body
  const errorMsg = { error: 'Expected both Name and Address of the market' }
  if (!market.name || !market.address) return res.status(422).send(errorMsg)
  // if body does not have a value for address and name responds with 422

  database('markets').insert(market, 'id')
    .then(market => {
      res.status(201).json({ id: market[0] })
      // responds with 201 and the id of newly created market
    })
    .catch(error => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});


app.delete('/api/v1/cities/markets/:id', (req, res) => {
  // delete request for markets
  const id = req.params.id
  // assigns specific id of market to be deleterd to id

  database('markets').where('id', id).del()
    .then(num => {
      if (num == 0) return res.status(404).json('No Market Found')
      // if num/response is zero/falsey responds with 404 because nothing was found
      res.status(201).json(`Amount deleted: ${num}`)
      // responds with 201 and amount deleted from database
    })
    .catch(error => {
      res.status(500).json({ error });
      // responds with 500 if database errors out
    });
});

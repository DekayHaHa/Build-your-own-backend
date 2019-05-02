const express = require('express')
const app = express()
const port = 3000
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.get('/api/v1/cities', (req, res) => {
  database('cities').select()
    .then((cities) => {
      res.status(200).json(cities);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

app.get('/api/v1/markets', (req, res) => {
  database('markets').select()
    .then((markets) => {
      res.status(200).json(markets);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

app.get('/api/v1/cities/:id', (req, res) => {
  database('cities').where('id', req.params.id).select()
    .then(cities => {
      if (cities.length) {
        res.status(200).json(cities);
      } else {
        res.status(404).json({
          error: `Could not find city with id ${req.params.id}`
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.get('/api/v1/cities/:id/markets', (req, res) => {
  //
  database('markets').where('city_id', req.params.id).select()
    .then(markets => {
      if (markets.length) {
        res.status(200).json(markets);
      } else {
        res.status(404).json({
          error: `Could not find market with id ${req.params.id}`
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.post('', () => {

})

app.post('/api/v1/cities', (req, res) => {
  const city = req.body;
  const errorMsg = { error: 'Expected both Name and Population of city' }
  if (!city.population || !city.name) return res.status(422).send(errorMsg)

  database('cities').insert(city, 'id')
    .then(cities => {
      res.status(201).json({ id: cities[0] })
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.post('/api/v1/market/:id', (req, res) => {
  const market = req.body;
  const cityId = req.params.id
  const errorMsg = { error: 'Expected both Name and Address of the market' }
  if (!market.name || !market.address) return res.status(422).send(errorMsg)

  database('markets').insert(market, 'id')
    .then(market => {
      res.status(201).json({ id: market[0] })
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// 4 GET endpoints ****
// 2 POST endpoints
// how to add market to existing city
// 1 DELETE endpoint
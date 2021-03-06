const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
app.use(express.json())
app.set('port', process.env.PORT || 3000)


app.listen(app.get('port'), () => console.log(`Listening!`));

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

app.get('/api/v1/cities/markets/:id', (req, res) => {
  //
  database('markets').where('id', req.params.id).select()
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

app.post('/api/v1/city/:id/markets', (req, res) => {
  const city_id = req.params.id
  const market = { ...req.body, city_id };
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


app.delete('/api/v1/cities/markets/:id', (req, res) => {
  const id = req.params.id

  database('markets').where('id', id).del()
    .then(num => {
      if (num == 0) return res.status(404).json('No Market Found')
      res.status(201).json(`# deleted: ${num}`)
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

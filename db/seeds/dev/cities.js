const citiesData = require('../../citiesData')

const createCity = (knex, city) => {
  return knex('cities').insert({
    name: city.name,
    population: city.population
  }, 'id')
    .then(cityId => {
      let marketPromises = [];

      city.markets.forEach(market => {
        marketPromises.push(
          createMarket(knex, {
            name: market.name,
            address: market.address,
            city_id: cityId[0]
          })
        )
      });

      return Promise.all(marketPromises);
    })
};

const createMarket = (knex, market) => {
  return knex('markets').insert(market);
};

exports.seed = (knex, Promise) => {
  return knex('markets').del() // delete footnotes first
    .then(() => knex('cities').del()) // delete all papers
    .then(() => {
      let cityPromises = [];

      citiesData.forEach(city => {
        cityPromises.push(createCity(knex, city));
      });

      return Promise.all(cityPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};


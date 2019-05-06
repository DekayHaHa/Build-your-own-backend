# Cities and their farmers markets

A database that provides users with the top ten google maps results of  farmers markets to a specific city.

Created by: Devin Kapla
with: Node.js, Express.js, Knex.js and hosted on Heroku

I built this database with the intention of learning more about the backend common practices. But I also plan to use this Database in future projects/apps that have a focus on being a local consumer.

future interations:
- ability to web scrape info
- more robust end points
- more data on cities/markets

### List all cities
``` GET /api/v1/cities ```
#### Example Response
```JSON
[{
        "id": 19,
        "name": "portland",
        "population": 647805,
        "created_at": "2019-05-05T23:11:15.505Z",
        "updated_at": "2019-05-05T23:11:15.505Z"
    },
    {
        "id": 20,
        "name": "Salt Lake City",
        "population": 200544,
        "created_at": "2019-05-05T23:11:15.506Z",
        "updated_at": "2019-05-05T23:11:15.506Z"
    },
    {
        "id": 18,
        "name": "Minneapolis",
        "population": 422331,
        "created_at": "2019-05-05T23:11:15.502Z",
        "updated_at": "2019-05-05T23:11:15.502Z"
    },
    {
        "id": 17,
        "name": "Phoenix",
        "population": 1626078,
        "created_at": "2019-05-05T23:11:15.503Z",
        "updated_at": "2019-05-05T23:11:15.503Z"
    }]
 ```


### List all Markets
``` GET /api/v1/markets ```
#### Example Response
```JSON
[{
        "id": 113,
        "name": "Stapleton Farmers Market",
        "address": "7351 E 29th Ave, Denver, CO 80238",
        "city_id": 15,
        "created_at": "2019-05-05T23:11:15.536Z",
        "updated_at": "2019-05-05T23:11:15.536Z"
    },
    {
        "id": 123,
        "name": "Sprouts Farmers Market",
        "address": "1785 E Murray Holladay Rd #A, Holladay, UT 84117",
        "city_id": 20,
        "created_at": "2019-05-05T23:11:15.539Z",
        "updated_at": "2019-05-05T23:11:15.539Z"
    },
    {
        "id": 133,
        "name": "Nokomis Farmers Market",
        "address": "5167 Chicago Ave, Minneapolis, MN 55417",
        "city_id": 18,
        "created_at": "2019-05-05T23:11:15.545Z",
        "updated_at": "2019-05-05T23:11:15.545Z"
    },
    {
        "id": 144,
        "name": "Farmyard",
        "address": "4056 E Weldon Ave, Phoenix, AZ 85018",
        "city_id": 17,
        "created_at": "2019-05-05T23:11:15.550Z",
        "updated_at": "2019-05-05T23:11:15.550Z"
    }]
```

### List specific city
``` GET /api/v1/cities/:id ```
#### Parameters 
Specific `id` of the city
#### Example response
```JSON
[{
        "id": 19,
        "name": "portland",
        "population": 647805,
        "created_at": "2019-05-05T23:11:15.505Z",
        "updated_at": "2019-05-05T23:11:15.505Z"
    }]
```

### List specific market
``` GET /api/v1/cities/markets/:id ```
#### Parameters 
Specific `id` of the market
#### Example response
```JSON
[{
        "id": 200,
        "name": "Hmongtown Marketplace",
        "address": "217 Como Ave, St Paul, MN 55103",
        "city_id": 24,
        "created_at": "2019-05-05T23:11:15.574Z",
        "updated_at": "2019-05-05T23:11:15.574Z"
    }]
```

### Create new city
``` POST /api/v1/cities ```
#### Example body/paramter
```JSON
{
  "body": {
    "name": "New York",
    "population": 8622698 }
}
```
#### Response
Id of new entry
```JSON
{"id": 25 }
```

### Create new market
``` POST /api/v1/markets ```
#### Example body/paramter
```JSON
{
  "body": {
    "name": "Harvest Home Farmer's Market",
    "address": "104 E 126th St #3D, New York, NY 10035" }
}
```
#### Response
Id of new entry
```JSON
{"id": 245 }
```

### Remove market
``` DELETE /api/v1/cities/markets/:id ```
#### Parameters 
Specific `id` of the market
#### Response
Amount of deleted entries
```JSON
"Amount deleted: 1"
```

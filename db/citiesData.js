const citiesData = [
  {
    "name": "Denver",
    "population": 704621,
    "markets": [
      {
        "address": "7043 W 38th Ave, Wheat Ridge, CO 80033",
        "name": "Four Seasons Farmers & Artisans Market"
      },
      {
        "address": "W 32nd Ave & Lowell Blvd, Denver, CO 80211",
        "name": "The Farmer's Market at Highlands Square"
      },
      {
        "address": "6759 W Colfax Ave, Denver, CO 80214",
        "name": "40 West Farmers' Market"
      },
      {
        "address": "E Colfax Avenue and, Columbine St, Denver, CO 80206",
        "name": "City Park Esplanade Fresh Market"
      },
      {
        "address": "2925 W 25th Ave, Denver, CO 80211",
        "name": "Jefferson Park Farm & Flea"
      },
      {
        "address": "3000 E 1st Ave, Denver, CO 80209",
        "name": "Colorado Fresh Markets Inc"
      },
      {
        "address": "2401 Welton St, Denver, CO 80205",
        "name": "Mo' Betta Green MarketPlace"
      },
      {
        "address": "2409 Arapahoe St, Denver, CO 80205",
        "name": "Harry's Urban Farmer's Market"
      },
      {
        "address": "7351 E 29th Ave, Denver, CO 80238",
        "name": "Stapleton Farmers Market"
      },
      {
        "address": "11801 W 44th Ave, Wheat Ridge, CO 80033",
        "name": "Heinie's Market CLOSED FOR THE SEASON Open MAY 1st 2019"
      }
    ]
  },
  {
    "name": "Los Angeles",
    "population": 3999759,
    "markets": [
      {
        "address": "101 N Glenoaks Blvd, Burbank, CA 91501",
        "name": "Burbank Farmers Market"
      },
      {
        "address": "155-199 Arizona Ave, Santa Monica, CA 90401",
        "name": "Santa Monica Wednesday Downtown Farmers Market"
      },
      {
        "address": "2052 Ventura Pl, Studio City, CA 91604",
        "name": "Studio City Farmers Market"
      },
      {
        "address": "W 6th St, San Pedro, CA 90731",
        "name": "Local Harvest Certified California Grown Farmers' Markets"
      },
      {
        "address": "9300 Civic Center Dr, Beverly Hills, CA 90210",
        "name": "Beverly Hills Farmers Market"
      },
      {
        "address": "1146 Logan St, Los Angeles, CA 90026",
        "name": "Echo Park Farmers' Market"
      },
      {
        "address": "3528 Larga Ave, Los Angeles, CA 90039",
        "name": "Atwater Village Farmers’ Market"
      },
      {
        "address": "W 5th St, Los Angeles, CA 90013",
        "name": "Historic Downtown Farmers Market"
      },
      {
        "address": "1835 S La Cienega Blvd, Los Angeles, CA 90035",
        "name": "La Cienega Farmers' Market"
      },
      {
        "address": "532 S Olive St, Los Angeles, CA 90013",
        "name": "Pershing Square Farmers Market"
      }
    ]
  },
  {
    "name": "Minneapolis",
    "population": 422331,
    "markets": [
      {
        "address": "704 S 2nd St, Minneapolis, MN 55415",
        "name": "Mill City Farmers Market"
      },
      {
        "address": "312 East Lyndale Ave N, Minneapolis, MN 55405",
        "name": "Minneapolis Farmers Market"
      },
      {
        "address": "6335 Portland Ave, Richfield, MN 55423",
        "name": "Richfield Farmers Market"
      },
      {
        "address": "629 NE 2nd St, Minneapolis, MN 55413",
        "name": "Northeast Minneapolis Farmers Market"
      },
      {
        "address": "200 East Lyndale Ave N, Minneapolis, MN 55405",
        "name": "Farmers Market Annex"
      },
      {
        "address": "3032 Minnehaha Ave, Minneapolis, MN 55406",
        "name": "Midtown Farmers Market"
      },
      {
        "address": "Minneapolis, MN 55419",
        "name": "Winter Market"
      },
      {
        "address": "4310 Nicollet Ave, Minneapolis, MN 55409",
        "name": "Kingfield Farmers Market"
      },
      {
        "address": "5167 Chicago Ave, Minneapolis, MN 55417",
        "name": "Nokomis Farmers Market"
      },
      {
        "address": "2813 W 43rd St, Minneapolis, MN 55410",
        "name": "Linden Hills Farmers Market"
      }
    ]
  },
  {
    "name": "Phoenix",
    "population": 1626078,
    "markets": [
      {
        "address": "East, 4700 Warner Rd, Phoenix, AZ 85044",
        "name": "Ahwatukee Farmers Market"
      },
      {
        "address": "9744 W Northern Ave, Peoria, AZ 85345",
        "name": "Momma's Organic Market"
      },
      {
        "address": "5757 N Central Ave, Phoenix, AZ 85013",
        "name": "Uptown Farmers' Market"
      },
      {
        "address": "721 N Central Ave, Phoenix, AZ 85004",
        "name": "Open Air Market"
      },
      {
        "address": "3502 E Cactus Rd, Phoenix, AZ 85032",
        "name": "Roadrunner Park Farmers Market"
      },
      {
        "address": "4243 W Pinnacle Peak Rd, Glendale, AZ 85310",
        "name": "Pinnacle Peak Farmers Market"
      },
      {
        "address": "805 S Farmer Ave, Tempe, AZ 85281",
        "name": "Tempe Farmers Market"
      },
      {
        "address": "3806 N Brown Ave, Scottsdale, AZ 85251",
        "name": "Old Town Scottsdale Farmers Market - open October through May"
      },
      {
        "address": "NE Corner 59th Ave &, W Myrtle Ave, Glendale, AZ 85301",
        "name": "Glendale Farmers Market"
      },
      {
        "address": "4056 E Weldon Ave, Phoenix, AZ 85018",
        "name": "Farmyard"
      }
    ]
  },
  {
    "name": "portland",
    "population": 647805,
    "markets": [
      {
        "address": "1010 SW Park Ave, Portland, OR 97205",
        "name": "Portland Farmers Market - Shemanski Park"
      },
      {
        "address": "1831 SW Pedestrian Trail, Portland, OR 97201",
        "name": "Portland Farmers Market"
      },
      {
        "address": "240 N Broadway #129, Portland, OR 97227",
        "name": "Portland Farmers Market - Office Location"
      },
      {
        "address": "NE Wygant St & NE 7th Avenue, Portland, OR 97211",
        "name": "Portland Farmers Market - King"
      },
      {
        "address": "SE 92nd Ave & SE Reedway St, Portland, OR 97266",
        "name": "Portland Farmers Market - Lents International"
      },
      {
        "address": "820 NE Holladay St, Portland, OR 97232",
        "name": "Lloyd Farmers Market"
      },
      {
        "address": "N McClellan St &, N Denver Ave, Portland, OR 97217",
        "name": "Portland Farmers Market - Kenton"
      },
      {
        "address": "2 SW Naito Pkwy, Portland, OR 97204",
        "name": "Portland Saturday Market"
      },
      {
        "address": "4420 NE Hancock St, Portland, OR 97213",
        "name": "Hollywood Farmers Market"
      },
      {
        "address": "3181 SW Sam Jackson Park Rd, Portland, OR 97239",
        "name": "OHSU Farmers Market"
      }
    ]
  },
  {
    "name": "Salt Lake City",
    "population": 200544,
    "markets": [
      {
        "address": "1030 Sugarmont Dr, Salt Lake City, UT 84106",
        "name": "Sugar House Farmers Market"
      },
      {
        "address": "300 W 300 S, Salt Lake City, UT 84101",
        "name": "Downtown Farmers' Market"
      },
      {
        "address": "1000 S 900 W, Salt Lake City, UT 84104",
        "name": "People's Market"
      },
      {
        "address": "216 700 E, Salt Lake City, UT 84102",
        "name": "Sprouts Farmers Market"
      },
      {
        "address": "4013 S 700 W, Salt Lake City, UT 84123",
        "name": "Sunnyvale Farmers Market"
      },
      {
        "address": "Unnamed Road, Salt Lake City, UT 84105",
        "name": "Liberty Park Farmers' Market"
      },
      {
        "address": "1304 N 400 E, Bountiful, UT 84010",
        "name": "Chas W. Bangerter & Son Local Farm and Stand"
      },
      {
        "address": "1200 W North Temple, Salt Lake City, UT 84116",
        "name": "Salt Lake City Flea Market & Swap Meet"
      },
      {
        "address": "1785 E Murray Holladay Rd #A, Holladay, UT 84117",
        "name": "Sprouts Farmers Market"
      },
      {
        "address": "12 S Rio Grande St, Salt Lake City, UT 84101",
        "name": "Urban Flea Market"
      }
    ]
  },
  {
    "name": "San Diego",
    "population": 1419516,
    "markets": [
      {
        "address": "6939 Linda Vista Rd, San Diego, CA 92111",
        "name": "Linda Vista Certified Farmers' Market"
      },
      {
        "address": "600 W Date St, San Diego, CA 92101",
        "name": "Little Italy Mercato Farmers' Market"
      },
      {
        "address": "4900 Newport Ave, San Diego, CA 92107",
        "name": "Ocean Beach Farmers Market"
      },
      {
        "address": "3960 Normal St, San Diego, CA 92103",
        "name": "Hillcrest Farmers Market"
      },
      {
        "address": "3000 North Park Way, San Diego, CA 92104",
        "name": "North Park Thursday Market"
      },
      {
        "address": "4150 Mission Blvd, San Diego, CA 92109",
        "name": "Pacific Beach Certified Farmers' Market"
      },
      {
        "address": "10380 Spring Canyon Rd, San Diego, CA 92131",
        "name": "Scripps Ranch Farmers Market"
      },
      {
        "address": "10510 Reagan Rd, San Diego, CA 92126",
        "name": "Mira Mesa Farmer's Market"
      },
      {
        "address": "1st St & B Ave, Coronado, CA 92118",
        "name": "Coronado Certified Farmers' Market"
      },
      {
        "address": "7335 Girard Ave, La Jolla, CA 92037",
        "name": "La Jolla Open Aire Farmers Market"
      }
    ]
  },
  {
    "name": "San Francisco",
    "population": 884363,
    "markets": [
      {
        "address": "United Nations Plaza, San Francisco, CA 94102",
        "name": "Heart of the City Farmers Market"
      },
      {
        "address": "One Ferry Building #50, San Francisco, CA 94111",
        "name": "Ferry Plaza Farmers Market"
      },
      {
        "address": "100 Alemany Blvd, San Francisco, CA 94110",
        "name": "Alemany Farmer's Market"
      },
      {
        "address": "Clement St, San Francisco, CA 94118",
        "name": "Clement St. Farmers Market"
      },
      {
        "address": "1315 8th Ave, San Francisco, CA 94122",
        "name": "Inner Sunset Farmers' Market"
      },
      {
        "address": "Marina Blvd, San Francisco, CA 94109",
        "name": "Fort Mason Center Farmers' Market"
      },
      {
        "address": "84 Bartlett St, San Francisco, CA 94110",
        "name": "Mission Community Market"
      },
      {
        "address": "1303 Grove St, San Francisco, CA 94117",
        "name": "Divisadero Farmers' Market"
      },
      {
        "address": "288 Noe St, San Francisco, CA 94114",
        "name": "CASTRO FARMERS' MARKET"
      },
      {
        "address": "501 Buckingham Way, San Francisco, CA 94132",
        "name": "Stonestown Farmers Market"
      }
    ]
  },
  {
    "name": "Seattle",
    "population": 724745,
    "markets": [
      {
        "address": "NE 125th St & 28th Ave NE, Seattle, WA 98125",
        "name": "Lake City Farmers Market"
      },
      {
        "address": "37th Ave S, Seattle, WA 98118",
        "name": "Columbia City Farmers Market"
      },
      {
        "address": "67 Phinney Ave N, Seattle, WA 98103",
        "name": "Phinney Farmers Market"
      },
      {
        "address": "410 Terry Ave N, Seattle, WA 98109",
        "name": "Pike Place Farmers Market - South Lake Union Market"
      },
      {
        "address": "SW Alaska St &, California Ave SW, Seattle, WA 98116",
        "name": "West Seattle Farmers Market"
      },
      {
        "address": "5031 University Way NE, Seattle, WA 98105",
        "name": "University District Farmers Market"
      },
      {
        "address": "1601 Broadway, Seattle, WA 98112",
        "name": "Capitol Hill Farmers Market"
      },
      {
        "address": "85 Pike St, Seattle, WA 98101",
        "name": "Pike Place Market"
      },
      {
        "address": "22nd Ave NW, Seattle, WA 98107",
        "name": "Ballard Farmers Market"
      },
      {
        "address": "5315 22nd Ave NW, Seattle, WA 98107",
        "name": "Seattle Farmers Market Association"
      }
    ]
  },
  {
    "name": "St. Paul",
    "population": 306621,
    "markets": [
      {
        "address": "63 George St W, St Paul, MN 55107",
        "name": "West Side Farmers Market"
      },
      {
        "address": "290 5th St E, St Paul, MN 55101",
        "name": "St Paul Farmers Market"
      },
      {
        "address": "1850 White Bear Ave, Maplewood, MN 55109",
        "name": "Aldrich Arena Farmers Market"
      },
      {
        "address": "1807 Field Ave, St Paul, MN 55116",
        "name": "Highland Park Farmers Market"
      },
      {
        "address": "544 University Ave W, St Paul, MN 55103",
        "name": "Hmong Farmers Market (summer weekends only)"
      },
      {
        "address": "217 Como Ave, St Paul, MN 55103",
        "name": "Hmongtown Marketplace"
      },
      {
        "address": "2131 Fairview Ave N, Roseville, MN 55113",
        "name": "Roseville Farmers Market"
      },
      {
        "address": "3032 Minnehaha Ave, Minneapolis, MN 55406",
        "name": "Midtown Farmers Market"
      },
      {
        "address": "950-998 Hersey St, St Paul, MN 55114",
        "name": "Urban Growler Farmers Market"
      },
      {
        "address": "704 S 2nd St, Minneapolis, MN 55415",
        "name": "Mill City Farmers Market"
      }
    ]
  }
]

module.exports = citiesData;
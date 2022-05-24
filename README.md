```
tasks
    define models and table relationships
        user
        product
        session
```

```

resources
    users
        all records
        single record
        registration webpage
        new record
    sessions
        login webpage
        authentication
        deletion 
    products
        all records
        single record

models
    user
        id
        full name
        email
        password
        shipping address
            country
            phone number
            full name
            street
            suite
            city
            province
            zip code
    product
        id
        title
        description
        price

operations on resources and URIs
    users
        HTTP GET /users
            returns all records
        HTTP GET /users/{id}
            returns single record
        HTTP POST /users
            creates single record
        HTTP PUT /users/{id}
            updates single record
        HTTP DELETE /users/{id}
            destroys single record
    sessions
        HTTP GET /sessions/new
            returns login webpage
        HTTP POST /sessions
            authenticates credentials against database record
        HTTP DELETE /sessions/{id}
            destroys single session and redirects to / 
    product resources
        HTTP GET /products
        HTTP GET /products/{id}

resource representation
    users
        collection of users
            [
              {
                "id": 1,
                "fullname": "Leanne Graham",
                "email": "Sincere@april.biz",
                "shipping_address": {
                  "country": "Canada",
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "province": "BC",
                  "zipcode": "92998-3874",
                  "phone": "1-770-736-8031"
                },
              },
              {
                "id": 2,
                "fullname": "Ervin Howell",
                "email": "Shanna@melissa.tv",
                "shipping_address": {
                  "country": "Canada",
                  "street": "Victor Plains",
                  "suite": "Suite 879",
                  "city": "Wisokyburgh",
                  "province": "ON",
                  "zipcode": "90566-7771",
                  "phone": "1-770-736-7123"
                },
              }
            ]
        single user
            {
              "id": 1,
              "fullname": "Leanne Graham",
              "email": "Sincere@april.biz",
              "shipping_address": {
                "country": "Canada",
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "province": "BC",
                "zipcode": "92998-3874",
                "phone": "1-770-736-8031 x56442"
              }
            }
    products
        collection of products
            {
              "id": 1,
              "title": "Mrs. Meyer's Clean Day Dish Soap",
              "description": "Mrs. Meyer’s Clean Day liquid dish soaps are specifically made to make grease disappear, while also providing a special, singular scent for your entire home. This biodegradable liquid dish soap cuts through grease and is designed for hand washing dishes, pots, and pans. The formula contains plant-derived cleaning ingredients that keeps dishes clean and bright. Made without parabens, phthalates, animal-derived ingredients, and the formula is never tested on animals. Also available in other garden inspired scents and products such as body lotions, laundry detergents, candles, and so much more! Mrs. Meyer’s –rooted in goodness.",
              "price": 5.49
            },
            {
              "id": 2,
              "title": "Brita Water Filter Replacement Filters",
              "description": "Improve the taste of tap water by regularly changing your BPA-free Brita Advanced Replacement Filter. Designed to fit all Brita pitchers and dispensers, this filter reduces the taste and odour of chlorine , to deliver great-tasting water while removing copper, cadmium and mercury. For optimum performance, change your water filter every 151 Litres, or approximately 2 months. One water filter can replace up to 300 standard 500 millilitre water bottles, better for the environment and for your wallet. Keep the great-tasting water flowing with this convenient 3-pack. Get great taste, less waste and more savings from Brita. Disclaimer: the logo on the actual filter is molded into the filter body and does not have a blue colour.",
              "price": 16.99
            }
        single product
            {
              "id": 1,
              "title": "Mrs. Meyer's Clean Day Dish Soap",
              "description": "Mrs. Meyer’s Clean Day liquid dish soaps are specifically made to make grease disappear, while also providing a special, singular scent for your entire home. This biodegradable liquid dish soap cuts through grease and is designed for hand washing dishes, pots, and pans. The formula contains plant-derived cleaning ingredients that keeps dishes clean and bright. Made without parabens, phthalates, animal-derived ingredients, and the formula is never tested on animals. Also available in other garden inspired scents and products such as body lotions, laundry detergents, candles, and so much more! Mrs. Meyer’s –rooted in goodness.",
              "price": 5.49
            }

```


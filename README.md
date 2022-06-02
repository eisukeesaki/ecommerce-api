# mind trace

This file is like a trace of my mind. I maintain it for several purposes.

- organize the problem in order to solve it
- for the benefit of my future self(and hopefully other people as well)
  - to use it as a knowledge base
  - to quickly remember the status of the project

I use mind maps to express, represent and store my understanding of things. The mind map below describes my style of mind mapping.

```text

my mind maps
    collection
        nodes
            representations of relations
                horizontal arrangement
                    parent node
                        contains child
                        abstracts child
                        owns child
                        consists of child
                    child node
                        is contained within parent
                        specifies parent
                        is owned by parent
                        constitues parent
                vertical arrangement
                    node above
                        more abstract
                    node below
                        more specific
                    not always considred
                        just like in this case

```

The mind maps are not intended to be comprehensive nor complete. They are like snapshops of my understanding of things at a particular point in time, from a particular point of view.

## issues

How I build computer programs:
- identify the main issue that I want to solve
- define minimum viable solution for the main issue
- recursively break down the main issue into smaller, more specific sub-issues until I know the exact code-level solution for a particular issue
- code
  - code a little, test a little, repeat
    - sizeof "little" will incrementally become larger as my skill develops
- reassess issues
- repeat

```text

database
    tables
        products
            id
                SERIAL PRIMARY KEY
            title
                VARCHAR
            image
                VARCHAR
                ?specific type for links
        shippingcosts
            all
                INTEGER
        coupons
            id
                SERIAL PRIMARY KEY
            code
                VARCHAR
    seeders
        products
        shippingcosts
        coupons
        
web API
    Node.js
        listen to requests
            endpoints
                /
                    methods
                        GET
                            route control
                                send view
                                    markup
                                    script
                /products
                    methods
                        GET
                            route control
                                query database
                                    SELECT FROM products
                                send resource representation
                                    JSON format
                /coupons
                    methods
                        POST
                            route control
                                query database
                                    SELECT FROM coupons WHERE code = req.body.couponCode
                                compare coupons
                                    requested
                                    SELECTed database record
                                send validity of coupon
                                  
UI
    markup
        HTML5
            components
                store(noun)
                    product list
                        product
                            title
                            price
                            image
                            add to cart
                cart
                    shopping cart
                        product
                            title
                            price
                            quantity
                            total number of unique products
                    summary
                        sum
                            total product price
                        shipping cost
                        coupon form
                        total cost
    script
        JavaScript
            data fetching
                products
                shipping cost
                coupon validity
            dynamic markup modification
                DOM manipulation
                    store
                        product components
                    cart
                        product component
                        summary component

```

## initial mind maps

```text

digital shopping cart v0
    collection
        data
            associtation
                user
                products
                    product
                        title
                        price
                quantity
                    determined by user
                        input from user
                shipping cost
                    static value
                coupon
                    identifier
                    value
    function
        calculation
            total cost
                sum of product price + shipping cost - coupon value

resources
    view files
        representation
            index.html
            index.js
        methods
            GET HTTP/1.1
        URI
            /
    products
        representation
            [
              {
                "title": "helmet",
                "price": 500,
                "image": "https://cloudinary.com/api/images/helmet.jpg"
               },
              {
                "title": "gloves",
                "price": 200,
                image": "https://cloudinary.com/api/images/gloves.jpg"
               }
            ]
        methods
            GET
        URI
            /products
    shipping cost
        representation
            {
              "shippingCost": 20
            }
        methods
            GET
    coupons
        representation
            {
              "couponCode": 1234
            }
        methods
            POST

middlewares
    serveProductImage
        extract product-image-URI from product record
        make HTTP GET request to the URI
        send downloaded image as response
            express.static()

UI
    views
        index.html
            functions
                values
                    show
                        product
                            title
                            price
                            quantity
                        shipping cost
                        coupon
                    modify
                        product
                            add
                            remove
                            quantity
                    calculator
                        total cost
            components
                store(noun)
                    product list
                        product
                            title
                            price
                            image
                            add to cart
                cart
                    shopping cart
                        product
                            title
                            price
                            quantity
                            total number of unique products
                    summary
                        sum
                            total product price
                        shipping cost
                        coupon form
                        total cost

front-end script
    DOM manipulation
    HTTP requests
        fetch API

digital shopping cart vN
    integrate authentication function
    tax
    dynamic shipping cost
    checkout
```


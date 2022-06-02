function mountRoutes(express) {
  express.use('/', (req, res) => res.send('you just sent a GET request to /'));
}

module.exports = {
  mountRoutes
}


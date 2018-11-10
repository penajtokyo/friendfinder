var path = require('path');
module.exports = function (app) {
  //get route for the home page
  app.get('/', function (request, response) {
    // console.log(__dirname, '../public/home.html');
    response.sendFile(path.join(__dirname, '../public/home.html'))
    // response.end()
  })
  //get route for the survery page
  app.get('/survey', function (request, response) {
    // console.log(__dirname, '../public/home.html');
    response.sendFile(path.join(__dirname, '../public/survey.html'))
    // response.end()
  })

  app.get('*', function (request, response) {
    // console.log(__dirname, '../public/home.html');
    response.sendFile(path.join(__dirname, '../public/home.html'))
    // response.end()
  })
}
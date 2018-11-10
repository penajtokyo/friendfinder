var express = require('express')

var PORT = 3000;

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))





require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)


app.listen(PORT, function(){
  console.log("our server is listending on port " + PORT);
})
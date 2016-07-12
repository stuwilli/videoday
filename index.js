const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)

app.use('/static', express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

const server = app.listen(app.get('port'), function serverStart () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});

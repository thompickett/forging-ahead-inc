const express = require('express');
const app = express();

const path = require('path');


app.use(express.static('static'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Forging Ahead Inc.'

app.get('/', (request,response) => {
  response.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/gallery', (request,response) => {
  response.sendFile(path.join(__dirname, '/static/gallery.html'));
});

app.get('/main-page-background.jpg', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/practice.png'));
});

app.get('/light-for-routes.png', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/light_one.png'));
});

app.get('/peacock.png', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/peacock.png'));
});

app.get('/light-for-routes-alt.png', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/light_one_alt.png'));
});

app.get('/background.jpg', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/background.jpg'));
});

app.get('/portal.png', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/portal.png'));
});

app.get('/portal-two.png', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/portal-two.png'));
});

app.get('/grass-gate.jpg', function (request,response) {
  response.sendFile(path.join(__dirname, '/static/photos/grass-gate.jpg'));
});

if (!module.parent) {
  let port = app.get('port')

  app.listen(port, () => {
    console.log(`${app.locals.title} is running on ${port}.`);
  });
}

module.exports = app;

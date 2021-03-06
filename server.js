const express = require('express');
const db = require('./models');
const routes = require('./routes');
// const generateHTML = require('./public/assets/js/generateHTML.js');


const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', routes);


// db.sequelize.sync({force: true}).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});

// generateHTML();

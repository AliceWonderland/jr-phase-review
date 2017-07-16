const express = require('express');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const path = require('path');
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use(express.static(path.join(__dirname, '../public')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require('./api');
app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(3000, () => {
  console.log('listening patiently on port 3000');
});

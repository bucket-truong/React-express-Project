const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dispo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected yeeeeeeeaaaaarrrrrd')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose did not connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose disconnected')
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/parus-emaily', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

const User = mongoose.model('users', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: 'Parus',
  age: 39,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log('Error: ', error);
  });

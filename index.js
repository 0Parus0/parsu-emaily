const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./models/User');
require('./services/passport');
const keys = require('./config/keys');



mongoose.connect(keys.mongoUri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
})



const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());

app.use(passport.session());

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
  console.log('Listening on port 3000');
})



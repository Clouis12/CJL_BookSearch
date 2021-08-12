const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dbUser:password@123@cluster0.4m8lm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

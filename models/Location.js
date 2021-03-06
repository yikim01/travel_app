// Loading Mongoose as our ORM for MongoDB
var mongoose = require('mongoose');

// Creating Schema to define structure of 'locations' in our DB
var LocationSchema = new mongoose.Schema({
  name: String,
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
});

// Creating Location model that maps to LocationSchema
var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;

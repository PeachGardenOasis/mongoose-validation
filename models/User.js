const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: function (input) {
      var regexpEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return regexpEmail.test(input);
    },
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    suite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      validate: function (input) {
        var regexpCity = /^[a-zA-Z ]*$/;
        return regexpCity.test(input);
      },
    },
    zipcode: {
      type: String,
      required: true,
      validate: function (input) {
        var regexpZip = /^\d{5}(?:-\d{4})$/;
        return regexpZip.test(input);
      },
    },
    geo: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  phone: {
    type: String,
    required: true,
    validate: function (input) {
      var regexpPhone = /^\d{1}(?:-\d{3})(?:-\d{3})(?:-\d{4})$/;
      return regexpPhone.test(input);
    },
  },
  website: {
    type: String,
    required: true,
    validate: function (input) {
      var regexpWebsite = /^https?:\/\//;
      return regexpWebsite.test(input);
    },
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    catchPhrase: {
      type: String,
      required: true,
    },
    bs: {
      type: String,
      required: true,
    },
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;

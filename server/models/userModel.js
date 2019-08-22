const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'basic',
    enum: ["basic", "supervisor", "admin"]
  },
  accessToken: {
    type: String
  }
})

UserSchema.statics.hashNewPassword = async function(password) {
  return await bcrypt.hash(password, 10);
};

UserSchema.statics.validatePassword = async function(password, user) {
  return await bcrypt.compare(password, user.password);
};

const User = mongoose.model('user', UserSchema)

module.exports = User;
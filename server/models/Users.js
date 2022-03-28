const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    billingFirstName: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    billingLastName: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    shippingAddress: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    shippingCity: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    shippingProvince: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    shippingPostalCode: {
      type: String,
      required: false,
      unique: false,
      trim: false
    }
    /* orders: [
      {
        type: Array
      }
    ] */
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

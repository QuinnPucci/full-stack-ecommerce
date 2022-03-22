const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
    // Add more here...
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Products = model('Products', userSchema);

module.exports = Products;

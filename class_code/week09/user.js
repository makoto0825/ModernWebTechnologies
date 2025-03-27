import exp from 'constants';
import { lowerCase, trim, uniq } from 'lodash';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowerCase: true,
  },
  password: {
    type: String,
    required: true,
  },
  // books: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: 'Book',
  // },
});

const User = mongoose.model('User', userSchema);

export default User;

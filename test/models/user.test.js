require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../lib/models/user');

describe('user model', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/auth', {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    });
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('has username and email', () => {
    const user = new User({
      email: 'test@test.com'
    });
    expect(user.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      email: 'test@test.com'
    });
  });


});

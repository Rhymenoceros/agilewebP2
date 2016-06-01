var should = require("should");
var mongoose = require('mongoose');
var Account = require("../models/account.js");
var Chat = require("../models/chat.js");
var db;

describe('Account', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
   done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    var account = new Account({
      username: '12345',
      password: 'testy'
    }
    );
    account.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });
  });

  it('find a user by username', function(done) {
    Account.findOne({ username: '12345' }, function(err, account) {
      account.username.should.eql('12345');
      console.log("   username: ", account.username);
      done();
    });
  });

  it('Check a user has correct password', function(done) {
    Account.findOne({ username: '12345' }, function(err, account) {
      account.password.should.eql('testy');
      console.log("   Password: ", account.password);
      done();
    });
  });

  afterEach(function(done) {
    Account.remove({}, function() {
      done();
    });
  });

});



describe('Chat', function() {

  before(function(done) {
    db = mongoose.connect('mongodb://localhost/test');
   done();
  });

  after(function(done) {
    mongoose.connection.close();
    done();
  });

  beforeEach(function(done) {
    var chat = new message({user: "User1",
        message: "Hey",
        time: new Date()
      }
    );
    chat.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');
      done();
    });
  });

  it('find a user by username', function(done) {
    Account.findOne({ username: '12345' }, function(err, account) {
      account.username.should.eql('12345');
      console.log("   username: ", account.username);
      done();
    });
  });

  it('Check is user has correct password', function(done) {
    Account.findOne({ username: '12345' }, function(err, account) {
      account.password.should.eql('testy');
      console.log("   Password: ", account.password);
      done();
    });
  });

  afterEach(function(done) {
    Account.remove({}, function() {
      done();
    });
  });

});

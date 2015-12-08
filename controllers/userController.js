var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createUser = {
  auth: {
    mode:'try',
    strategy:'session'
  },
  handler: function(request, reply) {
    console.log(request.payload);
    var newUser = new user({
      name: request.payload.name,
      email : request.payload.email,
      number : request.payload.number,
      password : SHA3(request.payload.password),
      scope : request.payload.scope
    });
    newUser.save(function (err) {
      console.log(err);
      if(err){
        return reply(boom.notAcceptable('Email must be unique: ' + err));
      }else{
        return reply('ok');
      };
    });
  }
};


exports.getUsers = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var users = user.find({});
    reply(users);
  }
}

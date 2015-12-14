var userController = require('./controllers/userController');
var authController = require('./controllers/authController');

exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Users')}}},
	{method: 'POST', path: '/v1/register', config: userController.createUser},
	{method: 'GET', path: '/v1/users', config: userController.getUsers},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'POST', path: '/v1/quoteRequest', config: authController.login},
	{method: 'POST', path: '/v1/reservationRequest', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];

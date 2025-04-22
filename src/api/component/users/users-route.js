const express = require('express');
const usersController = require('./users-controller');  
console.log(usersController)
const route = express.Router();

module.exports = (app, prefix = '/users') => {
  app.use(prefix, route);

  // Login user
  route.post('/login', usersController.loginUser);

  // Get list of users
  route.get('/', usersController.getUsers);

  // Create a new user
  route.post('/register', usersController.createUser);

  // Get user detail
  route.get('/:id', usersController.getUser);

  // Update user
  route.put('/:id', usersController.updateUser);

  // Change password
  route.put('/:id/change-password', usersController.changePassword);

  // Delete user
  route.delete('/:id', usersController.deleteUser);
};

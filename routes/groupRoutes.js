const routes = require('express').Router();
const groupController = require('../controller/groupController');

routes.get('/', groupController.getAllGroups);
routes.post('/', groupController.addNewGroup);
routes.get('/:id', groupController.getGroupById);
routes.patch('/:id', groupController.updateGroup);
routes.put('/:id', groupController.updateGroup);

module.exports = routes;
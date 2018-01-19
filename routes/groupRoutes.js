const router = require('express').Router();
const groupController = require('../controller/groupController');

router.get('/', groupController.getAllGroups);
router.post('/', groupController.addNewGroup);
router.get('/:id', groupController.getGroupById);
router.patch('/:id', groupController.updateGroup);
router.put('/:id', groupController.updateGroup);

module.exports = router;
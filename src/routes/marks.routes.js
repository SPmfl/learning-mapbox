const markController = require('../controllers/marks.controllers.js');
const { Router } = require("express");

const router = Router();


router.get('/', markController.getAllFeatures );
router.get('/:id', markController.getFeature );
router.post('/', markController.createFeature );
router.delete('/:id', markController.deleteFeature );
router.put('/:id', markController.updateFeature );


module.exports = router;
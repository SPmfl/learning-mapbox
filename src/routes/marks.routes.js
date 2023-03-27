const markController = require('../controllers/marks.controllers.js');
const { Router } = require("express");

const router = Router();


router.get('/', markController.getAllFeatures );
router.get('/:id', markController.getFeature );
router.post('/', markController.createFeature );
router.put('/', markController.updateFeature );
router.delete('/:id', markController.deleteFeature );

/*
curl -i -X GET http://localhost:4000

curl -i -X GET http://localhost:4000/423

curl -i -X POST -d "{ type : 'Feature', geometry: { type : "Point", coordinates : [[-75.41669, 37.77683]] } }"
*/




module.exports = router;
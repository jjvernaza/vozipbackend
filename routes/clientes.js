const express = require('express');
const clientesController = require('../controllers/clientes.controller');

const router = express.Router();

router.post("/", clientesController.save);
router.get("/", clientesController.index);
router.get("/:id", clientesController.show);
router.patch("/:id", clientesController.update);
router.delete("/:id", clientesController.destroy);

module.exports = router;

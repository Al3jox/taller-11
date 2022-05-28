const {Router} = require('express');
const router = Router();
const adminCtr = require('../controller/administrador-controller')

router.post('/crearAdmin', adminCtr.crearAdmin);
router.post('/loginAdmin', adminCtr.login);

module.exports = router
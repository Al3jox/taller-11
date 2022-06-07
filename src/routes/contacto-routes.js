const {Router} = require('express');
const cli = require('nodemon/lib/cli');
const router = Router();
const contactoCtr = require('../controller/contacto-controller')

const auth = require('../helper/auth');

router.post('/crearContacto', contactoCtr.crearContacto);
router.get('/listarContacto', contactoCtr.listarContacto);

module.exports = router
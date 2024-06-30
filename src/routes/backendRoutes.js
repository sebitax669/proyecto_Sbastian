const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');
const authMiddleware = require('../controllers/middlewares/authMiddleware'); // Importa el middleware
const { dashboard } = require('../controllers/backend/dashboardController');
const { usuarios } = require('../controllers/backend/usuariosController');
const { ingresarCliente, listarClientes, editarCliente, guardarEdicion } = require('../controllers/backend/clientesController');

const tipo_plantilla = 'backend';

router.get('/dashboard', authMiddleware, dashboard);


router.get('/modulo-usuarios', authMiddleware, usuarios);

router.get('/modulo-ingresar-clientes', authMiddleware, ingresarCliente);
router.get('/modulo-listar-clientes', authMiddleware, listarClientes);
router.get('/modulo-editar-cliente/:id', authMiddleware, editarCliente);
router.post('/modulo-editar-cliente', authMiddleware, guardarEdicion)

router.get('/modulo-proveedores', authMiddleware, (req, res) => {
    loadAppHtml(tipo_plantilla, 'proveedores', `${process.env.APP_NAME}: Módulo Proveedores`, 'Gestión de Proveedores', res);
});

module.exports = router;

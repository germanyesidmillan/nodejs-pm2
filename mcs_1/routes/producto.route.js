const express = require('express');
const {productoController} = require('../controller/index');
const router = express.Router();

//const {index} = require('../controller/userController');


/*router.get('/', (req,res)=>{
    console.log('peticion get');
    res.send("hello word!!!");
});*/


//router.get('/', index );
router.get('/index', productoController.index );
router.post('/', productoController.post );

/*router.post('/', (req,res)=>{
    console.log('peticion pos', req);
    res.send("hello word!!!");
});*/

console.log('routerProducto', router);

module.exports = router;
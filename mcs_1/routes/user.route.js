const express = require('express');
const {userController} = require('../controller/index');
const router = express.Router();

//const {index} = require('../controller/userController');


/*router.get('/', (req,res)=>{
    console.log('peticion get');
    res.send("hello word!!!");
});*/


//router.get('/', index );
router.get(userController.index );
//router.get('/', userController.index );
router.post( userController.post );
//router.post('/', userController.post );

/*router.post('/', (req,res)=>{
    console.log('peticion pos', req);
    res.send("hello word!!!");
});*/

console.log('routerUser!!!', router);

module.exports = router;
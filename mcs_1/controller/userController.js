const userController = {} 


userController.index = (req,res)=>{
    console.log('peticion get desde controller llamando desde index');
    res.send("hello word desde controller llamando desde index!!!");
}

userController.post = (req,res)=>{

    let dato = req.body;
    console.log('peticion post llamando desde post', req);
    res.json(dato);
}


module.exports = userController;

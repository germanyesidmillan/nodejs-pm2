const productoController = {} 



productoController.index = (req,res)=>{
    console.log('peticion get desde productocontroller llamando desde index');
    res.send("hello word desde productocontroller llamando desde index!!!");
}

productoController.post = (req,res)=>{

    let dato = req.body;
    console.log('peticion post llamando desde post productocontroller', req);
    res.json(dato);
}


module.exports = productoController;

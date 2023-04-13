const express = require('express');
const cors =require('cors');
const app = express();

const router = require('./routes');


app.use(cors());
app.use(express.json());

app.use('/api', router);



//console.log('routerindex',router.all)

app.listen(5000,()=>{
    console.log('corriendo en el puerto!!!',5000);
});



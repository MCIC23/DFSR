const express = require('express');
const mongoose =require ('mongoose');
const bodyparser = require ('body-parser');

const app = express();


app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const authRoutes = require('./routes/auth');
app.use('/api/user', authRoutes);

const db = require('./models');
//const dbConfig = require('./models/db.config');

const Role = db.Role;

mongoose.connect('mongodb://localhost:27017/test',{
        useNewUrlParser : true,
        useUnifiedTopogoly : true
    }).then(()=> {
        console.log('Conexion exitosa  al BD');
    }).catch(err =>{
        console.log("Error en conexion", err);
        process.exit();
    });
    

app.get('/', (req, res)=>{
    /*res.json(
        {
            estado : true, 
            mensaje : "Conexion exitosa"
        }
    );*/
    res.render('index.ejs');
});

app.use(function(req, res, next) {
   var err= new Error('Not Found');
   err.status= 400;
next(Error);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Servidor Alzado");
})
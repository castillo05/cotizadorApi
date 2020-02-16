import express from 'express';

const app = express();

// Rutas
import cotizacionRoute from './router/cotizacion';

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Cors
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
	next();
})

app.use('/api',cotizacionRoute);

app.use('/',(req, res)=>{
    res.status(200).json({message:'Bienvenido'})
})



module.exports=app
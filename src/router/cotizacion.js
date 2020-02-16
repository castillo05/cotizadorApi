import {config} from 'dotenv';
import Axios from 'axios';
import express from 'express';
config();

const {KEY} = process.env;

const api = express.Router();

export default api.get('/cotizacion/:target/:source/:quantity',async(req, res)=>{
    try {
        if(req.params.target==='dolar'){
            req.params.target='USD';
        }else if(req.params.target==='pesos'){
            req.params.target='ARS';
        }else if(req.params.target==='cordoba'){
            req.params.target='NIO';
        }

        if(req.params.source==='dolar'){
            req.params.source='USD';
        }else if(req.params.source==='pesos'){
            req.params.source='ARS';
        }else if(req.params.source==='cordoba'){
            req.params.source='NIO';
        }
        let data=await Axios.get(`https://api.cambio.today/v1/quotes/${req.params.source}/${req.params.target}/json?quantity=${req.params.quantity}&key=${KEY}`);
        console.log(data.data);
        res.json(data.data)
    } catch (error) {
        console.log(error);
    }
    
    
}).get('/cotizacion/dolar',async(req, res)=>{
    try {
       

        let data=await Axios.get(`https://api.cambio.today/v1/quotes/EUR/USD/json?quantity=1&key=${KEY}`);
        console.log(data.data);
        res.json(Object.values(data.data))
    } catch (error) {
        console.log(error);
    }
    
}).get('/cotizacion/pesos',async(req, res)=>{
    try {
       

        let data=await Axios.get(`https://api.cambio.today/v1/quotes/EUR/ARS/json?quantity=1&key=${KEY}`);
        console.log(data.data);
        res.json(Object.values(data.data))
    } catch (error) {
        console.log(error);
    }
    
}).get('/cotizacion/cordoba',async(req, res)=>{
    try {
       

        let data=await Axios.get(`https://api.cambio.today/v1/quotes/EUR/NIO/json?quantity=1&key=${KEY}`);
        console.log(Object.values(data.data));
        res.json(Object.values(data.data))
    } catch (error) {
        console.log(error);
    }
    
})

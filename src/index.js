import {config} from 'dotenv';
import app from './app';


config()

const PORT=5000||process.env;

(async()=>{
    try {
       
        app.listen(PORT,()=>{
            console.log(`App listen to port ${PORT}`);
        });


    } catch (error) {
        console.log(error);
    }
})()
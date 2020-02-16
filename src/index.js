import {config} from 'dotenv';
import app from './app';


config()

const PORT=process.env.PORT;

(async()=>{
    try {
       
        app.listen(PORT,()=>{
            console.log(`App listen to port ${PORT}`);
        });


    } catch (error) {
        console.log(error);
    }
})()
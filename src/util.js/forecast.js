
const request = require('request');


const forecast = (latitude,longitude,callback)=>{

    const url = 'https://api.darksky.net/forecast/a4a18bbe8e354115fb39b0b430c6858d/'+ latitude+','+longitude;

    request({url:url,json:true},(error,response)=>{


        if(error){
            callback('Unable to Connect',undefined);

        }else if(response.body.error){

         callback('Wrong coordinate',undefined);
        }else{

            callback(undefined,response.body.daily.data[0].summary+'It is currently'+response.body.currently.temperature +' '+'degrees out'+'There is '+""+response.body.currently.precipProbability +" "+"chance of rain");
        }

    })
}


module.exports = forecast
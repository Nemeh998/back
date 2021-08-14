'use strict';
//////////////import express/////////////
const cors = require('cors');
const express=require('express');
const pookdata=require('./assits/pokimon.json');
const weatherData=require('./data/weather.json')

console.log(pookdata)
/////////server has all properities and method of express//////////
const server=express();
require('dotenv').config();
const PORT=process.env.PORT;
server.use(cors()) // after you initialize your express app instance
server.get('/test',(req,res)=>{
    res.status(200).send('its WORK')
})


////////////////////////////////////////////////////////////////////////
////////////////////////////get data from file json////////////////////
//localhost:3040/pookdata?pookname=chesto
//{ pookname: 'chesto' }the result
//   console.log(req.query)
server.get('/pookdata',(req,res )=>{
    // console.log(req.query)
    const selectdata=pookdata.results.find(poke=>{
        // console.log(poke,'poke')
        // console.log(poke.name,'poke name')
        if(poke.name == req.query.pookname){
            return poke
        }
        res.send(poke);
    })
})

////////////////////////////////////////////////////////
////////////////get datafrom data json//////////////////
//localhost:3040/citylocation?cityname=Seattle
server.get('/citylocation',(req,res)=>{
    // console.log(weatherData)
    const datacity = weatherData.find(dataw=>{
        // console.log(dataw,'dataw')
        if(dataw.city_name==req.query.cityname){
            // console.log(dataw,'dataw2')
         
            //  console.log(Whtherinfo)
            return dataw
        }


    })

    if(datacity!==undefined){
        let whitherObject={
            findcity:true,
            lat:datacity.lat,
            lon:datacity.lon,
        //    cityname=datacity.city_name,
        }
        console.log(whitherObject)
            res.send( whitherObject);
    }
    else if(datacity===undefined){
        let Objerror = {
            findcity:false,
Error:"no data render",
        }
        res.send(Objerror)
    }
    else{
        res.status(404).send(`404 no data in ${city_name}`)

    }
{

}})
//localhost:3040/heather?cityname=amman&lan=47.60621&lot=-122.33207
/////////////////////////////////////////////////////////
////////////////wheather data//////////////////
server.get('/wheather',(req,res)=>{;
    let name=req.query.name;
    let lon=req.query.lon;
    let lat=req.query.lat;
try{

    let wheather=weatherData.find(wheather=>{
       if(name===wheather.city_name){
           return wheather
       }
    
    })
    let modaleData=wheather.data.map(element=>{
        return new forcast(element);
    })
}
catch{

}



})

class forcast{
    constructor(object){
        this.data=object.valid_date;
        this.description=object.description
    }
}
server.get('/',(req,res)=>{
    res.status(200).send('home routs')
})
const shoplist=['water','checken','icecreem'];
server.get('/sopelist',(req,res)=>{
    res.status(200).send(shoplist);
})
server.get('*',(req,res)=>{
    res.status(404).send('NOT FOUND')
})
server.listen(PORT,()=>{
    console.log(`listing on PORT ${PORT}`)
})
/////////////////////////hiba//////////////////////////
//////////////////////////////////////////////////////
// const cors = require('cors');
// const express = require('express') // require the express package
// const weatherData = require('./data/weather.json');
// const axios=require('axios');

// const server = express() // initialize your express server instance
// require('dotenv').config();
// const PORT=process.env.PORT;
// server.use(cors()) // after you initialize your express server instance


// class Forecast{
//     constructor(obj){
//         this.date=`Date: ${obj.valid_date}`
//         this.description=`Description: Low of ${obj.low_temp}, high of ${obj.max_temp} with few ${obj.weather.description}`

//     }

// }


// // a server endpoint 
// server.get('/', // our endpoint name
//  function (req, res) { // callback function of what we should do with our request
//   res.send('Hello World') // our endpoint function response
// })

// //localhost:3000/weather?cityname=<..>&lat=<..>&lon=<..>
// server.get('/weather', 
//  function (req, res) { 
//     try{
//      let cityValue= req.query.cityname;
//     let latValue = req.query.lat;
//     let lonValue = req.query.lon;
//     let searchQuery=weatherData.find(element =>{
//         if(element.city_name.toLowerCase() == cityValue.toLowerCase() && element.lat == latValue && element.lon == lonValue){
//             console.log(1)
//             return element;
           
//         }
//     })
//         let forecaseArr = searchQuery.data.map(element =>{
//             return new Forecast(element)
//         })
//         res.send(forecaseArr);
//     }catch{
//         res.send('Error: the information that you searched for it are not found')
//     }

  
// })

// server.get('*', function (req, res) { 
//   res.status(500).send('Some thing was wrong, data not found')
// })
// // server.listen(PORT,()=>{
// //     console.log(`listing on PORT ${PORT}`)
// // })

// server.listen(PORT, () =>{
//     // console.log('server runing')
//     console.log(`listing on PORT ${PORT}`)
// }) // kick start the express server to work
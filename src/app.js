
const path = require('path');
const express = require('express');
const hbs     = require('hbs');

//const request = require(request);
//const geocode = require('./util.js/');
//const forecast = require('./util.js/forecast');


const app = express();

//Define paths for express config
const directoryPath = path.join(__dirname,'../public');
const viewTemplatePath = path.join(__dirname,'../templates/views');
const partialTemplatePath = path.join(__dirname,'../templates/partials');

//Setup handlebars engine and views location
app.set('view engine','hbs'),
app.set('views',viewTemplatePath);
//hbs.registerPartial(partialTemplatePath);



    app.get('/', (req,res)=>{
    
        res.render('index',{
            title : 'Homepage',
            name : 'Bertin Ruhimbaza',
        });
    });

//app.use(express.static(directoryPath));

//app.get('',(req,res)=>{

//   res.send('index');
//})

// app.get('/help',(req,res)=>{

//     res.send([{
//         name :'Ruhimbaza',
//         address:'Kacyiru'
//     },{
//         name: 'Aline',
//         address: 'Kicukiro'

//     }]);
// }),

// app.get('/about',(req,res)=>{

//     res.send({

//         forecast : 'This is json object',
//         title    : 'Andela'
//     });
// }),

app.get('/weather',(req,res)=>{

    if(!req.query.address){
  
   return res.send({

    error: 'No address have been provided please! try again',

   });

};
res.send({

 data: 'IS Snowing',
 temp: '35%',
 address: req.query.address,
});
});

app.get('/product',(req,res)=>{

    if(!req.query.search){
       return res.send({

            error: 'No search terminal provided.',
        });
        
    };



console.log(req.query.search);
    res.send({

        product : [],
    });
});

app.get('*',(req,res)=>{

res.send('My page 404.');
});





    
app.listen(3000,()=>{

    console.log('This app is running on 3000 port.');
})
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyparser = require('body-parser')
const router = require('./router/studentDetail')

app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
//get the api

// app.get('/',(req,res)=>{   
//     res.send(sampleJson)
// })
app.use('/api', router);
//get the specific Api
// app.get('/:id',(req,res)=>{
//     const sampleSpecific = sampleJson.find(x => x.id === parseInt(req.params.id))
//     console.log('get>>>>',sampleSpecific)
//     if(!sampleSpecific) res.status(404).send('name not found') 
//      res.send(sampleSpecific)  
// })
//update
// app.put('/:id',(req,res)=>{
//     const sampleSpecific = sampleJson.find(x => x.id=== parseInt(req.params.id))
//     console.log(req.body)
//     console.log('sample',sampleSpecific)

    
//     sampleSpecific.name = req.body.name;
//     sampleSpecific.phoneNo = req.body.phoneNo;
//     sampleSpecific.regno = req.body.regno;
//     sampleSpecific.email = req.body.email;

//     res.send(sampleSpecific)
// })

//delete the specific item
// app.delete('/:id',(req,res)=>{
//     const sampleSpecific = sampleJson.find(x=>x.id===(req.params.id)) 
//     // if(!sampleSpecific) res.status(404).send("item not found")
//     const index = sampleJson.indexOf(sampleSpecific)
//     sampleJson.splice(index,1)
//     res.send(sampleSpecific)
// })
// post the item to existing api 
// app.post('/add',(req,res)=>{
//     const addSample = { id  : sampleJson.length+1,
//                         name : req.body.name ,
//                         phoneNo :   req.body.phoneNo, 
//                         regno  : req.body.regno, 
//                         email : req.body.email
//                     }
//     sampleJson.push(addSample)
//     res.send(addSample)
// })

app.all('*',(req,res)=>{
    res.send('NOT FOUND')})
app.listen(9090,()=>{
    console.log('im running on 9090')
})  
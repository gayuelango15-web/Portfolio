
const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());

app.get('/api',(req,res)=>{
  res.json({message:'Portfolio API Running'});
});

app.listen(5000,()=>console.log('Server running on 5000'));

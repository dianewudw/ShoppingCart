const express = require('express');
const app = express();
const port =3000
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../dist')))
app.use('/', (req,res,next)=>{
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.listen(port, ()=>{ console.log(`connected at port ${port}!`)})
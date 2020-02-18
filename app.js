const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/sum', (req, res) => {
const a = req.query.a
const b = req.query.b
 if(!a || !b ){
   return res.status(400).send('Please provide 2 numbers(a,b)')
 }

 const numA = parseInt(a);
 const numB = parseInt(b);

if(Number.isNaN(numA) || Number.isNaN(numB)){
  return res.status(400).send('a & b must be numbers')
}

let c = numA + numB

res.status(200).send(`The sum of ${numA} and ${numB} is ${c}`)

});

app.listen(8000, ()=> {console.log('server is listening on port 8000')})
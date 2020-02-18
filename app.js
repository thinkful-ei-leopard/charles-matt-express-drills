const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// Drill 1 - Sum
app.get('/sum', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  if(!a || !b ){
    return res.status(400).send('Please provide 2 numbers(a,b)');
  }

  const numA = parseInt(a);
  const numB = parseInt(b);

  if(Number.isNaN(numA) || Number.isNaN(numB)){
    return res.status(400).send('a & b must be numbers');
  }

  let c = numA + numB;

  res.status(200).send(`The sum of ${numA} and ${numB} is ${c}`);

});

// Drill 2 - Cipher
app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;

  if(!text) {
    return res.status(400).json({ message: 'text is required' });
  }

  if(!shift) {
    return res.status(400).json({ message: 'shift is required' });
  }

  const numShift = parseInt(shift);

  if(Number.isNaN(numShift)) {
    return res.status(400).json({ message: 'shift must be a number' });
  }

  let cipher = '';

  for(let i = 0; i < text.length; i++) {
    let c = text[i];
    if(c.match(/[a-z]/i)) {
      let code  = text.charCodeAt(i);

      if((code >= 65) && (code <= 90)) {
        c = String.fromCharCode(((code - 65 + numShift) % 26) + 65);
      } else if((code >= 97) && (code <= 122)) {
        c = String.fromCharCode(((code - 97 + numShift) % 26) + 97);
      }
    }
    cipher += c;
  }

  res.status(200).json({ cipher });
});

// Drill 3 - Lotto

app.listen(8000, ()=> {
  console.log('server is listening on port 8000');
});
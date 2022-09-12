import express from 'express';

const app = express();

app.get('', () => {
  console.log('object');
  return ''
});

app.listen(3333);

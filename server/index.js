const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./server/main.html'));
});
app.post('/server', (req, res) => {
  fs.writeFileSync('./server/log.txt', JSON.stringify(req.body));
  return res.send(true);
});

app.listen(3001, () => {
  console.log('Server is running on 3001 port');
});

const helmet = require('helmet')
const Joi = require('joi')
const courses = require('./routes/courses');
const express = require('express')
const app = express()

const port = 8009
app.use(express.json());
app.use(helmet());
app.use('/api/courses', courses);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express.Router();


courses = [
    {id: "1", course1 : "Course1 Mosh Part 1"},
    {id: "2", course2 : "Course1 Mosh Part 2"},
    {id: "3", course3 : "Course1 Mosh Part 3"},
    {id: "4", course4 : "Course1 Mosh Part 4"}
]

app.get('/', (req, res) => {
    res.send(courses)
  })

app.post('/courses', (req, res) => {
  const coursescreation = Joi.object({
    name: Joi.string().min(4).required(),
  });
  
  
    const { error, value } = coursescreation.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
        return res.send("Invalid Request: " + JSON.stringify(error));
    } else {
      const course = {
        id: courses.length +1,
        name: req.body.name
      };
  
      courses.push(course);
      res.send(courses);
    }
});


app.put('/api/courses', (req, res) => {
  const coursescreation = Joi.object({
    name: Joi.string().min(4).required(),
  });
  
  
    const { error, value } = coursescreation.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
        return res.send("Invalid Request: " + JSON.stringify(error));
    } else {
      const course = {
        id: courses.length +1,
        name: req.body.name
      };
  
      courses.push(course);
      res.send(courses);
    }
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    res.send(course);
})

module.exports = app;
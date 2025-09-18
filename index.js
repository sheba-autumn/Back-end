const express = require('express');

const app = express();

const PORT =5000;

app.get('/', (request, response)=>{
    response.send('Welcome to my backend server!');
});

app.listen(PORT, () =>{
    console.log('Server is running on port' + PORT);
})

//Http methods: GET, POST, PUT, DELETE

app.get('/about', (req, res)=>{
    res.send('This is my about page')
})

// Route parameters
app.get('/users/:id', (req, res)=>{
    const userId = req.params.id;
    res.send('User ID is: ' + userId);
})

// Querry parameters
app.get('/search', (req, res)=>{
    const query = req.query.q;
    res.send('You searched for' +query);
})

// Post request
app.post('/about', (req, res) => {
    const newAbout = req.body
    res.json({
        message: "Success"
    })
});
// Middleware
app.use(express.json());




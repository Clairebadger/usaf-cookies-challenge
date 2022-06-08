const express = require('express')
const app = express()
const port = 3000
const cookieParser = require("cookie-parser");

/*
Create an Express application that sets a cookie when routed to /login with their name. 
If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".
*/ 
app.use(cookieParser());
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login/:name', function(req, res){ //set the cookie on login
    res.cookie('name', `${req.params.name}`).send('cookie set'); 
 });

 app.get('/hello', (req, res) => res.send(`Hello ${req.cookies.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
const express = require('express');


const auth = require('./middleware/auth');
const middlewareAuthentication = require('./middleware/auth');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {  
    
    return res.status(200).send(`Hello Route!`);
});

app.post('/signIn', middlewareAuthentication, (req, res) => {  
    return res.status(200).send('Hello World!')
})



app.listen(3333, () => {
    console.log("Server is running on port 3333");
})
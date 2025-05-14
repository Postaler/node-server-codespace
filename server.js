//include express
const express = require('express');

//set port
const port = 3000;

const app = express();

app.get('/',(req,res)=>{
       res.send(`
	<h1>Here's my Home Page</h1>
	<p>Welcome to express</p>
  `);

});

app.get('/about',(req,res)=>{
       res.send(`
	<h1>Welcome to Andrei's Home Page</h1>
	<p>Welcome to express</p>
  `);
  
});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

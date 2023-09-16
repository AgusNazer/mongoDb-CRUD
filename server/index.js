const express = require('express'); 
const  mongoose  = require('mongoose');
const app = express()
require('dotenv').config();

// const AuthorRouter = require('./router/AuthorRouter')
// const BookRouter = require('./router/BooksRouter')

app.use(express.json({extended:true}));
app.use(express.urlencoded())


// enrutado
// app.use('/api', AuthorRouter)
// app.use('/api', BookRouter)

// enrutado con controladores
app.use('/api', require('./routes/AuthorRouter'));
app.use('/api', require('./routes/BooksRouter'));

// conexion con data base
const URL = process.env.MONGO_DB

mongoose.connect(URL, {}
    ).then(()=>{
        console.log(('Db connected'));
    }).catch(err => {
        console.log(err);
    })

app.listen(4000, () =>{
    console.log('Server is running on port 4000');
}); 
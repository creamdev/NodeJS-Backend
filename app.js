const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv/config');

//MİDDLEWARE
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Routes
 const categoriesRoutes = require('./routers/categories');
 const productsRoutes = require('./routers/products');
 const ordersRoutes = require('./routers/orders');
 const usersRoutes = require('./routers/users');
 const addressesRoutes = require('./routers/addresses');
 const countriesRoutes = require('./routers/countries');
 const authRoutes = require('./routers/auth');


 const api = process.env.API_URL;

 app.use(`${api}/categories`,categoriesRoutes);
 app.use(`${api}/products`,productsRoutes);
 app.use(`${api}/orders`,ordersRoutes);
 app.use(`${api}/users`,usersRoutes);
 app.use(`${api}/addresses`,addressesRoutes)
 app.use(`${api}/countries`,countriesRoutes)
 app.use(`${api}/auth`,authRoutes);

mongoose.connect(
    process.env.CONNECTION_STRING,
     {
        useUnifiedTopology: true ,
        useNewUrlParser: true,
        useFindAndModify:false,
        dbName:'copcu-database'
    })
    .then(()=>{
        console.log('Database Connection is Ready...')
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(3000,()=> {
    console.log('Server is running http://localhost:3000');
})
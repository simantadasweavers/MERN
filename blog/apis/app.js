const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')


// external routes
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blogs');

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // optional if you're using cookies/auth headers
}));

app.use(express.json());
app.use(userRoutes);
app.use(blogRoutes);



app.get("", (req, res)=>{
    res.send({"message":"Home Page"});
});


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(process.env.APP_PORT, () =>{
    console.log("App running on port: ", process.env.APP_PORT);
});

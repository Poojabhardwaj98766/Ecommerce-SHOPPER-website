const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const router = require('./routes/Product');
const userRouter = require('./routes/User');
const Product = require('./model/Product');
const User=require('./model/User')
const server = express();

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use('/api', router);
server.use('/api/user', userRouter);

server.get('/', (req, res) => {
    res.send("Express App is running");
});

const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin@123';

server.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === adminEmail && password === adminPassword) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});
server.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(-8); // Get the last 8 items
    console.log("new collections fetched");
    res.send(newcollection);
});

server.get('/popularinwomen', async (req, res) => {
    let products = await Product.find({ category: "women" });
    let popular_in_women = products.slice(0, 4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
});

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, 'secret_ecom');
        req.user = data.user;
        next(); // Ensure next() is called to proceed to the next middleware/route handler
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

server.post('/addToCart', fetchUser, async (req, res) => {
    
    let userData=await User.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId]+=1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.caartData});
    res.send("Added");
});

// Image storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
server.use('/images', express.static('upload/images'));

server.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${Port}/images/${req.file.filename}`
    });
});

// Database connection
connectDB();

let Port = process.env.Port || 4000;
server.listen(Port, () => {
    console.log("server is listening on " + `${Port}`);
});

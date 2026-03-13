// Logger Middleware
function loggerMiddleware(req, res, next) {
    const method = req.method; //Contains the HTTP method.
    const url = req.url;  //Contains the requested route.
    const time = new Date().toLocaleTimeString(); //Generates the current time.
    console.log(`[${method}] ${url} - ${time}`);
    next(); //Continue to the next middleware or route.
    }

const express = require("express");
const app = express();
app.use(express.json()); //to parse JSON request bodies
app.use(loggerMiddleware); //to activate the logger middleware for all routes

const PORT = 5000;

let blogPosts = []; //Mock Database

//root route
app.get("/", (req, res) => {
    res.send("Welcome to The Data Hub API");
});

// GET all posts
app.get("/posts", (req, res)=>{
    res.json(blogPosts);
});

// GET single post
app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === id);
    if (!post) {
        return res.json({ message: "Post not found" });
    }
    res.json(post);
    });

//create a new post
app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: blogPosts.length + 1,
        title: title,
        content: content
    };
    blogPosts.push(newPost);
    res.json({
        message: "Post created",
        post: newPost
    });
    });

//to update posts, we use the put method
app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === id);
    if (!post) {
        return res.json({ message: "Post not found" });
    }
    const { title, content } = req.body;
    post.title = title;
    post.content = content;
    res.json({
        message: "Post updated",
        post: post
    });
    });

app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    blogPosts = blogPosts.filter(post => post.id !== id);
    res.json({
        message: "Post deleted"
    });
    });

//Login route
app.get("/login", (req, res) => {
    res.send("Login route. Use POST to authenticate.");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "1234") {
        const fakeToken = "mock-jwt-token-123456";
        res.json({
        message: "Login successful",
        token: fakeToken
        });
    } else {
        res.status(401).json({
        message: "Invalid credentials"
        });
    }
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
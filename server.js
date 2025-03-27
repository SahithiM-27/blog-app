const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));  // Serve static files (CSS, JS)
app.use(express.urlencoded({ extended: true })); // To parse form data

// Store posts (This will be replaced with MongoDB)
let posts = [];

app.get("/", (req, res) => {
    res.render("index", { posts: posts }); // Ensure posts is passed
});

app.post("/add-post", (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        posts.push({ title, content, date: new Date().toLocaleString() });
    }
    res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

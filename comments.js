// Create web server

// Import the express module
const express = require('express')

// Create a new web server
const app = express()

// Import the comment data
const comments = require('./data/comments')

// Import the post data
const posts = require('./data/posts')

// Import the user data
const users = require('./data/users')

// Import the path module
const path = require('path')

// Import the ejs module
const ejs = require('ejs')

// Configure the express app to use ejs
app.set('view engine', 'ejs')

// Configure the express app to use files from the public folder
app.use(express.static(path.join(__dirname, 'public')))

// Route to render the home page
app.get('/', (req, res) => {
  res.render('home', {
    posts: posts
  })
})

// Route to render the comments page
app.get('/comments', (req, res) => {
  res.render('comments', {
    comments: comments
  })
})

// Route to render the users page
app.get('/users', (req, res) => {
  res.render('users', {
    users: users
  })
})

// Start the web server listening on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
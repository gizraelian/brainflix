const express = require('express');
const bodyparser = require('body-parser');
const videos = require('./videos');
const videoLinks = require('./videoLinks');

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
 });

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.listen(8080, ()=>{
    console.log('Server running on host 8080..');
});

app.get('/videos/:id' , (req, res) => {
    let id = Number(req.params.id);
    let currVid = videos.find(function(element) {
        return element.id === id;
    })
    res.json(currVid);
});

app.get('/videos' , (req, res) => {
    res.json(videoLinks);
});

app.post('/videos/:id/comments', (req, res) => {
    let id = Number(req.params.id);
    let currVid = videos.find(function(element) {
    if (element.id === id) {return true;} else {return false;}})
    nuObj = {
        name: "User",
        timestamp: "Just now",
        comment: req.body.comment,
    }
    currVid.comments.unshift(nuObj);
    res.json(nuObj);
});

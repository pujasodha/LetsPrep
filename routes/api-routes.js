// var user_model = require('../public/js/app.js');
var db = require('../models')
var request = require('request')
var bodyParser = require('body-parser')
var app_id = require('../config/config.js').app_id
var app_key = require('../config/config.js').app_key



module.exports = function (app) {
//all user post, get, update, delete

    //POST route for inputting new user info
    app.post('/api/user', function (req, res) {
        console.log('post starts')
        db.UserData.create({
            user: req.body.user,
            email: req.body.email,
            calories: req.body.calories,
            breakfast: req.body.breakfast,
            lunch: req.body.lunch,
            dinner: req.body.dinner,
            createdAt: req.params.createdAt,
            updatedAt: req.params.updatedAt,
        }).then(function (dbUser) {
           
            res.send(dbUser)
        })
    })
    // GET route for getting the users information
    app.get('/api/user', function (req, res) {
        db.User.findAll({
            where: {
                user: req.params.user,
                email: req.params.email,
                calories: req.params.calories
            }
        }).then(function (dbUser) {
            res.json(dbUser)
        })
    })
    
    
    //Update users information
    app.put('/api/user', function (req, res) {
        db.User.update({
            where: {
                user: req.params.user,
                email: req.params.email,
                calories: req.params.calories
            }
        }).then(function (dbUser) {
            res.json(dbUser)
        })
    })
    
    //delete for deleting users
    app.delete('/api/user', function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser)
        })
    })
    
    
    //all meal stuff
    
    //Get route for returning all the meals 
    app.get('/api/meals', function(req, res){
        db.User.findAll({
            where: {
                breakfast: req.params.breakfast,
                lunch: req.params.lunch,
                dinner: req.params.dinner
            }
        }).then(function(dbUser){
            res.json(dbUser)
        })
    })
    
    //GET route for breakfasts
    app.get('/api/user/meals/:breakfast', function(req, res){
        db.User.findOne({
            where: {
                breakfast: req.params.breakfast
            }
        }).then(function(dbUser){
            res.json(dbUser)
        })
    })
    //GET route for lunch
    app.get('/api/user/meals/:lunch', function(req, res){
        db.User.findOne({
            where: {
                lunch: req.params.breakfast
            }
        }).then(function(dbUser){
            res.json(dbUser)
        })
    })
    //GET route for dinner
    app.get('/api/user/meals/:dinner', function(req, res){
        db.User.findOne({
            where: {
                dinner: req.params.breakfast
            }
        }).then(function(dbUser){
            res.json(dbUser)
        })
    })
    
    
    
    // ========================== API & AJAX FOR EDAMAM ==================================== //
    
    app.post('/api/edamam', function(req, res){
        console.log('edamam starting')
        // var calories = {calories: req.body.calories}
    //    var calorieAPI = db.UserData.findOne({
    //         where: {
    //             calories: req.body.calories,
    //         },
    //     })

        var calories = req.body.calories
        var queryURL = "https://api.edamam.com/search?q=&app_id=" + app_id + "&app_key=" + app_key + "&to=30&calories=250-"+ calories + "&health=alcohol-free&time=25-30&ingr=5&diet=balanced&yield=1-4"
        
        request(queryURL, function(error, response, body){
            console.log(queryURL)
        // console.log(response.body)
        // console.log(body)
        res.json(response.body)
        })
    })
}

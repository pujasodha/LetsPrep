var path = require('path')

module.exports = function(app) {

    //route for the landing page
    app.get('/index', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    //route to main page
    app.get('/main', function(req, res){
        res.sendFile(path.join(__dirname, "../public/user.html"))
    })

    //route to user page
    app.get('/prep', function(req, res){
        res.sendFile(path.join(__dirname, "../public/landing.html"))
    })
}
   


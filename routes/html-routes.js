var path = require('path')

module.exports = function(app) {

    //route for the landing page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/landing.html"))
    })

    //route to main page
    app.get('/main', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    //route to user page
    app.get('/user', function(req, res){
        res.sendFile(path.join(__dirname, "../public/user.html"))
    })
}
   


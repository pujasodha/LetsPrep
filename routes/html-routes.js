var path = require('path')

module.exports = function(app) {

    //index.html route
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/landing.html"))
    })
}
   


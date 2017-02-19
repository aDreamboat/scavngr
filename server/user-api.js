module.exports = function(app){

    app.get('/user/:id', function(req, res){
        
        res.json({
            id: 1,
            name: "Ole Kevin",
            title: "Supreme Overlord"
        });
    });

}
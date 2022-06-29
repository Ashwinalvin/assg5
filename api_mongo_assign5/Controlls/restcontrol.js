const locationsData = require('../Models/rest');

exports.getAllLocations = (req, res) => {
    locationsData.find().then(result =>{
        res.status(200).json({
            message : "we got the output",
            locations :result
        });
    }).catch(err=>{
        res.status(500).json({
            message : "we got wrong",
            error :err
        });

    })
 }













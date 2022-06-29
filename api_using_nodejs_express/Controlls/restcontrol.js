const locationsData = require('../Models/rest.json');

exports.getAllLocations = (req, res) => {
    res.status(200).json({
        locations: locationsData
    });
}

exports.getAllLocationsbyname = (req, res) => {
    
    let  resName = req.params.name;// synatx request.params.<the slash name i want do not look at model file>
                                // i am dealing with /Resturant/:name  (here use word name to req.params.name ok)
                                //if the routing i want is  /Resturants/:rating (my request should be req.params.rating donot look at data base )
      
    const resturant = locationsData.filter((item)=>{
        return item.city_name == resName ; // item.<city name that is present in database> == resName
    })
    

    res.status(200).json({
        resturant: resturant
        
    });



    
}









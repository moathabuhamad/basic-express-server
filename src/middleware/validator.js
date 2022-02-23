"use strict";
module.exports=(req,res,next)=>{
if (typeof req.query.name == "string" && req.query.name!=""){
    next();
}
else{
next("Name Not Valid")
}
}
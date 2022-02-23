"use strict";

module.exports=(req,res,next)=>{
console.log(`request_path: ${req.path}`);
console.log(`request_method: ${req.method}`);
next();
}
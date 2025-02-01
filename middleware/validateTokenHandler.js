const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.header.Authorization || req.header.auAuthorization;
  if (authHeader && authHeader.startWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
      if(err){
        res.status(401);
        throw new Error("User is not authorized");
      }
      console.log(decoded);
    });
  }
});

module.exports = validateToken;
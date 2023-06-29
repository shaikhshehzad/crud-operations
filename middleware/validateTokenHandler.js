const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  // console.log(token)
  console.log("authheader" ,  authHeader)
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    
    console.log("token " , token)
    
    console.log("Access token " , process.env.ACCESS_TOKEN_SECRET)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
      console.log(err)
      if (err) {
        res.status(401);
        throw new Error("User is not authorized !!!!");
      }
      req.user = decoded.user;
      console.log(req.user)
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing");
    }
  }else{
    res.status(401);
    throw new Error("please Login Auth header is missing  !!!!");
  }
});

module.exports = validateToken;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic3MiLCJlbWFpbCI6InNzQGdtYWlsLmNvbSIsImlkIjoiNjQ5ZDA1Yzc3NGQxNWQ1NDI0N2MzMjhkIn0sImlhdCI6MTY4ODAxMzMwMywiZXhwIjoxNjg4MDEzMzYzfQ.l5-3hLkXfJD_TodfGHQGpMs_OdT8zLanaot4n_CiA6s
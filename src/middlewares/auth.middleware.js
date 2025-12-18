// this is the security gaurd of the backend
// this checks all the protected request- if the token is there or not, if its there then is it valid or not, who is the user and stuff like that.
// if everything is correct then it will allow you to proceed otherwise it will block


//jsonwebtoken or jwt is a library - encoded string in which the data of user is there
// without this line you cant check the token
//jwt - signed token which is created during the time of server creation
// jwt consists of userid, role, expirytime
const jwt = require("jsonwebtoken");

//this is a middleware function
// middleware is a checkpoint between request and response

//these are express middleware
//req = incoming reques, res=ressponse object, next = giving control to next middleware/controller
module.exports = (req, res, next) => {

  // checks the id 
  //clients send the request which token
  // this token is then verified by the middleware

  //reading of authorizsation header
  // from the header of http, token is being accessed
  const authHeader = req.headers.authorization;

  if (!authHeader) // checking for the existence of the token
    //unable to find the id
    return res.status(401).json({ msg: "Token missing" }); // authentication failure

  const token = authHeader.split(" ")[1]; // this extracts the token

  try {
    // this tells us if the id is valid or invalid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // notes the details from the given id
    req.user = decoded;  //request context enrichment
    // attachment of verified user info with the object
    // controllers access req.user


    next(); // authentication successful and the control is given to the next controller/middleware
  } catch {
    res.status(401).json({ msg: "Invalid token" }); // error handling, if the token verification fails then this will show an error saying invalid token
  }// this is called invalid/ expired token
};
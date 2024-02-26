// const Allauth = (req, res, next) => {
//   console.log("we are on the first Auth");
//   next();
// };

// const specificAuth = (req, res, next) => {
//   console.log("we are on the second Auth");
//   next();
// };

// module.exports = { Allauth, specificAuth };
const jwt = require("jsonwebtoken");
const secretKey = "mohnish";
// const secretKey = process.env.secretKey;
const auth = (req, res, next) => {
  var authHeader = req.headers["authorization"]; // used to fetch token which is generated at the time of register

  const token = authHeader.split(" ")[1];

  console.log(token, "this is token");
  if (token) {
    // if token not generated it will un-define
    jwt.verify(token, secretKey, (err, validate) => {
      if (err) {
        return res.send("Error while accessing", err);
      }
      if (validate) {
        return next();
      }
      return res.send("user is not varified");
    });
  }
};
module.exports = auth;

/* logic for front-end 

 if user open the dashboard & user does not have any account {

navigate(login)
}

*/

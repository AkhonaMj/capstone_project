import { compare } from "bcrypt";
import { loginUserDb } from "../model/userDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const checkUser = async (req, res, next) => {
  try {
    const { emailAdd, password, userId } = req.body; //destructuring
    console.log(password);

    let hashedPassword = await loginUserDb(emailAdd);
    console.log(hashedPassword);

    if (!hashedPassword) {
      res.status(404).send("User not found");
      return;
    }

    compare(password, hashedPassword, (err, result) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }

      if (result == true) {
        let token = jwt.sign(
          { emailAdd: emailAdd },process.env.SECRET_KEY, { expiresIn: "1h" }
        );
        console.log(token);
        req.body.token = token.userId;

        next();
        return;
      }
      res.status(401).send("Wrong password");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const verifyAToken = (req,res,next)=>{
  let {cookie} = req.headers
  // checks if token exists first
  let token = cookie && cookie.split('=')[1] // if there is a cookie, then we can split it
  // console.log(token)
  jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
      if(err){
          res.json({message:'Token is invalid'})
          return
      }
      // req.body.username = decoded.username
      req.body.userId = decoded.userId
      //  console.log(decoded)
      next()
  })
}


export { checkUser, verifyAToken };
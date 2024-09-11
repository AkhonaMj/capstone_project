import { compare } from "bcrypt";
import { loginUserDb } from "../model/userDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const checkUser = async (req, res, next) => {
  try {
    const { emailAdd, password } = req.body; // Destructuring
    console.log(password);

    let user = await loginUserDb(emailAdd); // Assume this returns user object with `userId` and `hashedPassword`
    // console.log(user);
    
    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    compare(password, user.password, (err, result) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(result);
      
      if (result === true) {
        let token = jwt.sign(
          { userId: user.userId, emailAdd: user.emailAdd }, 
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        console.log(token);
        res.cookie('token', token, { httpOnly: true }); 
        req.userId = user.userId; 
        req.body.token = token
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

const verifyAToken = (req, res, next) => {
  let { cookie } = req.headers;
  let token = cookie && cookie.split('=')[1];
  
  if (!token) {
    res.status(401).json({ message: 'Token is missing' });
    return;
  }
  
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Token is invalid' });
      return;
    }
    // console.log(decoded);
    req.userId = decoded.userId; // Store userId in request object
    next();
  });
};


export { checkUser, verifyAToken };

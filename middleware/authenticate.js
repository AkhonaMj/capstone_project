import { compare } from "bcrypt";
import { loginUserDb } from "../model/userDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();
const checkUser = async (req, res, next) => {
  try {
    // ...
    if (result === true) {
      let token = jwt.sign(
        { userId: user.userId, emailAdd: user.emailAdd }, 
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      console.log(token);
      res.cookie('token', token, { httpOnly: true }); 
      // Create a new Axios instance with the token included in the headers
      const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      // You can use this Axios instance to make requests that include the token
      // ...
      req.userId = user.userId; 
      req.body.token = token
      next();
      return;
    }
    // ...
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const verifyAToken = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    res.status(401).json({ message: 'Token is missing' });
    return;
  }
  
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Token is invalid' });
      return;
    }
    req.userId = decoded.userId; // Store userId in request object
    next();
  });
};


export { checkUser, verifyAToken };

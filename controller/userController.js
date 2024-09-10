import {getUsersDb, getUserDb, registerUserDb, updateUserDb, deleteUserDb} from "../model/userDb.js";
import  {hash} from "bcrypt"

const getUsers = async (req, res) => {
    try {
      const users = await getUsersDb()
      res.status(200).send(users)
    } catch (err) {
      console.error(err)
      res.status(500).send("Error fetching users")
    }
  }
  
  const getUser = async (req, res) => {
    try {
      const user = await getUserDb(req.params.id)
      if (!user) {
        res.status(404).send("User not found")
      } else {
        res.status(200).send(user)
      }
    } catch (err) {
      console.error(err)
      res.status(500).send("Error fetching user")
    }
  }

  const registerUser = async (req, res) => {
    try {
      let { firstName, lastName, userRole, emailAdd, password, userProfile } = req.body; 
      const hashedP = await hash(password, 10);  
      await registerUserDb(firstName, lastName, userRole, emailAdd, hashedP, userProfile);
      res.status(201).send("User Added!");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error registering user");
    }
  };
  
  
const updateUser = async (req, res) => {
    try {
      let { firstName, lastName, userRole, emailAdd, passsword, userProfile } = req.body
      await updateUserDb(firstName, lastName, userRole, emailAdd, passsword, userProfile,req.params.id)
      res.status(200).send("User updated successfully")
    } catch (err) {
      console.error(err)
      res.status(500).send("Error updating user")
    }
  }


const loginUser = async (req, res) => {
    try {
      res.json({
        message: "Login Successful",
        token: req.body.token
      })
    } catch (err) {
      console.error(err)
      res.status(401).send("Invalid login credentials")
    }
  }
  

const deleteUser = async (req, res) => {
    try {
      await deleteUserDb(req.params.id)
      res.status(200).send("User deleted successfully")
    } catch (err) {
      console.error(err)
      res.status(500).send("Error deleting user")
    }
  }
   
  

export{getUsers, getUser,registerUser, updateUser, loginUser,deleteUser }
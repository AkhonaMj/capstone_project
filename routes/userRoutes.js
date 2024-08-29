import express from "express"
import {getUsers, getUser, registerUser, updateUser, loginUser, deleteUser} from "../controller/userController.js"
import {checkUser} from "../middleware/authenticate.js"


const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/register", registerUser)
router.patch("/update/:id", updateUser)
router.post("/login", checkUser, loginUser)
router.delete("/delete/:id", deleteUser)

export default router;
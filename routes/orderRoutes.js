import express from "express"
import { getOrders, getOrder, addOrder,  deleteOrder, updateOrder, getOrderByUserId} from "../controller/orderController.js"
import { verifyAToken } from "../middleware/authenticate.js";




const router = express.Router()

router.get("/", getOrders)
router.get("/:id", getOrder)
router.get("/getidOrderByUser/:", getOrderByUserId)
router.post("/addOrder", verifyAToken, addOrder)
router.delete("/delete/:id", deleteOrder)
router.patch("/update/:id", updateOrder)



export default router;
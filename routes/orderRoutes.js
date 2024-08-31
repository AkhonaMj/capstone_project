import express from "express"
import { getOrders, getOrder, addOrder,  deleteOrder, updateOrder, getOrderByUserId} from "../controller/orderController.js"



const router = express.Router()

router.get("/", getOrders)
router.get("/:id", getOrder)
router.get("/getOrderByUser/:id", getOrderByUserId)
router.post("/add", addOrder)
router.delete("/delete/:id", deleteOrder)
router.patch("/update/:id", updateOrder)

export default router;
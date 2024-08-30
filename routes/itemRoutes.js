import express from "express"
import {getItems, getItem, addItem, editItem, removeItem} from "../controller/itemController.js"


const router = express.Router()

router.get("/", getItems)
router.get("/:id",getItem )
router.post("/addItem", addItem)
router.put("/update/:id", editItem)
router.delete("/delete/:id",removeItem )

export default router;
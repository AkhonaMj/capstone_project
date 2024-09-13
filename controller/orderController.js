import {getOrdersDb, getOrderDb, addOrderDb, deleteOrderDb, updateOrderDb, getOrderByUserDb} from "../model/orderDb.js"

const getOrders = async (req, res) => {
    try {
      res.status(200).json(await getOrdersDb())
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving oders")
    }
  }

const getOrder = async (req, res) => {
    try {
      res.status(200).json(await getOrderDb(req.params.id))
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving order")
    }
  }
  
const getOrderByUserId = async (req, res) => {
    try {
        res.status(200).json(await getOrderByUserDb(req.params.id))
        
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving order")
        
    }
    
}

const addOrder = async (req, res) => {
  const { itemId, bookingDate, bookingTime, totalPrice } = req.body;
  const userId = req.userId; 
  
  if (!userId) {
    res.status(401).send("User is not authenticated");
    return;
  }

  try {
    await addOrderDb(userId, itemId, bookingDate, bookingTime, totalPrice);
    res.status(201).send("Order added successfully");
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).send("Failed to add order");
  }
};


const deleteOrder = async (req, res) => {
    try {
      const result = await deleteOrderDb(req.params.id);
      res.status(200).json(result);  
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting order"); 
    }
  };

  
const updateOrder = async (req, res) => {
    try {
        let {  userId, itemId, bookingDate, bookingTime, totalPrice } = req.body;
        await updateOrderDb( userId, itemId, bookingDate, bookingTime, totalPrice,  req.params.id);
        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating order" });
    }
}



export {getOrders, getOrder, addOrder,deleteOrder , updateOrder, getOrderByUserId}

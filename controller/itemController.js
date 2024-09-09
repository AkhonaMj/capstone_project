import {getItemsDb, getItemDb, addItemDb, editItemDb, removeItemDb} from "../model/itemDb.js"

const getItems = async (req, res) => {
    try {
      res.status(200).json(await getItemsDb())
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving items")
    }
  }

const getItem = async (req, res) => {
    try {
      res.status(200).json(await getItemDb(req.params.id))
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving item")
    }
  }
  
const addItem = async (req, res) => {
    try {
        const { itemName, amount, category, itemUrl } = req.body;
        await addItemDb(itemName, amount, category, itemUrl);
        if (!res.headersSent) {
            res.status(201).send('Item added successfully');
        }
    } catch (error) {
        console.error('Error adding item:', error);
        if (!res.headersSent) {
            res.status(500).send('Error adding item');
        }
    }
}

const editItem = async (req, res) => {
    try {
        let { itemName, amount, category, itemUrl } = req.body;
        await editItemDb(itemName, amount, category, itemUrl, req.params.id);
        res.status(200).json({ message: "Item updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating item" });
    }
}
const removeItem = async (req, res) => {
    try {
      const result = await removeItemDb(req.params.id);
      res.status(200).json(result);  
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting item"); 
    }
  };

  export {getItems, getItem, addItem, editItem, removeItem}
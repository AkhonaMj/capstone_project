import {pool} from "../config/config.js"

const getItemsDb = async () => {
    try {
        let [results] = await pool.query("SELECT * FROM items");
        return results;
    } catch (error) {
        console.error('Error getting items:', error);
        throw error; 
    } 
}

const getItemDb = async (itemId) => {
    try {
        let [results] = await pool.query("SELECT * FROM items WHERE itemId =?", [itemId]);
        return results;
    } catch (error) {
        console.error('Error getting item by ID:', error);
        throw error;
    }
}

const addItemDb = async (itemName, amount, category, itemUrl) => {
    try {
        await pool.query("INSERT INTO items(itemName, amount, category, itemUrl) VALUES(?,?,?,?)", [itemName, amount, category, itemUrl]);
    } catch (error) {
        console.error('Error adding item:', error);
        throw error;
    }
}

const editItemDb = async (itemName, amount, category, itemUrl, id) => {
    try {
        await pool.query("UPDATE items SET itemName=?, amount=?, category=?, itemUrl=? WHERE itemId=?", [itemName, amount, category, itemUrl, id]);
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
}

const removeItemDb = async (id) => {
    try {
        await pool.query("DELETE FROM items WHERE itemId=?", [id]);
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};




export {getItemsDb, getItemDb, addItemDb,editItemDb,removeItemDb}
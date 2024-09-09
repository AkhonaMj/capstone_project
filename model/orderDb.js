import {pool} from "../config/config.js"

const getOrdersDb = async () => {
    try {
        let [results] = await pool.query("SELECT * FROM orders");
        return results;
    } catch (error) {
        console.error('Error getting orders:', error);
        throw error; 
    } 
}

const  getOrderDb =  async (id) => {
    try {
        let [results] = await pool.query("SELECT * FROM orders WHERE orderId=?", [id])
        return results;
    }catch(error) {
        console.log("Error getting order", error)
        throw error;

    }

}

const getOrderByUserDb = async (id) => {
    try {
        let [results] = await pool.query("SELECT * FROM orders WHERE userId=?", [id])
        return results;
    } catch (error) {
        
    }
    
}


const addOrderDb = async (userId, itemId, bookingDate, bookingTime,  totalPrice) => {
    let time = bookingTime.hours+':'+bookingTime.minutes+'0'
    console.log(time);
    
    try {
        await pool.query("INSERT INTO orders(userId, itemId, bookingDate, bookingTime, totalPrice) VALUES(?,?,?,?,?)", [userId, itemId, bookingDate, time, totalPrice]);
    } catch (error) {
        console.error('Error adding order:', error);
        throw error;
    }

}

const deleteOrderDb = async (id) => {
    try {
        await pool.query("DELETE FROM orders WHERE orderId=?", [id]);
    } catch (error) {
        console.error('Error deleting order:', error);
        throw error;
    }
};


const updateOrderDb = async (userId, itemId, bookingDate, bookingTime, totalPrice, id) => {
    try {
        await pool.query("UPDATE  orders SET userId=?, itemId=?, bookingDate=?, bookingTime=?, totalPrice=? WHERE orderId=?", [userId, itemId, bookingDate, bookingTime, totalPrice, id]);
    } catch (error) {
        console.error('Error updating order:', error);
        throw error;
    }
}


export {getOrdersDb, getOrderDb, addOrderDb, deleteOrderDb,updateOrderDb, getOrderByUserDb}
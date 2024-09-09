import { pool } from "../config/config.js"

const getUsersDb = async () => {
    try {
        let [results] = await pool.query("SELECT * FROM users");
        return results;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw { status: 500, message: "Internal Server Error" };
    }
}

const getUserDb = async (id) => {
    try {
        let [results] = await pool.query("SELECT * FROM users WHERE userId=?", [id]);
        if (results.length === 0) {
            throw { status: 404, message: "User Not Found" };
        }
        return results;
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}

const registerUserDb = async (firstName, lastName, userRole, emailAdd, hashedP, userProfile) => {  
    // try {
        await pool.query("INSERT INTO users(firstName, lastName, userRole, emailAdd, password, userProfile) VALUES(?,?,?,?,?,?)", 
            [firstName, lastName, userRole, emailAdd, hashedP, userProfile]);
    // } catch (error) {
    //     console.error("Error registering user:", error);
    //     throw { status: 500, message: "Internal Server Error" };
    // }
}

const updateUserDb = async (firstName, lastName, userRole, emailAdd, passsword, userProfile, id) => {
    try {
        let [result] = await pool.query("UPDATE users SET firstName=?, lastName=?, userRole=?, emailAdd=?, password=?, userProfile=? WHERE userId=?", 
            [firstName, lastName, userRole, emailAdd, passsword, userProfile, id]);
        if (result.affectedRows === 0) {
            throw { status: 404, message: "User Not Found" };
        }
    } catch (error) {
        console.error("Error updating user:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}


const loginUserDb = async (emailAdd) => {
   try {
        let [[{password}]] = await pool.query("SELECT * FROM users WHERE emailAdd=?", [emailAdd]);
        if (password.length === 0) {
            throw { status: 404, message: "User Not Found" };
        }
        return password;
    }
     catch (error) {
        console.error("Error retrieving user by Email:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}

const deleteUserDb = async (id) => {
    try {
        let [result] = await pool.query("DELETE FROM users WHERE userId=?", [id]);
        if (result.affectedRows === 0) {
            throw { status: 404, message: "User Not Found" };
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error.status ? error : { status: 500, message: "Internal Server Error" };
    }
}





export {getUsersDb, getUserDb, registerUserDb, updateUserDb, loginUserDb, deleteUserDb}
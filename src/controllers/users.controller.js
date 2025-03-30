import sql from 'mssql'
import { configSQL } from '../config/database.js'
import { ErrorHandle } from '../utils/error.handle.js'

export const getUsers = async (req, res) => {
    try {
        await sql.connect(configSQL)
        const result = await sql.query(`select * from Users`)
        res.json(result.recordset)
    } catch (error) {
        ErrorHandle(res, "ERROR_GET_USERS", error)
    }
}

export const postUsers = async (req, res) => {
    try {
        const { email, firstName, lastName } = req.body
        await sql.connect(configSQL)
        await sql.query(`INSERT INTO Users (user_email, first_name, last_name) VALUES ('${email}', '${firstName}', '${lastName}');`)
        res.json({
            message: "Usuario creado"
        })
    } catch (error) {
        ErrorHandle(res, "ERROR_POST_USERS", error)
    }
}

export const putUsers = async (req, res) => {
    res.json(true)
}

export const deleteUsers = async (req, res) => {
    try {
        const { id } = req.body
        await sql.connect(configSQL)
        await sql.query(`DELETE FROM Users WHERE user_id = ${id};`)
        res.json({
            message: `Usuario ${id} eliminado`
        })
    } catch (error) {
        ErrorHandle(res, "ERROR_DELETE_USERS", error)
    }
}
export const getAnswer = async (req, res) => {
    try {
        await sql.connect(configSQL)
        const result = await sql.query(`SELECT * from Answers`)
        res.json(result.recordset)
    } catch (error) {
        ErrorHandle(res, "ERROR_GET_ANSWERS", error)
    }
}

export const putAnswer = async (req, res) => {
    try {
        const { userId, answerId } = req.body

        await sql.connect(configSQL)
        const result = await sql.query(`UPDATE answers SET user_id = '${userId}' WHERE id = ${answerId};`)
        res.json(result.recordset)
    } catch (error) {
        ErrorHandle(res, "ERROR_GET_ANSWERS", error)
    }
}

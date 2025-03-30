export const getQuestions = async (req, res) => {
    try {
        await sql.connect(configSQL)
        const result = await sql.query(`SELECT * from Questions`)
        res.json(result.recordset)
    } catch (error) {
        ErrorHandle(res, "ERROR_GET_QUESTIONS", error)
    }
}
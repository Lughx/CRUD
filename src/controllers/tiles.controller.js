export const getTile = async (req, res) => {
    try {
            await sql.connect(configSQL)
            const result = await sql.query(`select * from Tiles`)
            res.json(result.recordset)
        } catch (error) {
            ErrorHandle(res, "ERROR_GET_TILES", error)
        }
}
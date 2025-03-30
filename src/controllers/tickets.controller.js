export const getTickets = async (req, res) => {
    try {
        await sql.connect(configSQL)
        const result = await sql.query(`SELECT * from Tickets`)
        res.json(result.recordset)
    } catch (error) {
        ErrorHandle(res, "ERROR_GET_TICKETS", error)
    }
}

export const postTickets = async (req, res) => {
    try {
        const { idUser } = req.body
        await sql.connect(configSQL)
        await sql.query(`INSERT INTO Tickets (user_id, expires_at) VALUES (${idUser}, DATEADD(DAY, 7, GETDATE()));`)
        res.json({
            message: "Ticket creado"
        })
    } catch (error) {
        ErrorHandle(res, "ERROR_POST_TICKET", error)
    }
}

export const deleteTickets = async (req, res) => {
    try {
        const { id } = req.body
        await sql.connect(configSQL)
        await sql.query(`DELETE FROM Tickets WHERE ticket_id = ${id};`)
        res.json({
            message: `Ticket ${id} eliminado`
        })
    } catch (error) {
        ErrorHandle(res, "ERROR_DELETE_TICKETS", error)
    }
}
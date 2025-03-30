import { Router } from "express"
import { deleteTickets, getTickets, postTickets } from "../controllers/tickets.controller.js"

const router = Router()

router.post("/", postTickets)
router.get("/", getTickets)
router.delete("/", deleteTickets)

export default router
import { Router } from "express"
import { deleteUsers, getUsers, postUsers, putUsers } from "../controllers/users.controller.js"

const router = Router()

router.post("/", postUsers)
router.get("/", getUsers)
router.put("/", putUsers)
router.delete("/", deleteUsers)

export default router
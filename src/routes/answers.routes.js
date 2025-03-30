import { Router } from "express"
import { getAnswer, putAnswer } from "../controllers/answers.controller.js"

const router = Router()

router.post("/", getAnswer)
router.put("/", putAnswer)

export default router
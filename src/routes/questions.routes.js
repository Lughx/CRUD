import { Router } from "express"
import { getQuestions } from "../controllers/questions.controller.js"

const router = Router()

router.get("/", getQuestions)

export default router
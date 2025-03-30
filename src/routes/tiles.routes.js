import { Router } from "express"
import { getTile } from "../controllers/tiles.controller.js"

const router = Router()

router.get("/", getTile)

export default router
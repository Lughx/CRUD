import express from "express"
import morgan from "morgan"
//import mysqlStore from "express-mysql-session"

import answersRoutes from "./routes/answers.routes.js"
import questionsRoutes from "./routes/questions.routes.js"
import ticketsRoutes from "./routes/tickets.controller.js"
import tilesRoutes from "./routes/tiles.routes.js"
import usersRoutes from "./routes/users.routes.js"

//import { pool } from "./config/database.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// routes
app.use("/api/answers", answersRoutes)
app.use("/api/questions", questionsRoutes)
app.use("/api/tickets", ticketsRoutes)
app.use("/api/tiles", tilesRoutes)
app.use("/api/users", usersRoutes)


app.listen(8080, () => console.log("Iniciado"))
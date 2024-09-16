import express from "express"
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dotenv from "dotenv"
import Indexrouter from "./routes/index.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, "../.env");
dotenv.config({ path: envPath });

const port = process.env.PORT

const app = express()
app.use(express.json())

app.use('/', Indexrouter)
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})
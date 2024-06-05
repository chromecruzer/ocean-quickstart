export default eventHandler((event) => {
  return "Start by editing <code>server/routes/index.ts</code>.";
});

import express, {Request, Response} from 'express'
import cors from 'cors'
import http from 'http'
import path from 'path'
import chalk from 'chalk'

const PORT: string = process.env.PROD_PORT || '8000'
const app = express()
app.use(cors())
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


// ROUTES 
app.get('/api',(req: Request,res: Response)=>{
  console.log(chalk.greenBright(`Some one hit the G-spot`))
  res.json({msg: `this is data`})
})

const server = http.createServer(app)
server.listen(PORT,()=>{
  console.log(chalk.bgGreen(`server is listening @ http://localhost:${PORT}`))
})

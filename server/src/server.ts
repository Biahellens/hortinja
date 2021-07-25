import express from 'express'
import { Request, Response } from 'express'
import { createServer } from 'http'

const app = express()

// seta configuracoes
app.use(express.json())

// rotas
app.get('/', (request: Request, response: Response) => {
  response.json('OK')
})

const http = createServer(app)

export { http }

import express from 'express'
import { Request, Response } from 'express'
import { createServer } from 'http'
import cors from 'cors'

// iniciando configuracoes
import './database'
import { routes } from './routes'

const app = express()

// seta configuracoes
app.use(express.json())
app.use(cors({ origin: true }))
app.use(routes)

// rotas
app.get('/', (request: Request, response: Response) => {
  response.json('OK')
})

const http = createServer(app)

export { http }

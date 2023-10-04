import express from 'express'
import Routes from './routes'

const app = express()
app.use(express.json())
app.use(Routes)

app.listen('4321', () => console.log('Service-B running on port 4321'))
const express = require('express')
const QuestionController = require('./controllers/question-controller')
const RoomController = require('./controllers/room-controller')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))
route.get('/room/:room', RoomController.open)

route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route
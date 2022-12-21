const express = require('express')
const noteController = require('../controller/noteController')
const router = express.Router();
const validateRequest = require('../middleware/validateRequest')
const noteFormRequest = require('../request/noteFormRequest')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/notes',noteController.getAllNotes)
router.post('/notes',validateRequest(noteFormRequest), noteController.saveNote)
router.put('/notes/:id',validateRequest(noteFormRequest), noteController.updateNote)
router.delete('/notes/:id', noteController.deleteNote)


module.exports = router


const express = require('express')
const router = express.Router();
const { studentAll, studentSpecific, studentAdd, studentDelete, studentUpdate} = require('../controller/studentDetailLogic')

router.get('/',studentAll);
router.get('/:id',studentSpecific)
router.post('/add', studentAdd)
router.delete('/:id', studentDelete)
router.put('/:id', studentUpdate)

module.exports = router; 
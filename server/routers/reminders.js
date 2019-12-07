const express = require('express')
const router = new express.Router()
const db = require('../models')
const Reminder = require('../models/reminder')

// Get all reminders
router.get('/api/reminders', (req, res) => {
    return db.Reminder.findAll()
    .then((reminders) => res.send(reminders))
    .catch((err) => {
        return res.status(500).send()
    })
})

// Create a reminder
router.post('/api/reminders', (req, res) => {
    const {text, date,location, list} = req.body
    return db.Reminder.create({text, date, location, list})
    .then((reminder) => res.status(201).send(reminder))
    .catch((err) => {
        res.status(400).send(err)
    })
})

// Get a reminder by id
router.get('/api/reminders/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    return db.Reminder.findByPk(id)
    .then ((reminder) => res.send(reminder))
    .catch((err) => {
        res.status(500).send()
    })
})
// Update a reminder
router.patch('/api/reminders/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    return db.Reminder.findByPk(id)
    .then ((reminder) => {
        const {text, location, date, list} = req.body
        return reminder.update({text, location, date, list})
        .then(()=> res.send(reminder))
        .catch((err) => {
            res.status(400).send(err)
        })
    })
})
router.delete('/api/reminders/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    return db.Reminder.findByPk(id)
    .then ((reminder)=> reminder.destroy())
    .then(() => res.send(id))
    .catch((err) => {
        res.status(400).send(err)
    })
})
module.exports = router
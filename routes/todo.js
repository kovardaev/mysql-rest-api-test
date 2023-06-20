const {Router} = require('express');
const Todo = require('../models/todo');

const router = Router();

// Get tasks list
router.get('/', (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

// Create new task
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        });
            
        res.status(201).json({todo});
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

// Edit task
router.put('/:id', (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

// Delete task
router.delete('/:id', (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

module.exports = router;

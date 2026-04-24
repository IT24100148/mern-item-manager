const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET /api/items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// POST /api/items
router.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    // TODO: Add price field here manually
    const newItem = new Item({ name, description, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create item' });
  }
});

// PUT /api/items/:id
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    // TODO: Add price field here manually
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true, runValidators: true }
    );
    if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update item' });
  }
});

// DELETE /api/items/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

module.exports = router;

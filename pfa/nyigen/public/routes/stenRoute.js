const express = require('express');
const router = express.Router();
const Stone = require('../models/stenar');

// gets all stones
router.get('/', async (req, res) => {
  try {
    const stones = await Stone.find();
    res.json(stones);
  } catch (err) {
    res.json({ message: err });
  }
});

// get stone by id
router.get('/:stoneID', async (req, res) => {
  console.log(req.params.stoneId);
  try {
    const stone = await Stone.findById(req.params.stoneId);
    res.send(stone);
  } catch (err) {
    res.json({ message: err });
  }
});

// create object and send to database
router.post('/', async (req, res) => {
  //console.log(req.body);
  const stone = new Stone({
    imgPath: req.body.imgPath,
    xposition: req.body.xposition,
    yposition: req.body.yposition
  });
  try {
    const savedStone = await stone.save();
    res.json(savedStone);
  } catch (err) {
    res.json({ message: err });
  }
});

// update posts
router.patch('/:stoneId', async (req, res) => {
  try {
    const updatedStone = await Stone.updateOne({_id: req.params.stoneId },
      { $set: { xposition: req.body.xposition,
      yposition: req.body.yposition }
    });
  } catch (err) {
    res.json({ message: err });
  }
})

// delete posts
router.delete('/:stoneId', async (req,res) => {
  try {
    const removedStone = await Stone.remove({_id: req.params.stoneId});
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');
const User = require('../models/user');

router.get('/random', (req, res) => {
  Beer.randomBeer((err, beer) => {
    if (err) res.status(400).send(err)
    res.send(beer)
  })
});

router.put('/:userId/addReview', (req, res) => {
  Beer.create(req.body, (err, review) => {
    User.findById(req.params.userId, (err, user) => {
      if (err || !user) {
        return res.status(400).send(err || 'User not found.');
      }
      user.beer_reviews.push(review._id)
      user.save(err => {
        res.send()
      });
    });
  });
})



router.route('/')
  .get((req, res) => {
    Beer.find({})
      .then(beers => res.send(beers))
      .catch(err => res.status(400).send(err))
  })

router.route('/:id')
  .get((req, res) => {
    Beer.findOne(req.params.id)
      .then(users => res.send(users))
      .catch(err => res.status(400).send(err))
    })
  .delete((req, res) => {
    Beer.findByIdAndRemove(req.params.id)
      .then(() => res.send())
      .catch(err => res.status(400).send(err))
    })
  .put((req, res) => {
    Beer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(() => res.send())
      .catch(err => res.status(400).send(err))
    })




module.exports = router;

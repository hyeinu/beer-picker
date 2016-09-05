const mongoose = require('mongoose');
const axios = require('axios')

const beerSchema = new mongoose.Schema({
  db_id:{type:String, required:true},
  name:{type:String, required:true},
  comment:{type:String},
  rating:{type:Number, required: true}
});

beerSchema.statics.randomBeer = function(cb){
  axios.get('http://api.brewerydb.com/v2/beer/random?key=cc8501083c11350001313b07963451d7')
    .then(res => {
      cb(null, res.data)
    })
    .catch(err => {
      cb(err)
    })
}

const beer = mongoose.model('BeerReview', beerSchema);
module.exports = beer;

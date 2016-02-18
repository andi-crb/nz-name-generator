var request = require('superagent')
var exports = module.exports = {};
var Promise = require('promise');

exports.getData = function(key) {
  return new Promise(function(resolve, reject){  
  request
  .get("http://localhost:3000/namebykey/" + key)
  // .query({ query: 'Mary' })
  .end(function(err, res){
    // callback(res.body)
    // console.log(res.body.nameObjects[0][key].name)
    console.log(res.body)
    resolve(res.body)
  })
})
}

// getData("m201587")
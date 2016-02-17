var request = require('superagent')
var exports = module.exports = {};

getData = function(key) {
  request
  .get("http://localhost:3000/namebykey/" + key)
  // .query({ query: 'Mary' })
  .end(function(err, res){
    // callback(res)
    // console.log(res.body.nameObjects[0][key].name)
    console.log(res)
  })
}

getData("m201587")
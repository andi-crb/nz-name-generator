
var getData = require("./ajax.js").getData
var exports = module.exports = {};
var $ = require ("jquery")
// var Promise = require('promise');

function handleError (err) {
  console.log('Oh no! A error :', err)
}

getName = function(year, gender) {
  return new Promise(function(resolve, reject){
    console.log(year, gender)
    var genderMarker = "f"
    if (gender==="male"){
      genderMarker = "m"
    }
    var num = [Math.floor(Math.random()*100)]
    var key = genderMarker + year + num;
    // console.log(key)
    resolve(key)
    // console.log("name",finalName)
  })  
} 

printName = function(name) {  
  return new Promise(function(resolve, reject){
    // console.log(name)
    document.getElementById("suggestion").innerHTML = name;
    resolve(name)
  })
}

completeNameReq = function(year, gender){
  console.log("called function")
  getName(year, gender)
  .then(function(data){
    getData(data)
    .then(function(data){
      printName(data)
      console.log(3, data)
    })
    .catch(handleError)
  })
  .catch(handleError)
// })
}

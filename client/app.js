
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
    resolve(key)
    // console.log("name",finalName)
  })  
} 

printName = function(name) {  
  return new Promise(function(resolve, reject){
    document.getElementById("suggestion").innerHTML = name;
    resolve(name)
  })
}

function completeNameReq(year, gender){
  getName(year, gender)
  .then(function(data){
    getData(data)
    .then(function(data){
      printName(data)
    })
    .catch(handleError)
  })
  .catch(handleError)
// })
}


completeNameReq("2015", "female")
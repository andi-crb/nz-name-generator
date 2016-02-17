
var getData = require("./ajax.js").getData

function getKey(year, gender) {
  console.log("running")
  var genderMarker = "f"
  if (gender==="male"){
    genderMarker = "m"
  }
  var num = [Math.floor(Math.random()*100)]
  console.log(num)
  var key = genderMarker + year + num;
  console.log(key)
  getData(key)
  // document.getElementById("suggestion").innerHTML = item;
} 

getKey("1962", "female")
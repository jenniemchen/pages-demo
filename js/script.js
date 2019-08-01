function processRequest() {
    var url  = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=SwzFnNSFAy7gvLvYaKdWV5IQbEEHVJ9aVoYXJ0yw";
    var xhr  = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
    	var info = JSON.parse(xhr.responseText);
    	if (xhr.readyState == 4 && xhr.status == "200") {
        console.log(info)
    	}
    }
    xhr.send();
}

function changeColor() {
  //declare variables for r,g,b values
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  console.log(r, g, b);
  //change the background color
  document.body.style.background = 'rgb(' +r+ ', ' +g+ ', ' +b+ ')';
}

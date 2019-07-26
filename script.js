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

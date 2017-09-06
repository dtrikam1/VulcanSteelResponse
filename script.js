var personHardHatTimestamps = [];
var personHighVisibilityVestTimestamps = [];
var personHardHatHighVisibilityVestTimestamps = [];

function myFunction() {

  var count;

  var table = document.getElementById("myTable");

  for(count = 0; count < personHardHatTimestamps.length; count++){
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = personHardHatTimestamps[count];
    cell2.innerHTML = personHighVisibilityVestTimestamps[count];
    cell3.innerHTML = personHardHatHighVisibilityVestTimestamps[count];
  }
}

function result(arr) {
  var count;
  for (count = 0; count < arr.length; count++) {
    // Change attribute names here
    personHardHatTimestamps.push(arr[count].userId)
    personHighVisibilityVestTimestamps.push(arr[count].title)
    personHardHatHighVisibilityVestTimestamps.push(arr[count].body)
  }

  myFunction();
}

function myRequest(){

  var xmlhttp = new XMLHttpRequest();
  // Endpoint URL
  var url = "https://jsonplaceholder.typicode.com/posts";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      result(obj);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

}

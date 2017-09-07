var timeStamps = [];
var personHardHatDetected = [];
var personHighVisibilityVestDetected = [];
var personHardHatHighVisibilityVestDetected = [];

function myFunction() {

  var count;

  var table = document.getElementById("myTable");

  for(count = 0; count < timeStamps.length; count++){
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    //show all time stamps
    cell1.innerHTML = timeStamps[count];

    if (personHardHatHighVisibilityVestDetected[count] == "X") {
      cell4.innerHTML = "&#9989";
    }

    if (personHardHatDetected[count] == "X") {
      cell2.innerHTML = "&#10060";
    }

    if (personHighVisibilityVestDetected == "X") {
      cell3.innerHTML = "&#10060";
    }
  }
}

function result(arr) {

  var count;

  for (count = 0; count < arr.length; count++) {
    // Change attribute names here
    timeStamps.push(arr[count].Timestamp)
    personHardHatDetected.push(arr[count].Timestamp)
    personHighVisibilityVestDetected.push(arr[count].title)
    personHardHatHighVisibilityVestDetected.push(arr[count].person_hard_hat_high_vis_vest)
  }
  createLink(arr[arr.length - 1].Video)

  myFunction();
}

function createLink(videoURL){
  var str = "Click here to download output video";
  var result = str.link(videoURL);
  document.getElementById("videoDownloadLink").innerHTML = result;
}

function myRequest(){

  // var xmlhttp = new XMLHttpRequest();
  // // Endpoint URL
  // var url = "https://yolostorage.blob.core.windows.net/report/report.json";
  //
  // xmlhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     var obj = JSON.parse(this.responseText);
  //     result(obj);
  //   }
  // };
  // xmlhttp.open("GET", url, true);
  // xmlhttp.send();

  var jsonData = JSON.stringify(returnJSONResponse());

  result(JSON.parse(jsonData));
}

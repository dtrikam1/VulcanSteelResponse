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
  // var count;
  // for (count = 0; count < arr.length; count++) {
  //   // Change attribute names here
  //   personHardHatTimestamps.push(arr[count].Timestamp)
  //   personHighVisibilityVestTimestamps.push(arr[count].title)
  //   personHardHatHighVisibilityVestTimestamps.push(arr[count].person_hard_hat_high_vis_vest)
  // }
  // createLink(arr[arr.length - 1].video)

  console.log(arr);

  myFunction();
}

function createLink(videoURL){
  var str = "Click here to download output video";
  var result = str.link(videoURL);
  document.getElementById("videoDownloadLink").innerHTML = result;
}

function myRequest(){

  var xmlhttp = new XMLHttpRequest();
  // Endpoint URL
  var url = "https://yolostorage.blob.core.windows.net/report/report.json";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      result(obj);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();


  // var uri = "https://yolostorage.blob.core.windows.net/report/report.json"
  //       $.ajax({
  //           url: uri,
  //           beforeSend: function (request) {
  //               request.setRequestHeader("Authorization", "Negotiate");
  //           },
  //           async: true,
  //           success: function (data) {
  //               alert(JSON.stringify(data));
  //           },
  //           error: function (xhr, textStatus, errorMessage) {
  //               alert(errorMessage);
  //           }
  //       });
}

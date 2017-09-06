function myFunction() {

  var count;

  var personHardHatTimestamps = ['1985-09-25 17:45:30.005', '1985-09-25 17:45:30.005', '1985-09-25 17:45:30.005'];
  var personHighVisibilityVestTimestamps = ['1985-09-25 17:45:30.005', '1985-09-25 17:45:30.005', '1985-09-25 17:45:30.005'];
  var personHardHatHighVisibilityVestTimestamps = ['1985-09-25 17:45:30.005', '1985-09-25 17:45:30.005', '1985-09-25 17:45:30.005'];

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

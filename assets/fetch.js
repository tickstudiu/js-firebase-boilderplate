// Position that would like the information to be displayed
const table = $('#table');

// Is a variable that is set to the root of the server
const dbRoot = firebase.database().ref();

// Create a reference variable to the location on the server named logDHT.
// And let it sort data from 15 transection from the bottom of the data.
const dbRefLog = dbRoot.child('logDHT').limitToLast(15);

// Declare variables to send to other files.
var graphData;


dbRefLog.on('value', function(res){

  // The old information will be removed before adding new information.
  table.empty();

  // Looping values to pull out variables.
  res.forEach(function(data){

    // Determine the value from the pull.
    let key = data.key;
    let data1 = data.val().data1;
    let data2 = data.val().data2;
    let data3 = data.val().data3;
    let data1 = data.val().data4;

    // Enter the value in the display table. And store the value into the variable so that the graph is displayed again.
    table.append("<tr><th scope='row'>" + key + "</th><td>" + data1 + "</td><td>" + data2 + "</td><td>" + data3 + "</td><td>" + data4 + "</td></tr>")
    graphData = temperature;
  });
});

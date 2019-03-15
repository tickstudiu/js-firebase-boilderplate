// Position that would like the information to be displayed
const table = $('#table');
const input = $("select");

// Get date today
function getToday(){
  const today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '-' + mm + '-' + yyyy;
}

// Is a variable that is set to the root of the server
const dbRoot = firebase.database().ref();

input.change(function(){
  // Create a reference variable to the location on the server named logDHT.
  // And let it sort data from 15 transection from the bottom of the data.
  const dbRefLog = dbRoot.child(input.val()).limitToLast(15);

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
      let data4 = data.val().data4;

      // Enter the value in the display table. And store the value into the variable so that the graph is displayed again.
      table.append("<tr><th scope='row'>" + key + "</th><td>" + data1 + "</td><td>" + data2 + "</td><td>" + data3 + "</td><td>" + data4 + "</td></tr>")
      graphData = data1;
    });
  });
});

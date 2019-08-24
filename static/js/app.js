// from data.js
var tableData = data;

console.log(data);

var tbody = d3.select("tbody");

// generate a table for each UFO report in data.js
tableData.forEach((UFOReport) => {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

//select the button 
var button = d3.select("#filter-btn");

//establish function when the button is clicked

// general purpose filtering (incorporates part 1 of the homework)
button.on("click", function() {
  
  var inputs = ["#datetime", "#city", "#state", "#country", "#shape"];

    mydata = data;
    inputs.forEach(function(x){

        var selected_value = d3.select(x).property("value");

        // only filter if there's a selected_value
        if (selected_value.length != 0) {

          mydata = mydata.filter(d => {
            // carve off the '#'
            y = x.split("#");
            z = y[1];
            return (d[z] === selected_value);
          });
        }
    });
  
    // create/display rows if there's filtered data
    if (mydata.length != 0) {
      tbody.text("")
      mydata.forEach((filtered) => {
        var row = tbody.append("tr");
        Object.entries(filtered).forEach(([key, value]) => {
            var cell = row.append("td")
            cell.text(value)
        }); 
      });
    }
});

 
  // Code from part 1 of the homework
 
  // var UserDateInput = d3.select("#datetime");

    // var RetrievedInput = UserDateInput.property("value");

    // console.log(RetrievedInput);
    
    
    // // Do the filtering based on the user input
    // var filteredData = tableData.filter(Data => Data.datetime === RetrievedInput)

    
    // console.log(filteredData);
    

    // tbody.text("")
    // filteredData.forEach((filtered) => {
    //     var row = tbody.append("tr");
    //     Object.entries(filtered).forEach(([key, value]) => {
    //         var cell = row.append("td")
    //         cell.text(value)
    //     }); 
    // });
// });



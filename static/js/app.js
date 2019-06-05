// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");
submit.on("click",function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // filters the data so that only the date/time values that are the same 
    // as the inputValue are left in the array
    var filteredData = tableData.filter(date => date.datetime == inputValue);

    console.log(filteredData);

    // Selects the table from the html file
    var tbody = d3.select("tbody");

    // Clears the previous table data
    document.getElementById("table-data").innerHTML = "";

    //Creates an entry in the tbody for every entry in the filtered array
    filteredData.forEach((dateandtime) => {
        var row = tbody.append("tr");
        Object.entries(dateandtime).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        })});
  
    

});
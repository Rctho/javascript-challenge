//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
const tableData = data;

// get table references where table will be inserted
const tableBody = d3.select("tbody");
// <table id="ufo-table" class="table table-striped">

function buildTable(data) {
  // When the page loads, it needs to display the table
  // But if the table reloads then you may need to ensure the 
  // previous output is cleared/overwritten from scratch 
  tableBody.html("");
  // Think of the class activities for generating tables
  data.forEach((dataRow) => {
    var row = tableBody.append("tr");
    Object.values(dataRow).forEach((d) =>{
      row.append("td").text(d);
    });
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");

  // grab all the table data and set to filteredData
  let filteredData = tableData;
  // Check to see if a date was entered and filter the
  // data using that date.
  if(date) {
    filteredData = filteredData.filter(x => x.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button
var button = d3.select("#filter-btn");
button.on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

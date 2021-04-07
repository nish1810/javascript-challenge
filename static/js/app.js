var tableData = data;
//Select the table 
var tbody = d3.select("tbody");
//Populate the table
tableData.forEach(function(ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});




var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);


    filteredData.forEach(function(selections) {
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
});
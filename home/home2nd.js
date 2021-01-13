google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;

update1();

function update1(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/data/nepal",true);
    request.onload = function(){
    var result = JSON.parse(this.response);

        

        
        p1 = result.province.active[5].count;
        p2 = result.province.active[6].count;
        p3 = result.province.active[2].count;
        p4 = result.province.active[0].count;
        p5 = result.province.active[1].count;
        p6 = result.province.active[3].count;
        p7 = result.province.active[4].count;

        
    }
    request.send();
}





function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Provinve', 'Active Cases'],
    ['Province 1', 3],
    ['Province 2', 6],
    ['Province 3', 8],
    ['Province 4', 9],
    ['Province 5', 10],
    ['Province 6', 3],
    ['Province 7', 7]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Active Cases by Province:', 'width':710, 'height':900, backgroundColor: '#e1ecf9'};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
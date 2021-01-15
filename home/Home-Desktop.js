google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);



function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
  
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

 /*table */

 update1();

function update1(){
     var request = new XMLHttpRequest();
     request.open('GET', "https://nepalcorona.info/api/v1/data/nepal",true);
     request.onload = function(){
     var result = JSON.parse(this.response);
 
         var i;
 
         
         var pos = document.getElementsByClassName("positives");
         var positiveCases;
         for(i=0; i<pos.length; i++){
             positiveCases= result.tested_positive;
             pos[i].textContent = positiveCases;
         }
 
         
         var rec = document.getElementsByClassName("recoveries");
         var recoveredCases;
         for(i=0; i<rec.length; i++){
             recoveredCases= result.recovered;
             rec[i].textContent = recoveredCases;
         }
 
         var dec = document.getElementsByClassName("deceased");
         var deadCases;
         for(i=0; i<dec.length; i++){
             deadCases= result.deaths;
             dec[i].textContent = deadCases;
         }
    }
     request.send();
}

/* Pie Chart */

var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;

update2();

function update2(){
  var request = new XMLHttpRequest();
    request.open('GET', "https://data.nepalcorona.info/api/v1/covid/summary",true);
    request.onload = function(){
    var result = JSON.parse(this.response);

        

        
        p1 = result.province.active[5].count;
        p2 = result.province.active[6].count;
        p3 = result.province.active[2].count;
        p4 = result.province.active[0].count;
        p5 = result.province.active[1].count;
        p6 = result.province.active[3].count;
        p7 = result.province.active[4].count;

        drawChart(p1, p2, p3, p4, p5, p6, p7);

        
    }
    request.send();
}



function drawChart(p1, p2, p3, p4, p5, p6, p7) {
  var data = google.visualization.arrayToDataTable([
  ['Provinve', 'Active Cases'],
  ['Province 1', p1],
  ['Province 2', p2],
  ['Province 3', p3],
  ['Province 4', p4],
  ['Province 5', p5],
  ['Province 6', p6],
  ['Province 7', p7]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Active Cases by Province:', 'width':680, 'height':900, backgroundColor: '#e1ecf9'};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}


/* SIT Daily */
function click1(){
  var request = new XMLHttpRequest();
  request.open('GET', "https://nepalcorona.info/api/v1/sitreports?type=MOHP",true);
  request.onload = function(){
  var result = JSON.parse(this.response);
  var mohpSIT= result.data[0].url;
  window.location.assign(mohpSIT);
  }
  request.send();
}

function click2(){
  var request = new XMLHttpRequest();
  request.open('GET', "https://nepalcorona.info/api/v1/sitreports?type=WHO",true);
  request.onload = function(){
  var result = JSON.parse(this.response);
  var whoSIT= result.data[0].url;
  window.location.assign(whoSIT);
  }
  request.send();
}

const button= document.getElementById("searchButton");
button.addEventListener("click", update);

function update(){
  const userInput1 = document.getElementById('province-search'); 
  const provNumber = userInput1.value;

  var request = new XMLHttpRequest();
  request.open('GET', "https://nepalcorona.info/api/v1/hospitals", true);
  request.onload = function(){
  var result = JSON.parse(this.response);

  var i = 0;
  var j = 0;

 



  var hos = document.getElementsByClassName("hospital-name");
  var con = document.getElementsByClassName("contact-number");
  var conNumber;
  var hospitalName;
  while (j < 10){
    hospitalName = result.data[i].name;
    conNumber = result.data[i].phone;
    if(result.data[i].state == provNumber){
      hos[j].textContent = hospitalName;
      con[j].textContent = conNumber;
      i++;
      j++;

    }else{
      i++;
    }
  }
}
request.send();
}

 
 
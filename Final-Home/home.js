
/*nav bar */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
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



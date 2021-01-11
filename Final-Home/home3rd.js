update2();

function update2(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/sitreports?type=MOHP",true);
    request.onload = function(){
    var result = JSON.parse(this.response);
    var i;

        
    var mohp = document.getElementsByClassName("mohp-link");
    var mohpSIT;
    for(i=0; i<mohp.length; i++){
        mohpSIT= result.data[i].url;
        mohp[i].href = mohpSIT;
    }
}
request.send;
}
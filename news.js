update1();

function update1(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/news",true);
    request.onload = function(){
    var result = JSON.parse(this.response);

        var i;

        //update news title for each section of the news
        var nts = document.getElementsByClassName("news-title");
        var newsTitle;
        for(i=0; i<nts.length; i++){
            newsTitle= result.data[i].title;
            nts[i].textContent = newsTitle;
        }

        //update news source for each section of the news
        var nsources = document.getElementsByClassName("source");
        var newsSource;
        for(i=0; i<nsources.length; i++){
            newsSource= result.data[i].source;
            nsources[i].textContent = newsSource;
        }

        //update summary of news for each section of the news
        var nsummaries = document.getElementsByClassName("summary");
        var newsSummary;
        for(i=0; i<nsummaries.length; i++){
            newsSummary= result.data[i].summary;
            nsummaries[i].textContent = newsSummary;
        }

        //update news link for each section of the news
        var nlinks = document.getElementsByClassName("news-link");
        var newsLink;
        for(i=0; i<nlinks.length; i++){
            newsLink = result.data[i].url;
            nlinks[i].href = newsLink;
        }

        //update thumbnail image for each section of the news
        var nImages = document.getElementsByClassName("news-image");
        for(i=0; i<nImages.length; i++){
            var newsImage = result.data[i].image_url;
            displayImage(i, newsImage);
        }
    }

    request.send();
}

function displayImage(index, url){
        var nImg = "news-image"+index;
        var img = document.getElementById(nImg);
        img.src = url;
}

function myFunction(num){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/news",true);
    request.onload = function(){
        var result = JSON.parse(this.response);

        var newsUrl = result.data[num].url;
        window.location.href = newsUrl;
    }
    request.send();
}
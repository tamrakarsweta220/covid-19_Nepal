updatePodcasts();

function updatePodcasts(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/podcasts",true);
    request.onload = function(){
    var result = JSON.parse(this.response);

        var i;

        //update title for each podcast
        var pts = document.getElementsByClassName("podcasts-title");
        var podcastsTitle;
        for(i=0; i<pts.length; i++){
            podcastsTitle= result.data[i].title;
            pts[i].textContent = podcastsTitle;
        }

        //update source for each podcast
        var psources = document.getElementsByClassName("podcasts-source");
        var podcastsSource;
        for(i=0; i<psources.length; i++){
            podcastsSource= result.data[i].source;
            psources[i].textContent = podcastsSource;
        }

        //update summary for each podcast
        var psummaries = document.getElementsByClassName("podcasts-summary");
        var podcastsSummary;
        for(i=0; i<psummaries.length; i++){
            podcastsSummary= result.data[i].summary;
            psummaries[i].textContent = podcastsSummary;
        }

        //update audio link for each podcast
        var plinks = document.getElementsByClassName("podcasts-link");
        var podcastsLink;
        for(i=0; i<plinks.length; i++){
            podcastsLink = result.data[i].audio_url;
            plinks[i].href = podcastsLink;
            plinks[i].textContent = podcastsLink;
        }

        //update thumbnail image for each podcast
        var pImages = document.getElementsByClassName("podcasts-image");
        for(i=0; i<pImages.length; i++){
            var podcastsImage = result.data[i].image_url;
            displayImage(i, podcastsImage);
        }
    }

    request.send();
}

function displayImage(index, url){
        var nImg = "podcasts-image"+index;
        var img = document.getElementById(nImg);
        img.src = url;
}

function myFunction(num){
    var request2 = new XMLHttpRequest();
    request2.open('GET', "https://nepalcorona.info/api/v1/podcasts",true);
    request2.onload = function(){
        var result2 = JSON.parse(this.response);

        var podcastsUrl = result2.data[num].audio_url;
        window.location.href = podcastsUrl;
    }
    request2.send();
}
repeat(40);
updateFAQsDefault();

const button1= document.getElementById("EngButton");
button1.addEventListener("click", updateFAQsEng);

const button2= document.getElementById("NepButton");
button2.addEventListener("click", updateFAQsNep);


function repeat(n){
    for(i=1; i<n;i++){
        document.getElementById("repeater").innerHTML = 
          document.getElementById("repeater").innerHTML + "<p class='question'/> <p class='answer'/> <hr>";
    }
}

function updateFAQsDefault(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/faqs",true);
    request.onload = function(){
    var result = JSON.parse(this.response);

        var i;
        var qno=1;

        //update questions
        var questions = document.getElementsByClassName("question");
        var FAQquestion;
        for(i=0; i<questions.length; i++){
            FAQquestion=result.data[i].question;
            if(FAQquestion!=null){
                questions[i].textContent=qno+". "+FAQquestion;
            }else{
                questions[i].textContent=qno+". Question";
            }
            qno++;
        }

        //update answers
        var answers = document.getElementsByClassName("answer");
        var FAQanswer;
        for(i=0; i<answers.length; i++){
            FAQanswer=result.data[i].answer;
            if(FAQanswer!=null){
                answers[i].textContent=FAQanswer;
            }else{
                answers[i].textContent="answer";
            }
        }
    }
    request.send();
}

function updateFAQsEng(){
    updateFAQsDefault();
}

function updateFAQsNep(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://nepalcorona.info/api/v1/faqs",true);
    request.onload = function(){
    var result = JSON.parse(this.response);

        var i;
        var qno=1;

        //update questions
        var questions = document.getElementsByClassName("question");
        var FAQquestion;
        for(i=0; i<questions.length; i++){
            FAQquestion=result.data[i].question_np;
            if(FAQquestion!=null){
                questions[i].textContent=qno+". "+FAQquestion;
            }else{
                questions[i].textContent=qno+". Question";
            }
            qno++;
        }

        //update answers
        var answers = document.getElementsByClassName("answer");
        var FAQanswer;
        for(i=0; i<answers.length; i++){
            FAQanswer=result.data[i].answer_np;
            if(FAQanswer!=null){
                answers[i].textContent=FAQanswer;
            }else{
                answers[i].textContent="answer";
            }
        }
    }
    request.send();
}
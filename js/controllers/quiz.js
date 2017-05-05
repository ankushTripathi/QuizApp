function quizController(quizService){

    var vd = this;
    
   vd.quizService = quizService;
   vd.data = quizService.quizQuestions;
   vd.activeQuestion = 0;
   vd.quizLength = vd.data.length-1;
   vd.numQuestionAnswered = 0;
   vd.quizOver = false;
   vd.score = 0;

   vd.correctAnswer = [0,1,2,3,2,1,0,1,2,3];

   vd.selectQuestion = function(index){

    vd.activeQuestion = index;
   }

   vd.setActiveQuestion = function(index){
    
    if(index === undefined){
        var flag = false;
        while(!flag){
         vd.activeQuestion = (vd.activeQuestion<vd.quizLength) ? ++vd.activeQuestion:0;
            if(vd.data[vd.activeQuestion].selected === null){
                flag = true;
            }
        }
    }
    else
    vd.activeQuestion = index;

   }


//bug here...
   vd.selectAnswer = function(index){
       
       if(!vd.quizOver){
           vd.data[vd.activeQuestion].selected = index;
        }
   }

   vd.questionAnswered = function(){

    if(vd.data[vd.activeQuestion].selected !== null){
        vd.numQuestionAnswered++;
    }
    vd.setActiveQuestion();

   }


   vd.checkAnswers = function(){
    var x =0;
    while(x < vd.quizLength){
        if(vd.data[x].selected == vd.correctAnswer[x]){
           vd.score++;
            vd.data[x].correct = true;
        }
        x++;
    }
   }


   vd.endQuiz = function(){
        vd.quizOver = true;
        vd.numQuestionAnswered = 0;
        vd.activeQuestion = 0;
       vd.checkAnswers(); 

   }


}

app.controller('quizCtrl' ,quizController); 
quizController.$inject = ['quizService'];

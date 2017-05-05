function quizController(quizService){

    var vd = this;
    
   vd.quizService = quizService;
   vd.data = quizService.quizQuestions;
   vd.activeQuestion = 0;
   vd.quizLength = vd.data.length-1;
   vd.numQuestionAnswered = 0;
   

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

   vd.selectAnswer = function(index){
       vd.data[vd.activeQuestion].selected = index;
   }

   vd.questionAnswered = function(){

    if(vd.data[vd.activeQuestion].selected !== null){
        vd.numQuestionAnswered++;
        if(vd.numQuestionAnswered >= vd.quizLength){
            vd.endQuiz();
        }
    }
    vd.setActiveQuestion();

   }


   vd.endQuiz = function(){
        //
   }


}

app.controller('quizCtrl' ,quizController); 
quizController.$inject = ['quizService'];

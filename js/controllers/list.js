function listController(quizService){

    var vd = this;

    vd.activeData = {};
    vd.search = "";
    vd.quizService = quizService;
    vd.data = quizService.PythonData;

    vd.activePython = function(python){
        vd.activeData = python;
    }

    vd.activateQuiz = function(){
        quizService.changeState(true);
    }

}

listController.$inject=  ['quizService'];

app.controller('listCtrl',listController);

class CalcController{
    constructor(){
         this._displayCalc = "0";
         this._currentDate;
         this.initialize(); 
    }
    initialize(){
       let displayCalcEl = document.querySelector("#display");
       let dateEl        = document.querySelector("#data");
       let timeEl        = document.querySelector("#hora");
       displayCalcEl.innerHTML = "4567";
       dateEl.innerHTML        = "19/04/1996";
       timeEl.innerHTML        = "04:21:35";
       //inicialização do elementos que estão na parte do front end 

    }
    // get e set da classe claculadora 
    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get currentDate(){
        return this._currentDate;
    }
    set currentDate(valor){
        this._currentDate = valor;
    }

}
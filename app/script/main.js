$("document").ready(function(){
    var firstInput;
    var secondInput;
    var selectOption;
    var test = init();
    setHandlers(test.first, test.second, test.select, calc);
});

function init() {
    var  firstInput = $("#z1");
    var  secondInput = $("#z2");
    var  selectOption = $("select");
      return {
         first: firstInput,
         second: secondInput,
         select: selectOption
      } 
    }

   function setHandlers(firstObj, secondObj, thirdObj, callback) {
        firstObj.on('keyup', function() {
           callback(firstObj, secondObj, thirdObj);
        })
        secondObj.on('keyup', function() {
          callback(firstObj, secondObj, thirdObj);
        })
        thirdObj.on('change', function() {
          callback(firstObj, secondObj, thirdObj);
        })
   }

   function calc(firstToValue, secondToValue, thirdToValue) {
        var firstValue = Number(firstToValue[0].value);
        var secondValue = Number(secondToValue[0].value);

        if(firstValue && secondValue) {   
         switch  (thirdToValue.val()) {
        case"1":{
               console.log(firstValue + secondValue)
        break;}
        case"2":{
               console.log(firstValue - secondValue)
        break;}
        case"3":{
               console.log(firstValue * secondValue)
        break;}
        case"4":{
               console.log(firstValue / secondValue)
        break;}
    }
  }
   }
$("document").ready(function(){
	var testObject = init();
	setHandlers(testObject, changeToNumber);
	var result = $("#result");

	function init () {
		var firstInput = $("#z1");
		var secondInput = $("#z2");
		var selectOption = $("#mySelect");
		return {
			first: firstInput,
			second: secondInput,
			select: selectOption
		}
	}

	function setHandlers(testObject, callback){
		testObject.first.on("input", function() {
			callback(testObject, calculate);
		})

		testObject.second.on("input", function(){
			callback(testObject, calculate);
		})
		testObject.select.on("change", function() {
			callback(testObject, calculate);
		})
	}

	function changeToNumber(testObject, callback) {
		var firstNumber = +(testObject.first[0].value);
		var secondNumber = +(testObject.second[0].value);
		var selectValueNumber = (testObject.select).val();
			callback(firstNumber, secondNumber, selectValueNumber);
	}

	function calculate (first, second, select){
		if (first && second){
			switch(select){
				case"1":
				{
               		result.html( first + second )
        			break;
        		}
        		case"2":
        		{
               		result.html( first - second )
        			break;
        		}
        		case"3":
        		{
               		result.html( first * second )
        			break;
        		}
        		case"4":
        		{
               		result.html( first / second )
        			break;
        		}
			}
		}
		else {
			result.html('');
		}
	}
});
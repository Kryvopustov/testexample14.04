$("document").ready(function(){
	var testObject = init();
	setHandlers(testObject, calculate);
	var result = $("#result");


	function init () {
		var allInput = $("input");
		var selectOption = $("#mySelect");
		return {
			all: allInput,
			select: selectOption
		}
	}

	function setHandlers(testObject, callback){
		testObject.all.on("input", function() {
			callback(testObject);
		})
		testObject.select.on("change", function() {
			callback(testObject);
		})
	}
/*
	function testFunc (testObject) {
		var sum = 0;
		testObject.all.each(function (i,e) {
			if(e.value) {
			sum = sum + parseInt(e.value);
			}
			else {
				sum = "";
				return false;
			}

		})
		result.html(sum);
		console.log(sum);
	};

*/
	function calculate(testObject) {
		var sum = 1;
		var mySelect = (testObject.select).val();
		testObject.all.each(function (i,e) {
		if (e.value){
			switch(mySelect){
				case"1":
				{
					sum = sum + parseInt(e.value);
               		result.html( sum - 1 );
        			break;
        		}
        		case"2":
        		{
        			sum = sum - parseInt(e.value);
               		result.html( sum - 1 );
        			break;
        		}
        		case"3":
        		{
        			sum = sum * parseInt(e.value)
               		result.html( sum );
        			break;
        		}
        		case"4":
        		{
        			sum = sum / parseInt(e.value);
               		result.html( sum );
        			break;
        		}
			}
		}
		else {
			result.html('');
			return false;
		}
	})
}
});
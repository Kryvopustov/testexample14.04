$("document").ready(function(){

	var disable = false;

	$("#moduleChange").on("click", function(){
	disable = !disable;
	console.log(disable);
	if(disable) { 
		createModule.moduleOn();
	}
	else if(!disable){
		createModule.moduleOff();
	}
	});

	var createModule = (function() {

		var testObject = init();
		var result = $("#result");

		var myObject = {
			moduleOn: function () {
				setHandlers(testObject, calculate);
			},
			moduleOff: function () {
				unsetHandlers(testObject, calculate);
			}
		}

		return myObject;


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

		function unsetHandlers(testObject, callback){
			testObject.all.off("input")
			testObject.select.off("change")
		}


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
	}());
});
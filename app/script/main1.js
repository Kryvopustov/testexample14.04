document.getElementById("z1").oninput = function () {initialization()};
document.getElementById("z2").oninput = function () {initialization()};
document.getElementById("mySelect").onchange = function () {initialization()};

var myFirst = document.getElementById("z1");
var mySecond = document.getElementById("z2");
var mySelect = document.getElementById("mySelect");

function initialization(){
	var first = +(myFirst.value);
	var second = +(mySecond.value);
	var select = mySelect.value;
	calculate(first,second,select)
};

function calculate (first, second, select){
	if(first && second){
		switch(select){
			case"1":{
				console.log(first+second);
			break;
			}
			case"2":{
				console.log(first-second);
			break;
			}
			case"3":{
				console.log(first*second);
			break;
			}
			case"4":{
				console.log(first/second);
			break;
			}
		}
	}
};
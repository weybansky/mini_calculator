function display(a){
	document.getElementById('screen').value += a;
}

function bkspace () {
	var a = document.getElementById('screen').value;
	a = a.substr(0, a.length - 1);
	document.getElementById('screen').value = a;
}

function cls_screen () {
	document.getElementById('screen').value = "";
	document.getElementById('ans').value = "";
}

function ans (){
	var ans = document.getElementById('screen').value;

	// var ans2 = document.getElementById('hidden_screen').value;

	if (ans === "") {
		document.getElementById('ans').value = "0";
	}
	else {
		// alert(ans);
		answer = eval(ans);
		document.getElementById('ans').value = answer;
	}
}

function sin (a) {
	a = Number(a);
	return Math.sin(a * Math.PI / 180);
}

function arcsin(a){
	a = Number();
	return Math.asin(a * Math.PI / 180);
}

function sinh (a) {
	a = Number(a);
	return Math.sinh(a * Math.PI / 180);
}

function cos (a) {
	a = Number(a);
	return Math.cos(a * Math.PI / 180); 
}

function arccos (a) {
	a = Number(a);
	return Math.acos(a * Math.PI / 180);
}

function cosh (a) {
	a = Number(a);
	return Math.cosh(a * Math.PI / 180);
}

function tan (a) {
	a = Number(a);
	// return (Math.sin(a * Math.PI / 180)) / (Math.cos(a * Math.PI / 180));
	return Math.tan(a * Math.PI / 180);
}

function arctan (a) {
	a = Number(a);
	return Math.atan(a * Math.PI / 180);
}

function ln (a) {
	a = Number(a);
	return Math.log(a);
}

function log (a) {
	a = Number(a);
	return Math.log(a) / Math.log(10);
}

function sqrt (a) {
	a = Number(a);
	return Math.sqrt(a);
}

function cbrt (a) {
	a = Number(a);
	return Math.cbrt(a);
}
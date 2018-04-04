function display(a){
	document.getElementById('screen').value += a;
}

function bkspace () {
	var a = document.getElementById('screen').value;
	// Testing ground
	// console.log(a);

	var n = a.length;
	// console.log(n);

	// To print the last char '('
	var last_char = a.charAt(n - 1);
	// console.log(last_char);

	// // This works for cos, sin, tan, log
	// // var chars_trig = a.charAt(n - 4);
	// // console.log(chars_trig);
	var last_chars = a.slice(n-4, n);
	// console.log(last_chars);


	// // This works for arcsin, arccos, arctan
	// // var chars_arc = a.charAt(n -7);
	// // console.log(chars_arc);
	var last_arc = a.slice(n-7, n);
	// console.log(last_arc);


	// // This works for sinh, cosh
	// // var chars_hyp = a.charAt(n - 5);
	// // console.log(chars_hyp);
	var last_hyp = a.slice(n-5, n);
	// console.log(last_hyp);


	if ( (last_arc == 'arcsin(') || (last_arc == 'arccos(') || (last_arc == 'arctan(') ) {
		// console.log(last_arc);
		a = a.substr(0, n-7);
		document.getElementById('screen').value = a;
		// console.log(a);

	} else if ( (last_hyp == 'sinh(') || (last_hyp == 'cosh(') ) {
		// console.log(last_hyp);
		a = a.substr(0, n-5);
		document.getElementById('screen').value = a;
		// console.log(a);
		
	} else if ( (last_chars == 'cos(') || (last_chars == 'sin(') || (last_chars == 'tan(') || (last_chars == 'log(') ) {
		// console.log(last_chars);
		a = a.substr(0, n-4);
		document.getElementById('screen').value = a;
		// console.log(a);
		
	} else{
		a = a.substr(0, a.length - 1);
		document.getElementById('screen').value = a;

	}
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
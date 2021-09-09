var z;
var x = parseFloat(document.getElementById("num1").value);
var y = parseFloat(document.getElementById("num2").value);
//var sel=  document.getElementById("info");
//var selectedValue = sel.options[sel.selectedIndex].value;
var swat = document.getElementById("Add");
var Sub = document.getElementById("Sub");
var Divide = document.getElementById("Divide");
var Multiply = document.getElementById("Multiply");
var Modulus = document.getElementById("Modulus");
var Cosine = document.getElementById("Cosine");
var Tangent = document.getElementById("Tangent");
var Sine = document.getElementById("Sine");
var Square_root = document.getElementById("Square_root");
var Roundup = document.getElementById("Roundup");
var Europe = document.getElementById("Europe");
var Britain = document.getElementById("Britain");
var America = document.getElementById("America");
var Saudi_Arabia = document.getElementById("Saudi_Arabia");
var India = document.getElementById("India");
var Korea = document.getElementById("Korea");
var reset = document.getElementById("reset").value;

swat.onclick = addict;

function addict() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  z = x + y;
  document.getElementById("demo").innerHTML = z;
}

function addict() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  z = x + y;
  document.getElementById("demo").innerHTML = z;
}

function sudo() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  z = x - y;
  document.getElementById("demo").innerHTML = z;
}

function dive() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  z = x / y;
  document.getElementById("demo").innerHTML = z;
}

function musty() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  z = x * y;
  document.getElementById("demo").innerHTML = z;
}

function dove() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  z = x % y;
  document.getElementById("demo").innerHTML = z;
}

function come() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  z = Math.cos(x);
  document.getElementById("demo").innerHTML = z;
}

function sit() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  z = Math.sin(x);
  document.getElementById("demo").innerHTML = z;
}

function table() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  z = Math.tan(x);
  document.getElementById("demo").innerHTML = z;
}

function squad() {
  var z;
  var x = parseFloat(document.getElementById("num1").value);
  z = Math.sqrt(x);
  document.getElementById("demo").innerHTML = z;
}

function dope() {
  var z;
  var doly = 411.50;
  var x = parseFloat(document.getElementById("num1").value);
  z = x / doly ;
  document.getElementById("demo").innerHTML = "$ " + z;
}

function hero() {
  var z;
  var doly = 480.44;
  var x = parseFloat(document.getElementById("num1").value);
  z = x / doly ;
  document.getElementById("demo").innerHTML = "E " + z;
}

function pads() {
  var z;
  var doly = 560.46;
  var x = parseFloat(document.getElementById("num1").value);
  z = x / doly ;
  document.getElementById("demo").innerHTML = "E " + z;
}

function rose() {
  var z;
  var doly = 109.72;
  var x = parseFloat(document.getElementById("num1").value);
  z = x / doly ;
  document.getElementById("demo").innerHTML = "R " + z;
}

function rude() {
  var z;
  var doly = 5.53;
  var x = parseFloat(document.getElementById("num1").value);
  z = x / doly ;
  document.getElementById("demo").innerHTML = "Rs. " + z;
}

function wood() {
  var z;
  var doly =0.35;
  var x = parseFloat(document.getElementById("num1").value);
  z = x / doly ;
  document.getElementById("demo").innerHTML = "W " + z;
}

function erase() {
  demo.innerHTML = 0;
}





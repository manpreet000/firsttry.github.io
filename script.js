var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");



function setGradiant (){
	body.style.background="linear gradiant(to right,"
	 +color1.value+ "," +color2.value+")"

css.textContent = body.style.background+";";
}
color1.addEventListner("input" ,setGradiant);

color2.addEventListner("input" ,setGradiant);



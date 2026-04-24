function volume_sphere() {
    //Write your code here
	const r = document.querySelector("#radius");
	const v = document.querySelector("#volume");
	let cal = (4*3.14*Number.(r)*Number(r)*Number(r))/3;
    v.innerHTML = "cal"
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

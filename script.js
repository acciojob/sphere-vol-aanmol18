function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const r = Number(document.getElementById("radius").value);

    let volume;
    if (isNaN(r) || r < 0) {
        volume = NaN;
    } else {
        volume = (4/3) * Math.PI * Math.pow(r, 3);
        volume = volume.toFixed(4); // round to 4 decimal places
    }

    document.getElementById("volume").value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

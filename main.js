document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("button").addEventListener("click", function () {
		console.log("button clicked");
		let total = parseFloat(document.getElementById("amt").value);
		console.log(total, typeof total);
		let tip = parseFloat(document.getElementById("tip").value);
		console.log(tip, typeof tip);
		if (isNaN(total) || isNaN(tip)) {
			alert("Please enter valid numbers for total and tip.");
			return;
		}
		let pay = parseFloat((total * tip) / 100 + total);

		let p = document.createElement("p");
		p.style.textAlign = "center";
		p.style.fontWeight = "Bold";
		p.id = "result";

		let div = document.getElementById("box");

		let prevresult = document.getElementById("result");
		if (prevresult) {
			div.removeChild(prevresult);
		}

		p.textContent = `Amount to be paid is ${pay}`;
		div.append(p);
	});
});

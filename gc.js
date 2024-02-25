const gc=document.querySelector("#gc")

function validate() {
	if (gc.value=="" || gc.value==null) {
		var g=document.querySelector("#output")
		g.innerText="You should put a value"
		return false
	}
	else if (gc.value>79 && gc.value<101) {
		var g=document.querySelector("#output")
		g.innerText="GPA:5.00 Grade:A+"
		return false
	}
	else if (gc.value>69 && gc.value<80) {
		var g=document.querySelector("#output")
		g.innerText="GPA:4.00 Grade:A"
		return false
	}
	else if (gc.value>59 && gc.value<70) {
		var g=document.querySelector("#output")
		g.innerText="GPA:3.50 Grade:A-"
		return false
	}
	else if (gc.value>49 && gc.value<60) {
		var g=document.querySelector("#output")
		g.innerText="GPA:3.00 Grade:B"
		return false
	}
	else if (gc.value>39 && gc.value<50) {
		var g=document.querySelector("#output")
		g.innerText="GPA:2.00 Grade:C"
		return false
	}
	else if (gc.value>32 && gc.value<40) {
		var g=document.querySelector("#output")
		g.innerText="GPA:1.00 Grade:D"
		return false
	}
	else if (gc.value<33 || gc.value==0) {
		var g=document.querySelector("#output")
		g.innerText="GPA:0.00 Grade:F"
		return false
	}

}
setInterval(function() {
const d = new Date();

function currentHour12() {
	if (d.getHours() === 0) {
	  return '12';
	} else if (d.getHours() > 12) {
		var hr12 = d.getHours() - 12;
		if (hr12 < 10) {
			return "0" + hr12;
		} else {
			return hr12;
		}
	} else {
		if (d.getHours < 10) {
			return "0" + d.getHours();
		} else {
			return d.getHours();
		}
	}
}

function amPM() {
	if (d.getHours() > 12) {
		return "PM";
	} else {
		return "AM";
	}
}

function currentSecond() {
	if (d.getSeconds() < 10) {
		return "0" + d.getSeconds();
	} else {
		return d.getSeconds();
	}
}

function currentMinute() {
	if (d.getMinutes() < 10) {
		return "0" + d.getMinutes();
	} else {
		return d.getMinutes();
	}
}

document.getElementById("hours").innerHTML = currentHour12();
document.getElementById("minutes").innerHTML = currentMinute();
});
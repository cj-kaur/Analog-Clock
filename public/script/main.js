// get current date
let now = new Date();
// consolelog that and chaneg innerhtml of h1
let displayDate = document.getElementById("date");
console.log({ displayDate });
// to switch day to name date
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
var dayName = days[now.getDay()];
// to switch month number to name month
let months = [
	"January",
	"Feburary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
var monthName = months[now.getMonth()];
let today = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
displayDate.innerHTML = today;
console.log({ today });

function _updatingClock() {
	// get date
	let timeDate = new Date();
	// get the current second of the date
	let seconds = timeDate.getSeconds();

	// get the current second of the date
	let minutes = timeDate.getMinutes();
	// get the current second of the date
	let hours = timeDate.getHours();

	// use the inveral of the second value being changed in
	// let secondsDegree = (seconds / 60) * 360;
	// console.log(secondsDegree);

	// get the seconds hand and add the transform rotation
	let secondsHand = document.querySelector(".seconds-hand");
	let minsHand = document.querySelector(".minutes-hand");
	let hoursHand = document.querySelector(".hours-hand");
	// secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
	// console.log(`rotate(${secondsDegree}deg)`);

	let time = [seconds, minutes, hours];
	let hands = [secondsHand, minsHand, hoursHand];
	// function _run(i) {
	// 	let handDegrees = (time[i] / 60) * 360;
	// 	console.log({ handDegrees });
	// 	// console.log(hands[i]);
	// 	hands[i].style.transform = `rotate(${handDegrees}deg)`;
	// }

	// time.forEach(_run);
	for (let i = 0; i < hands.length; i++) {
		let handDegrees = (time[i] / 60) * 360;
		console.log({ handDegrees });
		// console.log(hands[i]);
		hands[i].style.transform = `rotate(${handDegrees}deg)`;
	}
	console.log({ seconds });

	// added if ststement for skipping transition
	// console.log({ isTrue: seconds !== 59 });
	if (seconds !== 0) {
		hands[0].classList.add("transition");
	} else {
		hands[0].classList.remove("transition");
	}
}
// _updatingClock();
setInterval(_updatingClock, 1000);

const letterArray = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
];

let word = document.querySelector(`.glitchy-text`),
	wordArray = [],
	inputSpeed = document.querySelector(`#param-speed`),
	spd,
	inputContent = document.querySelector(`#param-content`),
	cnt;

inputSpeed.addEventListener(`keyup`, (e) => {
	console.log("speed changed");
	spd = e.target.value;
});
inputContent.addEventListener("keyup", (e) => {
	cnt = e.target.value;
});

const getRandomLetter = () => {
	return letterArray[Math.floor(Math.random() * letterArray.length)];
};

const glitchHandler = (cnt = "cyberpunk 2077", speed = 80) => {
	let iterate = 0,
		iterateMax = cnt.length;

	setInterval(() => {
		if (iterate > iterateMax) {
			return;
		}
		word.innerHTML = "";
		for (let i = 0; i < iterate; i++) {
			word.innerHTML += cnt[i];
		}
		for (let i = iterate; i < iterateMax; i++) {
			word.innerHTML += getRandomLetter();
		}
		iterate++;
	}, speed);
};

word.addEventListener(`mouseover`, () => {
	cnt == "" && (cnt = undefined);
	glitchHandler(cnt, spd);
});

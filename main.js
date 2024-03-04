const houseList = [
    document.querySelector(".house-selector__button-1"),
    document.querySelector(".house-selector__button-2"),
    document.querySelector(".house-selector__button-3"),
    document.querySelector(".house-selector__button-4"),
    document.querySelector(".house-selector__button-5")
];

const houseBackgroundLetter = document.querySelector(".house-info__bg-name");
const houseBackgroundText = document.querySelector(".house-info__bg-text");

const houseTitle = document.querySelector(".house-info__name");

const houseInfo = [
    { letter: "P", title: "PHOTON"},
    { letter: "R", title: "RISE"},
    { letter: "I", title: "Idea <br/> Incubator"},
    { letter: "S", title: "Symposia"},
    { letter: "E", title: "Eureka <br/> Experimentarium"}
];

const houseColor = [
    "color-photon",
    "color-rise",
    "color-incubator",
    "color-symposia",
    "color-eureka"
];

let currentHouse = 0;

function changeColor(old ,current) {
    houseBackgroundLetter.classList.replace(houseColor[old], houseColor[current]);
    houseBackgroundText.classList.replace(houseColor[old], houseColor[current]);
    houseTitle.classList.replace(houseColor[old], houseColor[current])
};

function changeHouseTitle(current) {
    houseBackgroundLetter.innerHTML = houseInfo[current].letter;
    houseTitle.innerHTML = houseInfo[current].title
}

for (let i = 0; i < houseList.length; i++) {
    houseList[i].addEventListener("click", () => {
        if (i !== currentHouse) {
            let temp = currentHouse;
            currentHouse = i;
            houseList[currentHouse].classList.add('house-icon-selected');
            houseList[temp].classList.remove('house-icon-selected');
            changeColor(temp, currentHouse);
            changeHouseTitle(currentHouse)
        }
    });
}

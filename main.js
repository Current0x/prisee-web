const houseList = [
    document.querySelector(".house-selector__button-1"),
    document.querySelector(".house-selector__button-2"),
    document.querySelector(".house-selector__button-3"),
    document.querySelector(".house-selector__button-4"),
    document.querySelector(".house-selector__button-5")
]

let currentHouse = 0;

for (let i = 0; i < houseList.length; i++) {
    houseList[i].addEventListener("click", () => {
        if (i !== currentHouse) {
            houseList[i].classList.add('house-selected');
            houseList[currentHouse].classList.remove('house-selected');
            currentHouse = i;
        }
    });
}

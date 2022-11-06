
const playerMenuOptions = document.querySelectorAll(".player-menu-area__options ul li");
const weaponsDisplayButton = playerMenuOptions[0];
const consumablesDisplayButton = playerMenuOptions[1];
const othersDisplayButton = playerMenuOptions[2];
const craftDisplayButton = playerMenuOptions[3];
const menuDisplayButton = playerMenuOptions[6];
const playerMenuItemsScreens = document.querySelectorAll(".player-menu-area-display__screen");
const attackButtonWeaponImage = document.querySelector(".actions-area__attack-button img");
const menuScreen = document.querySelector(".menu-screen");
const menuScreenReturnButton = document.querySelector(".menu-screen__return");
const pistolConfirmScreen = document.querySelector("#pistol-confirm-screen");
const bandageConfirmScreen = document.querySelector("#bandage-confirm-screen");
const medikitConfirmScreen = document.querySelector("#medikit-confirm-screen");
const molotovConfirmScreen = document.querySelector("#molotov-confirm-screen");
const pistolEquipButton = document.querySelector("#pistol-equip-button");
const pistolInfoButton = document.querySelector("#pistol-info-button");
const pistolReturnButton = document.querySelector("#pistol-return-button");
const bandageUseButton = document.querySelector("#bandage-use-button");
const bandageInfoButton = document.querySelector("#bandage-info-button");
const bandageReturnButton = document.querySelector("#bandage-return-button");
const medikitUseButton = document.querySelector("#medikit-use-button");
const medikitInfoButton = document.querySelector("#medikit-info-button");
const medikitReturnButton = document.querySelector("#medikit-return-button");
const molotovEquipButton = document.querySelector("#molotov-equip-button");
const molotovInfoButton = document.querySelector("#molotov-info-button");
const molotovReturnButton = document.querySelector("#molotov-return-button");
const playerMenuWeaponsList = document.querySelectorAll(".player-menu-area-display__weapons li");
const playerMenuConsumablesList = document.querySelectorAll(".player-menu-area-display__consumables li");
const playerMenuOthersList = document.querySelectorAll(".player-menu-area-display__others li");

const pistolImage = "assets/images/items/handgun.png";
const molotovImage = "assets/images/items/molotov.png";

let equipedMenuItem = playerMenuWeaponsList[0];



function changeEquipedItem(itemImage, itemList, itemIndex){
	attackButtonWeaponImage.src = itemImage;
	itemList.forEach(function(item){
		item.style.backgroundColor = "#e8dcb8";
	});
	equipedMenuItem.style.backgroundColor = "#e8dcb8";
	itemList[itemIndex].style.backgroundColor = "#8B4000";
	equipedMenuItem = itemList[itemIndex];
}

function displayItemConfirmScreen(targetScreen){
	targetScreen.classList.remove("d-none");
}

function closeItemConfirmScreen(targetScreen){
	targetScreen.classList.add("d-none");
}


function displayPlayerMenuItemScreen(itemScreen){
	playerMenuItemsScreens.forEach(function(screen){
		screen.classList.add("d-none");
	});
	playerMenuItemsScreens[itemScreen].classList.remove("d-none");
}



weaponsDisplayButton.addEventListener("click", function(){
	displayPlayerMenuItemScreen(0);
});

consumablesDisplayButton.addEventListener("click", function(){
	displayPlayerMenuItemScreen(1);
});

othersDisplayButton.addEventListener("click", function(){
	displayPlayerMenuItemScreen(2);
});

menuDisplayButton.addEventListener("click", function(){
	menuScreen.classList.remove("d-none");
	menuScreenReturnButton.classList.remove("d-none");
});

playerMenuWeaponsList[0].addEventListener("click", function(){
	displayItemConfirmScreen(pistolConfirmScreen);
});

playerMenuConsumablesList[0].addEventListener("click", function(){
	displayItemConfirmScreen(bandageConfirmScreen);
});

playerMenuConsumablesList[1].addEventListener("click", function(){
	displayItemConfirmScreen(medikitConfirmScreen);
});

playerMenuOthersList[0].addEventListener("click", function(){
	displayItemConfirmScreen(molotovConfirmScreen);
});

pistolReturnButton.addEventListener("click" , function(){
	closeItemConfirmScreen(pistolConfirmScreen);
});

bandageReturnButton.addEventListener("click" , function(){
	closeItemConfirmScreen(bandageConfirmScreen);
});

medikitReturnButton.addEventListener("click" , function(){
	closeItemConfirmScreen(medikitConfirmScreen);
});

molotovReturnButton.addEventListener("click" , function(){
	closeItemConfirmScreen(molotovConfirmScreen);
});

bandageUseButton.addEventListener("click", function(){
	closeItemConfirmScreen(bandageConfirmScreen);
});

medikitUseButton.addEventListener("click", function(){
	closeItemConfirmScreen(medikitConfirmScreen);
});

pistolEquipButton.addEventListener("click", function(){
	changeEquipedItem(pistolImage, playerMenuWeaponsList, 0);
	closeItemConfirmScreen(pistolConfirmScreen);
});

molotovEquipButton.addEventListener("click", function(){
	changeEquipedItem(molotovImage, playerMenuOthersList, 0);
	closeItemConfirmScreen(molotovConfirmScreen);
});


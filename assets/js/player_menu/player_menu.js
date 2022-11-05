
const playerMenuOptions = document.querySelectorAll(".player-menu-area__options ul li");
const weaponsDisplayButton = playerMenuOptions[0];
const consumablesDisplayButton = playerMenuOptions[1];
const othersDisplayButton = playerMenuOptions[2];
const craftDisplayButton = playerMenuOptions[3];
const menuDisplayButton = playerMenuOptions[6];
const playerMenuItemsScreens = document.querySelectorAll(".player-menu-area-display__screen");
const attackButtonWeaponImage = document.querySelector(".actions-area__attack-button img");
const attackButtonWeaponAmmo = document.querySelector(".actions-area__weapon-ammo")
const menuScreen = document.querySelector(".menu-screen");
const menuScreenReturnButton = document.querySelector(".menu-screen__return");



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

menuScreenReturnButton.addEventListener("click", function(){
	menuScreen.classList.add("d-none");
});
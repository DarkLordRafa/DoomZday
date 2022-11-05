
const menuScreen = document.querySelector(".menu-screen");
const newGameButton = document.querySelector(".menu-screen__new-game");
const loadGameButton = document.querySelector(".menu-screen__load-game");
const saveGameButton = document.querySelector(".menu-screen__save-game");
const newGameScreen = document.querySelector(".new-game-screen");
const saveGameScreen = document.querySelector(".save-game-screen");
const loadGameScreen = document.querySelector(".load-game-screen");
const newGameCancelButton = document.querySelector("#new-game-cancel-button");
const newGameConfirmButton = document.querySelector("#new-game-confirm-button");
const loadGameCancelButton = document.querySelector("#load-game-cancel-button");
const loadGameConfirmButton = document.querySelector("#load-game-confirm-button");
const saveGameCancelButton = document.querySelector("#save-game-cancel-button");
const saveGameConfirmButton = document.querySelector("#save-game-confirm-button");
const menuScreenReturnButton = document.querySelector(".menu-screen__return");



function menuScreenDisplay(targetScreen){
	targetScreen.classList.remove("d-none");
}

function menuScreenClose(targetScreen){
	targetScreen.classList.add("d-none");
}

export function menuScreenConfirmAction(targetScreen, action){
	targetScreen.classList.add("d-none");
	action();
}

newGameButton.addEventListener("click", function(){
	menuScreenDisplay(newGameScreen);
});

newGameCancelButton.addEventListener("click", function(){
	menuScreenClose(newGameScreen);
});

loadGameButton.addEventListener("click", function(){
	menuScreenDisplay(loadGameScreen);
});

loadGameCancelButton.addEventListener("click", function(){
	menuScreenClose(loadGameScreen);
});

saveGameButton.addEventListener("click", function(){
	menuScreenDisplay(saveGameScreen);
});

saveGameCancelButton.addEventListener("click", function(){
	menuScreenClose(saveGameScreen);
});

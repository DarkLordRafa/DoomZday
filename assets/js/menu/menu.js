
//Variáveis de elementos
const menuScreen = document.querySelector(".menu-screen");
const loadGameButton = document.querySelector(".menu-screen__load-game");
const saveGameButton = document.querySelector(".menu-screen__save-game");
const feedbackButton = document.querySelector(".menu-screen__feedback");
const feedbackScreen = document.querySelector(".feedback-screen");
const feedbackReturnButton = document.querySelector(".feedback-screen__return-button");
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


//Função que abre a tela de confirmação da opção do menu principal, baseada no argumento passado
function menuScreenDisplay(targetScreen){
	targetScreen.classList.remove("d-none");
}

//Função que fecha a tela de confirmação da opção do menu principal junto com o menu, baseada no argumento passado
function menuScreenClose(targetScreen, targetMenuScreen){
	targetScreen.classList.add("d-none");
	if (arguments.length > 1){
		targetMenuScreen.classList.add("d-none");
	}
}

//Botões que fecham a tela da opçáo do menu ou a tela de opção junto com o menu

newGameCancelButton.addEventListener("click", function(){
	menuScreenClose(newGameScreen);
});

newGameConfirmButton.addEventListener("click", function(){
	menuScreenClose(newGameScreen, menuScreen);
});

loadGameButton.addEventListener("click", function(){
	menuScreenDisplay(loadGameScreen);
});

loadGameCancelButton.addEventListener("click", function(){
	menuScreenClose(loadGameScreen);
});

loadGameConfirmButton.addEventListener("click", function(){
	menuScreenClose(loadGameScreen, menuScreen);
});

saveGameButton.addEventListener("click", function(){
	menuScreenDisplay(saveGameScreen);
});

feedbackButton.addEventListener("click", function(){
	menuScreenDisplay(feedbackScreen);
});

saveGameCancelButton.addEventListener("click", function(){
	menuScreenClose(saveGameScreen);
});

saveGameConfirmButton.addEventListener("click", function(){
	menuScreenClose(saveGameScreen, menuScreen);
});

menuScreenReturnButton.addEventListener("click", function(){
	menuScreenClose(menuScreen);
});

feedbackReturnButton.addEventListener("click", function(){
	menuScreenClose(feedbackScreen);
});

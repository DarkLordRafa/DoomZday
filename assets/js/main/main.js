
//Importando os textos do jogo
import {gameTexts} from "../game_texts/game_texts.js";

//Tela principal do jogo
const mainScreen = document.querySelector(".main-screen");

//Variáveis das quantidades de itens exibidas na tela
const displayedBandageQuantity = document.querySelector(".displayed-bandage-quantity");
const displayedMedikitQuantity = document.querySelector(".displayed-medikit-quantity");
const displayedMolotovQuantity = document.querySelector(".displayed-molotov-quantity");


//Variáveis das quantidades de itens de criação exibidas na tela
const displayedClothQuantity = document.querySelectorAll(".displayed-cloth-quantity");
const displayedAlcoholQuantity = document.querySelectorAll(".displayed-alcohol-quantity");
const displayedBottleQuantity = document.querySelectorAll(".displayed-bottle-quantity");


//Variável da quantidade de munição exibida no botão de ataque
const displayedAmmoQuantity = document.querySelector(".actions-area-weapon-ammo");


//Variáveis dos botões de criar item
const craftBandageButton = document.querySelector("#craft-bandage-button");
const craftMolotovButton = document.querySelector("#craft-molotov-button");


//Variáveis das listas de consumíveis e outros no menu do jogador
const playerMenuConsumablesList = document.querySelectorAll(".player-menu-area-display__consumables li");
const playerMenuOthersList = document.querySelectorAll(".player-menu-area-display__others li");


//Variável da lista de armas no menu do jogador
const playerMenuWeaponsList = document.querySelectorAll(".player-menu-area-display__weapons li");


//Botões de equipar armas e itens
const knifeEquipButton = document.querySelector("#knife-equip-button");
const pistolEquipButton = document.querySelector("#pistol-equip-button");
const shotgunEquipButton = document.querySelector("#shotgun-equip-button");
const molotovEquipButton = document.querySelector("#molotov-equip-button");


//Botões de usar itens
const bandageUseButton = document.querySelector("#bandage-use-button");
const medikitUseButton = document.querySelector("#medikit-use-button");


//Botões de ação do jogador
const attackButton = document.querySelector(".actions-area__attack-button");
const searchButton = document.querySelector(".actions-area__search-button");
const passTurnButton = document.querySelector(".actions-area__pass-turn-button");
const walkButton = document.querySelector(".actions-area__walk-button");

//Variáveis da barra de vida do jogador
const playerLifeBar = document.querySelector(".player-menu-area__life-bar");

const playerLifeBarImage = document.querySelector(".player-menu-area__life-bar img");

//Variáveis da tela de dano do jogador e do sangue
const screenDamageArea = document.querySelector(".screen-damage-area");
const screenBloodArea = document.querySelector(".screen-blood-area");

//Variáveis das imagens da área de evento
const fireEventImage = document.querySelector(".event-area__fire");
const explosionEventImage = document.querySelector(".event-area__explosion");
const thankYouNoteEventImage = document.querySelector(".event-area__thank-you-note");


//Variáveis da tela de texto do jogo
const gameTextsScreen = document.querySelector(".game-texts-screen");
const gameTextsScreenText = document.querySelector(".game-texts-screen p");
const gameTextsNextButton = document.querySelector(".game-texts__next-button");
const gameTextsCheckpointButton = document.querySelector(".game-texts__checkpoint-button");



//Variáveis do menu principal
const loadingScreen = document.querySelector(".loading-screen");
const saveWarningScreen = document.querySelector(".save-warning-screen");
const newGameButton = document.querySelector(".menu-screen__new-game");
const loadGameButton = document.querySelector(".menu-screen__load-game");
const saveGameButton = document.querySelector(".menu-screen__save-game");
const newGameConfirmButton = document.querySelector("#new-game-confirm-button");
const loadGameConfirmButton = document.querySelector("#load-game-confirm-button");
const saveGameConfirmButton = document.querySelector("#save-game-confirm-button");





//Variáveis das armas e dos atributos
let equipedWeapon = "none";
let hitChance = 0;
let criticalChance = 0;
let minDamage = 0;
let maxDamage = 0;
let minCriticalDamage = 0;
let maxCriticalDamage = 0;



//Variáveis das imagens dos itens
const bandageImage = "assets/images/items/bandage.png";
const medikitImage = "assets/images/items/medikit.png";
const molotovImage = "assets/images/items/molotov.png";


//Variáveis das imagens dos itens de criação
const clothImage = "assets/images/crafting_items/cloth.png";
const alcoholImage = "assets/images/crafting_items/alcohol.png";
const bottleImage = "assets/images/crafting_items/bottle.png";


//Variáveis das imagens das armas
const pistolImage = "assets/images/items/handgun.png";
const shotgunImage = "assets/images/items/shotgun.webp";


//Variáveis das imagens das munições
const ammoImage9mm = "assets/images/ammo/9mm_ammo.png";
const ammoImageShotgun = "assets/images/ammo/shotgun_shells.png";


//Variáveis das imagens dos itens de evento
const thankYouNoteImage = "assets/images/event_items/thank_you_note.png";


//Variáveis da tela de busca
const searchScreen = document.querySelector(".search-screen");
const searchScreenBar = document.querySelector(".search-screen-area__bar");

//Variáveis da tela de progresso da criação de item
const craftingProgressScreen = document.querySelector(".crafting-progress-screen");
const craftingProgressScreenBar = document.querySelector(".crafting-progress-screen-area__bar");

//Variáveis da tela de item recebido
const receivedItemsScreen = document.querySelector(".received-items-screen");
const receivedItemsImage = document.querySelector(".received-items__image");
const receivedItemsLegendary = document.querySelector(".received-items-screen .legendary-badge");
const receivedItemsQuantity = document.querySelector(".received-items__quantity");
const receivedItemsName = document.querySelector(".received-items__name");


//Variáveis da tela de arma recebida
const receivedWeaponScreen = document.querySelector(".received-weapon-screen");
const receivedWeaponImage = document.querySelector(".received-weapon__image");
const receivedWeaponLegendary = document.querySelector(".received-weapon-screen .legendary-badge");
const receivedWeaponName = document.querySelector(".received-weapon__name");


//Variáveis da tela de item de evento recebido
const receivedEventItemScreen = document.querySelector(".received-event-item-screen");
const receivedEventItemImage = document.querySelector(".received-event-item__image");
const receivedEventItemName = document.querySelector(".received-event-item__name");


//Variável da tela de busca malsucedida
const searchFailScreen = document.querySelector(".search-fail-screen");


//Variáveis das node lists dos elementos dos inimigos
const enemiesList = document.querySelectorAll(".enemy");
const enemiesDamageList = document.querySelectorAll(".enemy__damage");
const enemiesImageList = document.querySelectorAll(".enemy__image");



//Objetos dos inimigos
const enemy1 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy2 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy3 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy4 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy5 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy6 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy7 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};

const enemy8 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0,
	sound: ""
};


//Variável com todos os Objetos dos inimigos
const enemiesObjects = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];






//Variável da dificuldade da luta
let fightDifficult = 1;


//Variável com o estado da luta
let fighting = false;

//Variável com o estado de andando
let walking = false;

//Estado do efeito de queimadura dos inimigos
let burning = false;
let burningCounter = 0;

//Variável com o estado da última luta
let LastFightDone = false;

//Variável com o estado de novo jogo mais
let newGamePlus = false;

//Variável com o estado do botão de busca
let searchButtonHidden = false;

//Variáveis do efeito de queimadura
let burningCriticalChance = 0;
let burningMinDamage = 0;
let burningMaxdamage = 0;
let burningMinCriticalDamage = 0;
let burningMaxCriticalDamage = 0;


//Imagens dos inimigos
const zombie1Image = "assets/images/enemies/zombie1.png";
const zombie2Image = "assets/images/enemies/zombie2.png";
const zombie3Image = "assets/images/enemies/zombie3.png";
const zombie4Image = "assets/images/enemies/zombie4.png";


//Objetos de áudio do jogo
const searchSound = new Audio("assets/audio/events/search_sound1.mp3");
const walkSound = new Audio("assets/audio/events/walk_sound.mp3");
const molotovSound = new Audio("assets/audio/items/molotov_sound2.mp3");
const shotgunSound = new Audio("assets/audio/weapons/shotgun_sound.mp3");
const knifeSound = new Audio("assets/audio/weapons/knife_sound.mp3");
const gunClickSound = new Audio("assets/audio/weapons/gun_click_sound.mp3");
const zombieSound = new Audio("assets/audio/enemies/zombie_sound.mp3");

//Variáveis de áudio do jogo
const zombieSound2 = "assets/audio/enemies/zombie_sound.mp3";
const playerHurtSound = "assets/audio/player/player_hurt_sound.mp3";
const playerHurtCriticalSound = "assets/audio/player/player_hurt_critical_sound.mp3";





//Variável do jogo salvo
let savedGame = null;

//Funções da tela de carregamento
window.addEventListener("load", function(){
	loadingScreen.classList.add("d-none");
});

function loadEvent(){
	loadingScreen.classList.remove("d-none");
	setTimeout(function(){
		loadingScreen.classList.add("d-none");
	}, 500);
}

//Função de salvar o jogo
function saveGameFunction(){
	window.localStorage.setItem("saved_game_key", JSON.stringify(savedGame));
	savedGame.firstPlay = true;
}

//Função de carregar o jogo
function loadGameFunction(){
	loadEvent();
	savedGame = JSON.parse(window.localStorage.getItem("saved_game_key"));
	equipedWeapon = "none";
	resetScreen();
	
}

//Função de novo jogo
function newGameFunction(){
	loadEvent();
	window.localStorage.removeItem("saved_game_key");
	loadGameFunction();
	checkGameSave();
	saveWarningScreen.classList.add("d-none");
	savedGame.hasGameSaved = true;
	resetScreen();
	savedGame.gameTextsPosition = 0;
	gameTextsScreenText.innerHTML = gameTexts[savedGame.gameTextsPosition];
}

function newGamePlusFunction(){
	loadEvent();
	savedGame.player.scenary1Progress = 0;
	LastFightDone = false;
	newGamePlus = true;
	savedGame.gameTextsPosition = 11;
	gameTextsNextButton.removeEventListener("click", newGamePlusFunction);
}

loadGameFunction();
checkGameSave();

function checkGameSave(){
	if (savedGame === null){
		equipedWeapon = "none";
		gameTextsScreen.classList.remove("d-none");
		savedGame = {
			hasGameSaved: false,
			player: {
				life: 100,
				weapons: {
					knife: true,
					knifeAmmo: "---",
					pistol: false,
		//Quando a munição for infinita, trocar por "---"
					pistolAmmo: 10,
					shotgun: false,
					shotgunAmmo: 5
				},
				itemsQuantity: {
					bandage: 0,
					medikit: 0,
					molotov: 0
				},
				craftingItemsQuantity: {
					cloth: 0,
					alcohol: 0,
					bottle: 0
				},
				scenary1Progress: 0
			},
			gameTextsPosition: 0,
			fightChance: 0,
			enemy1AppearChance: 0,
			enemy2AppearChance: 0,
			enemy3AppearChance: 0,
			enemy4AppearChance: 0,
			enemy5AppearChance: 0,
			enemy6AppearChance: 0,
			enemy7AppearChance: 0,
			enemy8AppearChance: 0,
			firstPlay: false
		};
	}

	if (savedGame.firstPlay === undefined || savedGame.firstPlay === false){
		saveWarningScreen.classList.remove("d-none");
	}
	
	saveGameFunction();
}



//Função que mostra a quantidade do item na tela baseada no elemento alvo e no nome da propriedade do objeto savedGame.player.itemsQuantity
function displayItemQuantity(targetElement, propertyName){
	targetElement.innerHTML = savedGame.player.itemsQuantity[propertyName];
}


//Função que mostra a quantidade do item de criação na tela baseada na node list dos elementos alvos e no nome da propriedade do objeto savedGame.player.craftingItemsQuantity
function displayCraftingItemQuantity(targetNodeList, propertyName){
	targetNodeList.forEach(function(element){
		element.innerHTML = savedGame.player.craftingItemsQuantity[propertyName];
	});
}



//Função de criação da bandagem
function craftBandage(){
	//Checando se a quantidade de todos os itens necessários no array é maior que 0 com o método every
	if ([
		savedGame.player.craftingItemsQuantity.cloth,
		savedGame.player.craftingItemsQuantity.alcohol
		].every(value =>{return value > 0;}))
		{
		//Fazendo as alterações
		savedGame.player.craftingItemsQuantity.cloth -= 1;
		savedGame.player.craftingItemsQuantity.alcohol -= 1;
		savedGame.player.itemsQuantity.bandage += 1;
	}
}


//Função de criação do molotov
function craftMolotov(){
	if ([
		savedGame.player.craftingItemsQuantity.cloth,
		savedGame.player.craftingItemsQuantity.bottle
		].every(value =>{return value > 0;}))
		{
		//Fazendo as alterações
		savedGame.player.craftingItemsQuantity.cloth -= 1;
		savedGame.player.craftingItemsQuantity.bottle -= 1;
		savedGame.player.itemsQuantity.molotov += 1;
	}
}


//Função que checa se tem itens de criação suficientes para criar o item e mostra ou esconde o botão de criação relacionado
function craftItemCheck(
  targetCraftButton,
	necessaryItem1,
	necessaryItem2,
	necessaryItem3,
	necessaryItem4
	){
	if ([
		necessaryItem1,
		necessaryItem2,
		necessaryItem3,
		necessaryItem4
		].some(value => {return value === 0;}))
		{
			targetCraftButton.classList.add("opacity-0", "pe-none");
		}
	else{
			targetCraftButton.classList.remove("opacity-0", "pe-none");
	}
}


//Função que checa se o jogador possui pelo menos uma unidade do item e esconde ele caso contrário
function menuItemCheck(itemName, targetNodeList, elementPosition){
	if (savedGame.player.itemsQuantity[itemName] > 0){
		targetNodeList[elementPosition].classList.remove("d-none");
	}
	else{
		targetNodeList[elementPosition].classList.add("d-none");
	}
}


//Função que checa se o jogador possui uma arma e esconde ela caso contrário
function menuWeaponCheck(weaponName, targetNodeList, elementPosition){
	if (savedGame.player.weapons[weaponName] === true){
		targetNodeList[elementPosition].classList.remove("d-none");
	}
	else{
		targetNodeList[elementPosition].classList.add("d-none");
	}
}


//Função que faz a troca da arma ou item equipado
function changedEquipedWeapon(
	weaponName,
	newHitChance,
	newCriticalChance,
	newMinDamage,
	newMaxDamage,
	newMinCriticalDamage,
	newMaxCriticalDamage)
	{
	equipedWeapon = weaponName;
	hitChance = newHitChance;
	criticalChance = newCriticalChance;
	minDamage = newMinDamage;
	maxDamage = newMaxDamage;
	minCriticalDamage = newMinCriticalDamage;
	maxCriticalDamage = newMaxCriticalDamage;
	console.log(
		equipedWeapon,
		hitChance,
		criticalChance,
		minDamage,
		maxDamage,
		minCriticalDamage,
		maxCriticalDamage
		);
}

//Função de usar item de cura
function useHealtItem(recoveredHealt, itemName){
	playerLifeBar.classList.add("life-recovery");
	playerLifeBar.addEventListener("transitionend", function(){
		playerLifeBar.classList.remove("life-recovery");
	});
	savedGame.player.life += recoveredHealt;
	savedGame.player.itemsQuantity[itemName] --;
}



//Função da porcentagem que retorna um número entre 1 e 100
function randomPercentage(){
	return Math.floor(Math.random() * (100)) + 1;
}

//Função que retorna um número aleatório entre os números mínimo e máximo passados
function randomRangeNumber(minNumber, maxNumber){
	return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}


//Função de exibir a tela de item recebido baseada nos argumentos passados
function displayReceivedItemScreen(image, quantity, name, legendary){
	receivedItemsScreen.classList.remove("d-none");
	if (legendary === true){
		receivedItemsLegendary.classList.remove("d-none");
	}
	else{
		receivedItemsLegendary.classList.add("d-none");
	}
	receivedItemsImage.src = image;
	receivedItemsQuantity.innerHTML = quantity;
	receivedItemsName.innerHTML = name;
}


//Função de exibir a tela de arma recebida baseada nos argumentos passados
function displayReceivedWeaponScreen(image, name, legendary){
	receivedWeaponScreen.classList.remove("d-none");
	if (legendary === true){
		receivedWeaponLegendary.classList.remove("d-none");
	}
	else{
		receivedWeaponLegendary.classList.add("d-none");
	}
	receivedWeaponImage.src = image;
	receivedWeaponName.innerHTML = name;
}


//Função de exibir a tela de item de evento recebido baseada nos argumentos passados
function displayReceivedEventItemScreen(image, name){
	receivedEventItemScreen.classList.remove("d-none");
	receivedEventItemImage.src = image;
	receivedEventItemName.innerHTML = name;
}


//Função de randomizar itens
function randomItems(){
	let pistolPercentage = randomPercentage();
	let shotgunPercentage = randomPercentage();
	let bandagePercentage = randomPercentage();
	let medikitPercentage = randomPercentage();
	let molotovPercentage = randomPercentage();
	let clothPercentage = randomPercentage();
	let alcoholPercentage = randomPercentage();
	let bottlePercentage = randomPercentage();
	let ammo9mmPercentage = randomPercentage();
	let ammoShotgunPercentage = randomPercentage();
	
	let pistolChance = 100;
	let shotgunChance = 100;
	let clothChance = 16;
	let alcoholChance = 28;
	let ammo9mmChance = 40;
	let ammoShotgunChance = 50;
	let bandageChance = 25;
	let bottleChance = 5;
	let molotovChance = 4;
	let medikitChance = 20;
	
	if (savedGame.player.weapons.pistolAmmo < 10 && savedGame.player.itemsQuantity.bandage >= 2){
		clothChance = 0;
		alcoholChance = 0;
		bottleChance = 0;
		ammo9mmChance = 90;
	}
	if (savedGame.player.weapons.shotgunAmmo < 5 && savedGame.player.itemsQuantity.bandage >= 2){
		ammoShotgunChance = 80;
	}
	if (savedGame.player.itemsQuantity.bandage < 2 && savedGame.player.itemsQuantity.medikit < 2){
		if (savedGame.player.craftingItemsQuantity.cloth < 2 || savedGame.player.craftingItemsQuantity.alcohol < 2){
			clothChance = 0;
			alcoholChance = 0;
			bottleChance = 0;
			molotovChance = 0;
			if (savedGame.player.weapons.pistolAmmo >= 10){
				ammo9mmChance = 0;
			}
			if (savedGame.player.weapons.shotgunAmmo >= 5){
				ammoShotgunChance = 0;
			}
			bandageChance = 90;
		}
	}
	
	if (pistolPercentage <= pistolChance && savedGame.player.weapons.pistol === false){
		displayReceivedWeaponScreen(pistolImage, "Pistola 9mm");
		savedGame.player.weapons.pistol = true;
	}
	else if (shotgunPercentage <= shotgunChance && savedGame.player.weapons.shotgun === false && savedGame.player.scenary1Progress >= 50){
		displayReceivedWeaponScreen(shotgunImage, "Escopeta");
		savedGame.player.weapons.shotgun = true;
	}
	else if (savedGame.player.scenary1Progress > 90 && LastFightDone === true && newGamePlus === false){
		thankYouNoteEventImage.classList.add("opacity-0");
		displayReceivedEventItemScreen(thankYouNoteImage, "Nota do desenvolvedor");
		const receivedEventItemOkButton = document.querySelector(".received-event-item__ok-button");
		receivedEventItemOkButton.addEventListener("click", function(){
			displayGameTextsScreen(gameTexts[savedGame.gameTextsPosition]);
			gameTextsNextButton.addEventListener("click", newGamePlusFunction);
			gameTextsNextButton.addEventListener("click", gameTextsScreenEndpointClose);
		});
	}
	else if (clothPercentage <= clothChance){
		let foundQuantity = randomRangeNumber(1, 2);
		displayReceivedItemScreen(clothImage, foundQuantity, "Pano");
		savedGame.player.craftingItemsQuantity.cloth += foundQuantity;
	}
	else if (alcoholPercentage <= alcoholChance){
		let foundQuantity = randomRangeNumber(1, 2);
		displayReceivedItemScreen(alcoholImage, foundQuantity, "Álcool");
		savedGame.player.craftingItemsQuantity.alcohol += foundQuantity;
	}
	else if (bottlePercentage <= bottleChance){
		let foundQuantity = randomRangeNumber(1, 1);
		displayReceivedItemScreen(bottleImage, foundQuantity, "Garrafa");
		savedGame.player.craftingItemsQuantity.bottle += foundQuantity;
	}
	else if (ammo9mmPercentage <= ammo9mmChance){
		let foundQuantity = randomRangeNumber(5, 15);
		displayReceivedItemScreen(ammoImage9mm, foundQuantity, "Munição de 9mm");
		savedGame.player.weapons.pistolAmmo += foundQuantity;
	}
	else if (ammoShotgunPercentage <= ammoShotgunChance && savedGame.player.scenary1Progress>= 50){
		let foundQuantity = randomRangeNumber(1, 5);
		displayReceivedItemScreen(ammoImageShotgun, foundQuantity, "Cartuchos de escopeta");
		savedGame.player.weapons.shotgunAmmo += foundQuantity;
	}
	else if (molotovPercentage <= molotovChance){
		let foundQuantity = randomRangeNumber(1, 1);
		displayReceivedItemScreen(molotovImage, foundQuantity, "Molotov");
		savedGame.player.itemsQuantity.molotov += foundQuantity;
	}
	else if (bandagePercentage <= bandageChance){
		let foundQuantity = randomRangeNumber(1, 2);
		displayReceivedItemScreen(bandageImage, foundQuantity, "Bandagem");
		savedGame.player.itemsQuantity.bandage += foundQuantity;
	}
	else if (medikitPercentage <= medikitChance){
		let foundQuantity = randomRangeNumber(1, 1);
		displayReceivedItemScreen(medikitImage, foundQuantity, "Kit médico");
		savedGame.player.itemsQuantity.medikit += foundQuantity;
	}
	else{
		searchFailScreen.classList.remove("d-none");
	}
}

//Funções de ativar os inimigos
function activateEnemy1(){
	enemiesList[0].classList.remove("opacity-0");
	enemiesList[0].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[0].src = zombie1Image;
		enemy1.life = 100;
		enemy1.hitChance = 50;
		enemy1.criticalChance = 20;
		enemy1.minDamage = 10;
		enemy1.maxDamage = 20;
		enemy1.minCriticalDamage = 25;
		enemy1.maxCriticalDamage = 35;
		enemy1.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[0].src = zombie1Image;
		enemy1.life = 100;
		enemy1.hitChance = 50;
		enemy1.criticalChance = 20;
		enemy1.minDamage = 10;
		enemy1.maxDamage = 20;
		enemy1.minCriticalDamage = 25;
		enemy1.maxCriticalDamage = 35;
		enemy1.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[0].src = zombie1Image;
		enemy1.life = 100;
		enemy1.hitChance = 50;
		enemy1.criticalChance = 20;
		enemy1.minDamage = 10;
		enemy1.maxDamage = 20;
		enemy1.minCriticalDamage = 25;
		enemy1.maxCriticalDamage = 35;
		enemy1.sound = zombieSound;
	}
	//Continuar no mesmo esquema para os próximos cenários, utilizando else if
}


function activateEnemy2(){
	enemiesList[1].classList.remove("opacity-0");
	enemiesList[1].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[1].src = zombie2Image;
		enemy2.life = 100;
		enemy2.hitChance = 50;
		enemy2.criticalChance = 20;
		enemy2.minDamage = 5;
		enemy2.maxDamage = 15;
		enemy2.minCriticalDamage = 20;
		enemy2.maxCriticalDamage = 27;
		enemy2.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[1].src = zombie2Image;
		enemy2.life = 100;
		enemy2.hitChance = 50;
		enemy2.criticalChance = 20;
		enemy2.minDamage = 5;
		enemy2.maxDamage = 15;
		enemy2.minCriticalDamage = 20;
		enemy2.maxCriticalDamage = 27;
		enemy2.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[1].src = zombie2Image;
		enemy2.life = 100;
		enemy2.hitChance = 50;
		enemy2.criticalChance = 20;
		enemy2.minDamage = 5;
		enemy2.maxDamage = 15;
		enemy2.minCriticalDamage = 20;
		enemy2.maxCriticalDamage = 27;
		enemy2.sound = zombieSound;
	}
}


function activateEnemy3(){
	enemiesList[2].classList.remove("opacity-0");
	enemiesList[2].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[2].src = zombie3Image;
		enemy3.life = 100;
		enemy3.hitChance = 50;
		enemy3.criticalChance = 20;
		enemy3.minDamage = 5;
		enemy3.maxDamage = 15;
		enemy3.minCriticalDamage = 20;
		enemy3.maxCriticalDamage = 27;
		enemy3.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[2].src = zombie3Image;
		enemy3.life = 100;
		enemy3.hitChance = 50;
		enemy3.criticalChance = 20;
		enemy3.minDamage = 5;
		enemy3.maxDamage = 15;
		enemy3.minCriticalDamage = 20;
		enemy3.maxCriticalDamage = 27;
		enemy3.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[2].src = zombie3Image;
		enemy3.life = 100;
		enemy3.hitChance = 50;
		enemy3.criticalChance = 20;
		enemy3.minDamage = 5;
		enemy3.maxDamage = 15;
		enemy3.minCriticalDamage = 20;
		enemy3.maxCriticalDamage = 27;
		enemy3.sound = zombieSound;
	}
}


function activateEnemy4(){
	enemiesList[3].classList.remove("opacity-0");
	enemiesList[3].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[3].src = zombie4Image;
		enemy4.life = 100;
		enemy4.hitChance = 50;
		enemy4.criticalChance = 20;
		enemy4.minDamage = 5;
		enemy4.maxDamage = 15;
		enemy4.minCriticalDamage = 20;
		enemy4.maxCriticalDamage = 27;
		enemy4.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[3].src = zombie4Image;
		enemy4.life = 100;
		enemy4.hitChance = 50;
		enemy4.criticalChance = 20;
		enemy4.minDamage = 5;
		enemy4.maxDamage = 15;
		enemy4.minCriticalDamage = 20;
		enemy4.maxCriticalDamage = 27;
		enemy4.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[3].src = zombie4Image;
		enemy4.life = 100;
		enemy4.hitChance = 50;
		enemy4.criticalChance = 20;
		enemy4.minDamage = 5;
		enemy4.maxDamage = 15;
		enemy4.minCriticalDamage = 20;
		enemy4.maxCriticalDamage = 27;
		enemy4.sound = zombieSound;
	}
}


function activateEnemy5(){
	enemiesList[4].classList.remove("opacity-0");
	enemiesList[4].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[4].src = zombie3Image;
		enemy5.life = 100;
		enemy5.hitChance = 50;
		enemy5.criticalChance = 20;
		enemy5.minDamage = 5;
		enemy5.maxDamage = 15;
		enemy5.minCriticalDamage = 20;
		enemy5.maxCriticalDamage = 27;
		enemy5.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[4].src = zombie3Image;
		enemy5.life = 100;
		enemy5.hitChance = 50;
		enemy5.criticalChance = 20;
		enemy5.minDamage = 5;
		enemy5.maxDamage = 15;
		enemy5.minCriticalDamage = 20;
		enemy5.maxCriticalDamage = 27;
		enemy5.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[4].src = zombie3Image;
		enemy5.life = 100;
		enemy5.hitChance = 50;
		enemy5.criticalChance = 20;
		enemy5.minDamage = 5;
		enemy5.maxDamage = 15;
		enemy5.minCriticalDamage = 20;
		enemy5.maxCriticalDamage = 27;
		enemy5.sound = zombieSound;
	}
}


function activateEnemy6(){
	enemiesList[5].classList.remove("opacity-0");
	enemiesList[5].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[5].src = zombie1Image;
		enemy6.life = 100;
		enemy6.hitChance = 50;
		enemy6.criticalChance = 20;
		enemy6.minDamage = 5;
		enemy6.maxDamage = 15;
		enemy6.minCriticalDamage = 20;
		enemy6.maxCriticalDamage = 27;
		enemy6.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[5].src = zombie2Image;
		enemy6.life = 100;
		enemy6.hitChance = 50;
		enemy6.criticalChance = 20;
		enemy6.minDamage = 5;
		enemy6.maxDamage = 15;
		enemy6.minCriticalDamage = 20;
		enemy6.maxCriticalDamage = 27;
		enemy6.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[5].src = zombie3Image;
		enemy6.life = 100;
		enemy6.hitChance = 50;
		enemy6.criticalChance = 20;
		enemy6.minDamage = 5;
		enemy6.maxDamage = 15;
		enemy6.minCriticalDamage = 20;
		enemy6.maxCriticalDamage = 27;
		enemy6.sound = zombieSound;
	}
}


function activateEnemy7(){
	enemiesList[6].classList.remove("opacity-0");
	enemiesList[6].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[6].src = zombie1Image;
		enemy7.life = 100;
		enemy7.hitChance = 50;
		enemy7.criticalChance = 20;
		enemy7.minDamage = 5;
		enemy7.maxDamage = 15;
		enemy7.minCriticalDamage = 20;
		enemy7.maxCriticalDamage = 27;
		enemy7.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[6].src = zombie3Image;
		enemy7.life = 100;
		enemy7.hitChance = 50;
		enemy7.criticalChance = 20;
		enemy7.minDamage = 5;
		enemy7.maxDamage = 15;
		enemy7.minCriticalDamage = 20;
		enemy7.maxCriticalDamage = 27;
		enemy7.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemy7.life = 100;
		enemiesImageList[6].src = zombie4Image;
		enemy7.hitChance = 50;
		enemy7.criticalChance = 20;
		enemy7.minDamage = 5;
		enemy7.maxDamage = 15;
		enemy7.minCriticalDamage = 20;
		enemy7.maxCriticalDamage = 27;
		enemy7.sound = zombieSound;
	}
}


function activateEnemy8(){
	enemiesList[7].classList.remove("opacity-0");
	enemiesList[7].classList.add("enemy-active");
	if (savedGame.player.scenary1Progress < 100 && fightDifficult === 1){
		enemiesImageList[7].src = zombie1Image;
		enemy8.life = 100;
		enemy8.hitChance = 50;
		enemy8.criticalChance = 20;
		enemy8.minDamage = 5;
		enemy8.maxDamage = 15;
		enemy8.minCriticalDamage = 20;
		enemy8.maxCriticalDamage = 27;
		enemy8.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[7].src = zombie1Image;
		enemy8.life = 100;
		enemy8.hitChance = 50;
		enemy8.criticalChance = 20;
		enemy8.minDamage = 5;
		enemy8.maxDamage = 15;
		enemy8.minCriticalDamage = 20;
		enemy8.maxCriticalDamage = 27;
		enemy8.sound = zombieSound;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[7].src = zombie1Image;
		enemy8.life = 100;
		enemy8.hitChance = 50;
		enemy8.criticalChance = 20;
		enemy8.minDamage = 5;
		enemy8.maxDamage = 15;
		enemy8.minCriticalDamage = 20;
		enemy8.maxCriticalDamage = 27;
		enemy8.sound = zombieSound;
	}
}


//Função que limpa a tela
function resetScreen(){
	const playerMenuItemsScreens = document.querySelectorAll(".player-menu-area-display__screen");
	playerMenuItemsScreens.forEach(function(screen){
		screen.classList.add("d-none");
	});
	playerMenuItemsScreens[0].classList.remove("d-none");
	
	const playerMenuAllItems = document.querySelectorAll(".player-menu-area__display li")
	playerMenuAllItems.forEach(function(item){
		item.style.backgroundColor = "#e8dcb8";
	});
	
	enemiesList.forEach(element =>{
		element.classList.add("no-transition");
	});
	playerLifeBar.classList.add("no-transition");
	
	enemiesObjects.forEach(object =>{
		object.life = 0;
	});
	
	setTimeout(function(){
		enemiesList.forEach(element =>{
			element.classList.remove("no-transition");
		});
		playerLifeBar.classList.remove("no-transition");
	}, 100)
}


//Função de luta aleatória
function randomFight(){
	let fightChanceResult = randomPercentage();
	if (fightChanceResult <= savedGame.fightChance){
	//Resetando elementos no começo da função para evitar erros visuais
		enemiesDamageList.forEach(element =>{element.classList.remove("enemy-damage-display", "enemy-damage-display-critical");});
		enemiesList.forEach(element =>{element.style.zIndex = 1;});
		let enemy1AppearResult = randomPercentage();
		let enemy2AppearResult = randomPercentage();
		let enemy3AppearResult = randomPercentage();
		let enemy4AppearResult = randomPercentage();
		let enemy5AppearResult = randomPercentage();
		let enemy6AppearResult = randomPercentage();
		let enemy7AppearResult = randomPercentage();
		let enemy8AppearResult = randomPercentage();
		
		
		if (enemy1AppearResult <= savedGame.enemy1AppearChance){
			
			activateEnemy1();
			enemy1.sound.play();
		}
		if (enemy2AppearResult <= savedGame.enemy2AppearChance){
			
			activateEnemy2();
			enemy2.sound.play();
		}
		if (enemy3AppearResult <= savedGame.enemy3AppearChance){
			
			activateEnemy3();
			enemy3.sound.play();
		}
		if (enemy4AppearResult <= savedGame.enemy4AppearChance){
			
			activateEnemy4();
			enemy4.sound.play();
		}
		if (enemy5AppearResult <= savedGame.enemy5AppearChance){
			
			activateEnemy5();
			enemy5.sound.play();
		}
		if (enemy6AppearResult <= savedGame.enemy6AppearChance){
			
			activateEnemy6();
			enemy6.sound.play();
		}
		if (enemy7AppearResult <= savedGame.enemy7AppearChance){
			
			activateEnemy7();
			enemy7.sound.play();
		}
		if (enemy8AppearResult <= savedGame.enemy8AppearChance){
			activateEnemy8();
			enemy8.sound.play();
		}
	}
}



//função que controla o progresso do jogo
function gameProgress(){
	if (savedGame.player.scenary1Progress <= 5){
		savedGame.fightChance = 0;
	}
	else if (savedGame.player.scenary1Progress > 90 && LastFightDone === true && newGamePlus === false){
		savedGame.fightChance = 0;
		searchButtonHidden = false;
		thankYouNoteEventImage.classList.remove("opacity-0");
	}
	else if (savedGame.player.scenary1Progress > 90 && LastFightDone === true && newGamePlus === true){
		savedGame.fightChance = 0;
		displayGameTextsScreen(gameTexts[savedGame.gameTextsPosition]);
		gameTextsNextButton.addEventListener("click", newGamePlusFunction);
		gameTextsNextButton.addEventListener("click", gameTextsScreenEndpointClose);
	}
	else if (savedGame.player.scenary1Progress > 5 && savedGame.player.scenary1Progress <= 50){
		savedGame.fightChance = 50;
		fightDifficult = 1;
		savedGame.enemy1AppearChance = 0;
		savedGame.enemy2AppearChance = 0;
		savedGame.enemy3AppearChance = 0;
		savedGame.enemy4AppearChance = 0;
		savedGame.enemy5AppearChance = 0;
		savedGame.enemy6AppearChance = 10;
		savedGame.enemy7AppearChance = 20;
		savedGame.enemy8AppearChance = 100;
	}
	else if (savedGame.player.scenary1Progress > 50 && savedGame.player.scenary1Progress < 90){
		savedGame.fightChance = 70;
		fightDifficult = 2;
		savedGame.enemy1AppearChance = 0;
		savedGame.enemy2AppearChance = 0;
		savedGame.enemy3AppearChance = 0;
		savedGame.enemy4AppearChance = 0;
		savedGame.enemy5AppearChance = 0;
		savedGame.enemy6AppearChance = 20;
		savedGame.enemy7AppearChance = 30;
		savedGame.enemy8AppearChance = 100;
	}
	else if (savedGame.player.scenary1Progress === 90 && LastFightDone === false){
		savedGame.fightChance = 100;
		fightDifficult = 3;
		savedGame.enemy1AppearChance = 100;
		savedGame.enemy2AppearChance = 100;
		savedGame.enemy3AppearChance = 100;
		savedGame.enemy4AppearChance = 100;
		savedGame.enemy5AppearChance = 100;
		savedGame.enemy6AppearChance = 100;
		savedGame.enemy7AppearChance = 100;
		savedGame.enemy8AppearChance = 100;
	}
	
	
	
	//Salvamento automático do jogo
	const autoSavePoints = [
		savedGame.player.scenary1Progress === 5,
		savedGame.player.scenary1Progress === 25,
		savedGame.player.scenary1Progress === 55,
		savedGame.player.scenary1Progress === 75,
		savedGame.player.scenary1Progress === 100,
		];
	
	if (autoSavePoints.some(item =>{return item === true;})){
		saveGameFunction();
	}
}


//Função de ataque individual dos inimigos
function enemyAttackFunction(objectPosition){
	const enemySound = new Audio(zombieSound2);
	enemySound.play();
	if (enemiesList[objectPosition].classList.contains("enemy-active")){
		enemiesList[objectPosition].classList.add("enemy-attacking");
		enemiesList[objectPosition].style.zIndex = 3;
		enemiesList[objectPosition].addEventListener("animationend", function(){
			enemiesList[objectPosition].classList.remove("enemy-attacking");
			enemiesList[objectPosition].style.zIndex = 1;
			screenDamageArea.classList.add("d-none");
			screenBloodArea.classList.add("d-none");
		});
		
		
		let enemyHitChanceResult = randomPercentage();
		let enemyCriticalChanceResult = randomPercentage();
		let playerReceivedDamage;
		
		if (enemyHitChanceResult <= enemiesObjects[objectPosition].hitChance){
			const playerHurtedSound = new Audio(playerHurtSound);
			playerHurtedSound.play();
			playerReceivedDamage = randomRangeNumber(
				enemiesObjects[objectPosition].minDamage, enemiesObjects[objectPosition].maxDamage
				);
				savedGame.player.life -= playerReceivedDamage;
				screenDamageArea.classList.remove("d-none");
		}
		
		else if (enemyCriticalChanceResult <= enemiesObjects[objectPosition].criticalChance){
			const playerHurtedCriticalSound = new Audio(playerHurtCriticalSound);
			playerHurtedCriticalSound.play();
			playerReceivedDamage = randomRangeNumber(
				enemiesObjects[objectPosition].minCriticalDamage, enemiesObjects[objectPosition].maxCriticalDamage
				);
			savedGame.player.life -= playerReceivedDamage;
			screenDamageArea.classList.remove("d-none");
			screenBloodArea.classList.remove("d-none");
		}
	}
}




//Função de ataque dos inimigos
function enemiesAttackFunction(){
	if (burning === true){
		burningEffect();
	}
	let enemy1Attack = false;
	let enemy2Attack = false;
	let enemy3Attack = false;
	let enemy4Attack = false;
	let enemy5Attack = false;
	let enemy6Attack = false;
	let enemy7Attack = false;
	let enemy8Attack = false;
	
	
	function waitAttack(){
		if (!enemiesList[7].classList.contains("enemy-active")){
			enemy8Attack = true;
		}
		if (!enemiesList[6].classList.contains("enemy-active")){
			enemy7Attack = true;
		}
		if (!enemiesList[5].classList.contains("enemy-active")){
			enemy6Attack = true;
		}
		if (!enemiesList[4].classList.contains("enemy-active")){
			enemy5Attack = true;
		}
		if (!enemiesList[3].classList.contains("enemy-active")){
			enemy4Attack = true;
		}
		if (!enemiesList[2].classList.contains("enemy-active")){
			enemy3Attack = true;
		}
		if (!enemiesList[1].classList.contains("enemy-active")){
			enemy2Attack = true;
		}
		if (!enemiesList[0].classList.contains("enemy-active")){
			enemy1Attack = true;
		}
		
		
		if (enemy8Attack === false){
			enemyAttackFunction(7);
			enemy8Attack = true;
		}
		else if (enemy7Attack === false){
			enemyAttackFunction(6);
			enemy7Attack = true;
		}
		else if (enemy6Attack === false){
			enemyAttackFunction(5);
			enemy6Attack = true;
		}
		else if (enemy5Attack === false){
			enemyAttackFunction(4);
			enemy5Attack = true;
		}
		else if (enemy4Attack === false){
			enemyAttackFunction(3);
			enemy4Attack = true;
		}
		else if (enemy3Attack === false){
			enemyAttackFunction(2);
			enemy3Attack = true;
		}
		else if (enemy2Attack === false){
			enemyAttackFunction(1);
			enemy2Attack = true;
		}
		else if (enemy1Attack === false){
			enemyAttackFunction(0);
			enemy1Attack = true;
		}
	}
	
	const checkEnemiesTurn = setInterval(function(){
		if (
				enemy1Attack === true &&
				enemy2Attack === true &&
				enemy3Attack === true &&
				enemy4Attack === true &&
				enemy5Attack === true &&
				enemy6Attack === true &&
				enemy7Attack === true &&
				enemy8Attack === true ||
				savedGame.player.life <= 0 ||
				fighting === false){
	//Checando se essa é a luta final e fazendo algo logo após ela acabar
				  if (fighting === false && savedGame.player.scenary1Progress === 90 && enemiesObjects.every(object =>{return object.life <= 0;})){
				  	LastFightDone = true;
				  	searchButtonHidden = true;
				  }
				  
	//Salvando o jogo logo após a luta acabar
				  if (fighting === false && enemiesObjects.every(object =>{return object.life <= 0;})){
				  	saveGameFunction();
				  }
				  
					clearInterval(enemiesInterval);
					clearInterval(checkEnemiesTurn);

					setTimeout(function(){
						document.body.classList.remove("pe-none");
					}, 1000);
		}
	}, 100);
	
	const enemiesInterval = setInterval(waitAttack, 1500);
}

//Função de dano de queimadura
function burningEffect(){
	enemiesDamageList.forEach(function(element, index){
		let enemyReceivedDamage;
		let criticalChanceResult = randomPercentage();
		let criticalHit;
		if (criticalChanceResult <= burningCriticalChance){
			enemyReceivedDamage = randomRangeNumber(burningMinCriticalDamage, burningMaxCriticalDamage);
			criticalHit = true;
		}
		else{
			enemyReceivedDamage = burningMinDamage;
			criticalHit = false;
		}
		
		if (enemiesList[index].classList.contains("enemy-active")){
			element.style.cssText = "font-style: normal; font-weight: bold";
			enemiesObjects[index].life -= enemyReceivedDamage;
			enemiesDamageList[index].innerHTML = enemyReceivedDamage;
			if (criticalHit === true){	enemiesDamageList[index].classList.add("enemy-damage-display-critical");
			}
			
			else{
				enemiesDamageList[index].classList.add("enemy-damage-display");
			}
			if (enemiesObjects[index].life <= 0){
				//enemiesObjects[index].sound.play();
			}
		}
	});
	
	enemiesDamageList.forEach(element =>{
		element.addEventListener("animationend", function(){
			element.classList.remove("enemy-damage-display", "enemy-damage-display-critical");
		});
	});
	burningCounter ++;
}



//Função que abre a tela de texto do jogo e atribui algo à ela
function displayGameTextsScreen(text){
	gameTextsScreen.classList.remove("d-none");
	gameTextsScreenText.innerHTML = text;
}


//Função da ação de busca
function searchAction(){
	if (savedGame.player.scenary1Progress === 0){
		savedGame.fightChance = 0;
		savedGame.player.scenary1Progress += 5;
	}
	else{
	//Aumentar mais as dificuldades, como chance dos inimigos aparecerem e a dificuldade da luta
		savedGame.enemy8AppearChance += 10;
		savedGame.enemy7AppearChance += 3;
		savedGame.enemy6AppearChance += 2;
		savedGame.enemy5AppearChance += 1;
		savedGame.enemy4AppearChance += 1;
		savedGame.enemy3AppearChance += 1;
		savedGame.enemy2AppearChance += 1;
		savedGame.enemy1AppearChance += 1;
	//Os inimigos não vão aparecer se a chance de luta não for suficiente pra entrar em um luta
		savedGame.fightChance += 10;
	}
		randomItems();
	const receivedItemsOkButton = document.querySelector(".received-items__ok-button");
	const receivedWeaponOkButton = document.querySelector(".received-weapon__ok-button");
  const searchFailOkButton = document.querySelector(".search-fail__ok-button");
  receivedItemsOkButton.addEventListener("click", randomFight);
  receivedWeaponOkButton.addEventListener("click", randomFight);
  searchFailOkButton.addEventListener("click", randomFight);
}


//Função da ação de ataque
function attackAction(){
	document.body.classList.add("pe-none");
	let enemyPosition = randomRangeNumber(0, 7);
	while (!enemiesList[enemyPosition].classList.contains("enemy-active")){
		enemyPosition = randomRangeNumber(0, 7);
	};

	let enemyReceivedDamage;
	let hits = 1;
	let hitsDone = 0;
	
	let hitChanceResult = randomPercentage();
	let criticalChanceResult = randomPercentage();
	if (criticalChanceResult <= criticalChance){
		enemyReceivedDamage = randomRangeNumber(minCriticalDamage, maxCriticalDamage);
	}
	else{
		enemyReceivedDamage = randomRangeNumber(minDamage, maxDamage);
	}
	
	
	//Checando a arma equipada
	if (equipedWeapon === "knife"){
		hits = 1;
		hitsDone ++;
				
		let enemyPosition = randomRangeNumber(0, 7);
		
		while (!enemiesList[enemyPosition].classList.contains("enemy-active")){
			enemyPosition = randomRangeNumber(0, 7);
		}
		knifeAttack(enemyPosition);
	
		function knifeAttack(position){
		knifeSound.play();
		knifeSound.addEventListener("playing", function(){
			setTimeout(function(){
					let hitChanceResult = randomPercentage();
					let criticalChanceResult = randomPercentage();
					let criticalHit;
					if (criticalChanceResult <= criticalChance){
						enemyReceivedDamage = randomRangeNumber(minCriticalDamage, maxCriticalDamage);
						criticalHit = true;
					}
					else{
						enemyReceivedDamage = randomRangeNumber(minDamage, maxDamage);
						criticalHit = false;
					}
						
					if (hitChanceResult <= hitChance){
						enemiesDamageList[position].style.cssText = "font-style: normal; font-weight: bold";
						enemiesObjects[position].life -= enemyReceivedDamage;
						enemiesDamageList[position].innerHTML = enemyReceivedDamage;
						if (criticalHit === true){	enemiesDamageList[position].classList.add("enemy-damage-display-critical");
						}
						
						else{
							enemiesDamageList[position].classList.add("enemy-damage-display");
						}
						if (enemiesObjects[position].life <= 0){
							//enemiesObjects[position].sound.play();
						}
					}
					else{
						if (enemiesObjects[position].life > 0){
							enemiesDamageList[position].style.cssText = "font-style: italic; font-weight: normal";
							enemiesDamageList[position].innerHTML = "errou";
							enemiesDamageList[position].classList.add("enemy-damage-display");
						}
					}
					
					enemiesDamageList[position].addEventListener("animationend", function(){
						enemiesDamageList[position].classList.remove("enemy-damage-display", "enemy-damage-display-critical");
					});
			}, 200);
			}, {once : true});
		}
	}

	else if (equipedWeapon === "pistol"){
		if (savedGame.player.weapons.pistolAmmo === 0){
			gunClickSound.play();
			enemiesAttackFunction();
			return;
		}
		else{
		  let multipleHitChance = randomPercentage();
		  if (multipleHitChance <= 50){
		  	hits = randomRangeNumber(2, 3);
		  }
		  
		  pistolAttack();
	//setInterval apenas para armas que dão mais de um tiro ou golpe
	//Lembrar de mudar o tempo do intervalo aqui em cima e o delay de remover a classe do enemiesDamageList lá embaixo de acordo com a velocidade da arma
			const attacking = setInterval(pistolAttack, 1500);
			const checkPistolAttack = setInterval(checkPistolHits, 100);
			
			function checkPistolHits(){
				if (hitsDone === hits || savedGame.player.weapons.pistolAmmo === 0 || fighting === false){
					clearInterval(attacking);
					clearInterval(checkPistolAttack);
					hitsDone = hits;
				}
			}
			
		  
		  function pistolAttack(){
		  	const pistolSound = new Audio("assets/audio/weapons/handgun_sound.mp3");
		  	pistolSound.play();
		  	pistolSound.addEventListener("playing", function(){
		  		setTimeout(function(){
						hitsDone ++;
						savedGame.player.weapons.pistolAmmo -= 1;
						let hitChanceResult = randomPercentage();
						let criticalChanceResult = randomPercentage();
						let criticalHit;
						if (criticalChanceResult <= criticalChance){
							enemyReceivedDamage = randomRangeNumber(minCriticalDamage, maxCriticalDamage);
							criticalHit = true;
						}
						else{
							enemyReceivedDamage = randomRangeNumber(minDamage, maxDamage);
							criticalHit = false;
						}
			
						enemyPosition = randomRangeNumber(0, 7);
						while (!enemiesList[enemyPosition].classList.contains("enemy-active")){
							enemyPosition = randomRangeNumber(0, 7);
						}
							
						if (hitChanceResult <= hitChance){
							enemiesDamageList[enemyPosition].style.cssText = "font-style: normal; font-weight: bold";
							enemiesObjects[enemyPosition].life -= enemyReceivedDamage;
							if (enemiesObjects[enemyPosition].life <= 0){
								//enemiesObjects[enemyPosition].sound.play();
							}
							enemiesDamageList[enemyPosition].innerHTML = enemyReceivedDamage;
							if (criticalHit === true){	enemiesDamageList[enemyPosition].classList.add("enemy-damage-display-critical");
							}
							
							else{
								enemiesDamageList[enemyPosition].classList.add("enemy-damage-display");
							}
						}
						else{
							enemiesDamageList[enemyPosition].style.cssText = "font-style: italic; font-weight: normal";
							enemiesDamageList[enemyPosition].innerHTML = "errou";
							enemiesDamageList[enemyPosition].classList.add("enemy-damage-display");
						}
		  		}, 300);
		  	});
		  }
		}
	}
	
	
	
	else if (equipedWeapon === "shotgun"){
		if (savedGame.player.weapons.shotgunAmmo === 0){
			gunClickSound.play();
			enemiesAttackFunction();
			return;
		}
		else{
			hits = 1;
			savedGame.player.weapons.shotgunAmmo -= 1
			hitsDone ++;
			
	//Fazendo a função sempre atacar inimigos diferentes
			
			let activeEnemies = document.querySelectorAll(".enemy-active").length;
			
		  let enemyPosition1 = randomRangeNumber(0, 7);
		  let enemyPosition2 = randomRangeNumber(0, 7);
			
			if (activeEnemies > 1){
				while (!enemiesList[enemyPosition1].classList.contains("enemy-active")){
					enemyPosition1 = randomRangeNumber(0, 7);
				}
				
				while (!enemiesList[enemyPosition2].classList.contains("enemy-active") || enemyPosition2 === enemyPosition1){
					enemyPosition2 = randomRangeNumber(0, 7);
				}
				
				shotgunAttack(enemyPosition1);
				shotgunAttack(enemyPosition2);
			}
			
			else{
				while (!enemiesList[enemyPosition1].classList.contains("enemy-active")){
					enemyPosition1 = randomRangeNumber(0, 7);
				}
				shotgunAttack(enemyPosition1);
			}
			
		  function shotgunAttack(position){
		  	shotgunSound.play();
		  	shotgunSound.addEventListener("playing", function(){
		  		setTimeout(function(){
						let hitChanceResult = randomPercentage();
						let criticalChanceResult = randomPercentage();
						let criticalHit;
						if (criticalChanceResult <= criticalChance){
							enemyReceivedDamage = randomRangeNumber(minCriticalDamage, maxCriticalDamage);
							criticalHit = true;
						}
						else{
							enemyReceivedDamage = randomRangeNumber(minDamage, maxDamage);
							criticalHit = false;
						}
							
						if (hitChanceResult <= hitChance){
							enemiesDamageList[position].style.cssText = "font-style: normal; font-weight: bold";
							enemiesObjects[position].life -= enemyReceivedDamage;
							enemiesDamageList[position].innerHTML = enemyReceivedDamage;
							if (criticalHit === true){	enemiesDamageList[position].classList.add("enemy-damage-display-critical");
							}
							
							else{
								enemiesDamageList[position].classList.add("enemy-damage-display");
							}
							if (enemiesObjects[position].life <= 0){
								//enemiesObjects[position].sound.play();
							}
						}
						else{
							if (enemiesObjects[position].life > 0){
								enemiesDamageList[position].style.cssText = "font-style: italic; font-weight: normal";
								enemiesDamageList[position].innerHTML = "errou";
								enemiesDamageList[position].classList.add("enemy-damage-display");
							}
						}
						
						enemiesDamageList[position].addEventListener("animationend", function(){
							enemiesDamageList[position].classList.remove("enemy-damage-display", "enemy-damage-display-critical");
						});
		  		}, 200);
				}, {once : true});
			}
		}
	}
	
	
	else if (equipedWeapon === "molotov"){
		if (savedGame.player.itemsQuantity.molotov === 0){
			enemiesAttackFunction();
			return;
		}
		else{
			hits = 1;
			savedGame.player.itemsQuantity.molotov -= 1;
			molotovAttack();
		  
		  function molotovAttack(){
		  	molotovSound.play();
		  	molotovSound.addEventListener("ended", function(){
		  	burningCounter = 0
		  	burning = true;
		  	hitsDone ++;
				burningCriticalChance = 10;
				burningMinDamage = 35;
				burningMaxdamage = 35;
				burningMinCriticalDamage = 100;
				burningMaxCriticalDamage = 300;
				
				enemiesDamageList.forEach(function(element, index){
					let criticalChanceResult = randomPercentage();
					let criticalHit;
					if (criticalChanceResult <= criticalChance){
						enemyReceivedDamage = randomRangeNumber(minCriticalDamage, maxCriticalDamage);
						criticalHit = true;
					}
					else{
						enemyReceivedDamage = minDamage;
						criticalHit = false;
					}
					
					if (enemiesList[index].classList.contains("enemy-active")){
						element.style.cssText = "font-style: normal; font-weight: bold";
						enemiesObjects[index].life -= enemyReceivedDamage;
						enemiesDamageList[index].innerHTML = enemyReceivedDamage;
						if (criticalHit === true){	enemiesDamageList[index].classList.add("enemy-damage-display-critical");
						}
						
						else{
							enemiesDamageList[index].classList.add("enemy-damage-display");
						}
						if (enemiesObjects[index].life <= 0){
							//enemiesObjects[index].sound.play();
						}
					}
				});
				
				enemiesDamageList.forEach(element =>{
					element.addEventListener("animationend", function(){
						element.classList.remove("enemy-damage-display", "enemy-damage-display-critical");
					});
				});
		  	}, {once: true});
		  }
		}
	}
	
	function checkHitsDone(){
		if (hitsDone === hits){
			clearInterval(checkPlayerTurn);
			if (fighting === false){
				setTimeout(function(){
					document.body.classList.remove("pe-none");
					}, 1000);
			}
	  //Função do turno dos zumbis
		//Chamar a função depois que o som da arma terminar (quando adicionar som ao jogo)
			if (burning === true){
				setTimeout(enemiesAttackFunction, 2000);
			}
			else{
			enemiesAttackFunction();
			}
		}
	}
	
	enemiesDamageList.forEach(element =>{
		element.addEventListener("animationend", function(){
			element.classList.remove("enemy-damage-display", "enemy-damage-display-critical");
		});
	});
	
	const checkPlayerTurn = setInterval(checkHitsDone, 100);
  
//Checando se essa é a luta final e fazendo algo logo após ela acabar
  if (fighting === true && savedGame.player.scenary1Progress === 90 && enemiesObjects.every(object =>{return object.life <= 0;})){
  	LastFightDone = true;
  	searchButtonHidden = true;
  }
  
  //Salvando o jogo logo após a luta acabar
  if (fighting === true && enemiesObjects.every(object =>{return object.life <= 0;})){
  	saveGameFunction();
  }
}


//Função da ação de andar
function walkAction(){
	savedGame.player.scenary1Progress += 10;
	progressControlFunction();
	gameProgress();
	randomFight();
}

//Função para fechar a tela de texto quando chegar no texto limite
function gameTextsScreenEndpointClose(){
			gameTextsScreen.classList.add("d-none");
			savedGame.gameTextsPosition ++;
			saveGameFunction()
			gameTextsNextButton.removeEventListener("click", gameTextsScreenEndpointClose);
		}
		
//Função do botão de avançar o texto do jogo
gameTextsNextButton.addEventListener("click", function(){
	const textArea = document.querySelector(".game-texts__text-area");
	textArea.scrollTo(0, 0);
	if (savedGame.gameTextsPosition === 0){
		savedGame.gameTextsPosition ++;
	}
	//Array com as posições para fechar a tela de texto
	const endPositions = [savedGame.gameTextsPosition === 11
	];
	//Checando as afirmações do array e fechando a tela caso alguma seja verdadeira
	if (endPositions.some(item =>{return item === true;})){
		gameTextsScreenText.innerHTML = gameTexts[savedGame.gameTextsPosition];
		gameTextsNextButton.addEventListener("click", gameTextsScreenEndpointClose);
	}
	else{
			gameTextsScreenText.innerHTML = gameTexts[savedGame.gameTextsPosition];
			savedGame.gameTextsPosition ++;
	}
});


//Ações dos botões de criar item
craftBandageButton.addEventListener("click", function(){
	const craftBandageSound = new Audio("assets/audio/craft/craft_bandage_sound.mp3");
	craftBandageSound.play();
	let craftingDone = false;
	craftingProgressScreen.classList.remove("d-none");
	craftingProgressScreenBar.classList.add("crafting-bar-animation");
	craftingProgressScreenBar.addEventListener("animationend", function(){
		craftingProgressScreen.classList.add("d-none");
		craftingProgressScreenBar.classList.remove("crafting-bar-animation");
		if (craftingDone === false){
			craftBandage();
			craftingDone = true;
		}
	});
	}
);

craftMolotovButton.addEventListener("click", function(){
	const craftMolotovSound = new Audio("assets/audio/craft/craft_molotov_sound.mp3");
	craftMolotovSound.play();
	let craftingDone = false;
	craftingProgressScreen.classList.remove("d-none");
	craftingProgressScreenBar.classList.add("crafting-bar-animation");
	craftingProgressScreenBar.addEventListener("animationend", function(){
		craftingProgressScreen.classList.add("d-none");
		craftingProgressScreenBar.classList.remove("crafting-bar-animation");
		if (craftingDone === false){
			craftMolotov();
			craftingDone = true;
		}
	});
	}
);


//Ações dos botões de equipar armas e itens
knifeEquipButton.addEventListener("click", function(){
	changedEquipedWeapon("knife", 100, 20, 50, 60, 100, 120);
});
pistolEquipButton.addEventListener("click", function(){
	changedEquipedWeapon("pistol", 82, 30, 50, 70, 100, 150);
});
shotgunEquipButton.addEventListener("click", function(){
	changedEquipedWeapon("shotgun", 75, 0, 100, 200);
});
molotovEquipButton.addEventListener("click", function(){
	changedEquipedWeapon("molotov", 100, 10, 35, 35, 100, 300);
});


//Ações dos botões de usar itens
bandageUseButton.addEventListener("click", function(){
	const bandageSound = new Audio("assets/audio/items/bandage_sound.mp3");
	bandageSound.play();
	setTimeout(function(){
		useHealtItem(30, "bandage");
	}, 500);
});

medikitUseButton.addEventListener("click", function(){
	const medikitSound = new Audio("assets/audio/items/medikit_sound1.mp3");
	medikitSound.play();
	setTimeout(function(){
		useHealtItem(70, "medikit");
	}, 500);
});


//Ações dos botões de ações
searchButton.addEventListener("click", function(){
	searchSound.play();
	setTimeout(function(){
		let searchDone = false;
		searchScreen.classList.remove("d-none");
		searchScreenBar.classList.add("search-bar-animation");
		searchScreenBar.addEventListener("animationend", function(){
			searchScreen.classList.add("d-none");
			searchScreenBar.classList.remove("search-bar-animation");
			if (searchDone === false){
				searchAction();
				searchDone = true;
			}
		});
	}, 100);
});


attackButton.addEventListener("click", function(){
	attackAction();
});

passTurnButton.addEventListener("click", function(){
	document.body.classList.add("pe-none");
	enemiesAttackFunction();
});

walkButton.addEventListener("click", function(){
	walkSound.play();
	setTimeout(function(){
	walking = true;
	mainScreen.classList.add("walk-animation");
	document.body.classList.add("pe-none");
	mainScreen.addEventListener("animationend", function(){
		if (walking === true){
			walking = false;
			mainScreen.classList.remove("walk-animation");
			walkAction();
			document.body.classList.remove("pe-none");
		}
	});
	}, 200);
});


//Ações dos botões do menu principal
newGameConfirmButton.addEventListener("click", newGameFunction);

loadGameConfirmButton.addEventListener("click", loadGameFunction);

saveGameConfirmButton.addEventListener("click", saveGameFunction);

//Botão de novo jogo
newGameButton.addEventListener("click", function(){
	const menuScreen = document.querySelector(".menu-screen");
	const newGameScreen = document.querySelector(".new-game-screen");
	if (savedGame.hasGameSaved === true){
		newGameScreen.classList.remove("d-none");
	}
	else{
		menuScreen.classList.add("d-none");
		newGameFunction();
	}
});


//Função da mudança da munição atual
function changeEquipedAmmo(type, name) {
	setTimeout(() => {
		if (type === "ammo") {
			displayedAmmoQuantity.innerHTML = savedGame.player.weapons[name];
		}
		else if (type === "item") {
			displayedAmmoQuantity.innerHTML = savedGame.player.itemsQuantity[name];
		}
	}, 300);
}



//Principal função de exibição do jogo
function mainDisplayFunction(){
	//Itens gerais
	displayItemQuantity(displayedBandageQuantity, "bandage");
	displayItemQuantity(displayedMedikitQuantity, "medikit");
	displayItemQuantity(displayedMolotovQuantity, "molotov");
	//Itens de criação
	displayCraftingItemQuantity(displayedClothQuantity, "cloth");
	displayCraftingItemQuantity(displayedAlcoholQuantity, "alcohol");
	displayCraftingItemQuantity(displayedBottleQuantity, "bottle");
	//Checando se o jogador está em uma luta
	if (fighting === true){
		searchButton.classList.add("opacity-0", "pe-none");
		walkButton.classList.add("opacity-0", "pe-none");
		attackButton.classList.remove("opacity-0", "pe-none");
		passTurnButton.classList.remove("opacity-0", "pe-none");
	}
	else{
		searchButton.classList.remove("opacity-0", "pe-none");
		walkButton.classList.remove("opacity-0", "pe-none");
		attackButton.classList.add("pe-none");
		passTurnButton.classList.add("opacity-0", "pe-none");
	}
	
	//Validando os botões do menu principal
	if (fighting === true || savedGame.hasGameSaved === false){
		saveGameButton.classList.add("disabled-menu-button");
	}
	else{
		saveGameButton.classList.remove("disabled-menu-button");
	}
	if (savedGame.hasGameSaved === false){
		loadGameButton.classList.add("disabled-menu-button");
	}
	else{
		loadGameButton.classList.remove("disabled-menu-button");
	}
	
	//Checando a arma equipada
	if (equipedWeapon === "none"){
		displayedAmmoQuantity.innerHTML = "?";
		attackButton.classList.add("opacity-0", "pe-none");
	}
	else if (equipedWeapon !== "none"){
		setTimeout(() => {
			attackButton.classList.remove("opacity-0");
		}, 300);
	}
  if (equipedWeapon === "knife"){
	changeEquipedAmmo("ammo", "knifeAmmo");
      }
  else if (equipedWeapon === "pistol"){
	changeEquipedAmmo("ammo", "pistolAmmo");
	}
  else if (equipedWeapon === "shotgun"){
	changeEquipedAmmo("ammo", 'shotgunAmmo');
	}
  else if (equipedWeapon === "molotov"){
	changeEquipedAmmo("item", "molotov");
  }
	//Validando os botões de criação de item
	craftItemCheck(
		craftBandageButton,
		savedGame.player.craftingItemsQuantity.cloth,
		savedGame.player.craftingItemsQuantity.alcohol
		);
		
	craftItemCheck(
		craftMolotovButton,
		savedGame.player.craftingItemsQuantity.cloth,
		savedGame.player.craftingItemsQuantity.bottle
		);
		//Checando se o jogador possui os itens no menu do jogador
		menuItemCheck("bandage", playerMenuConsumablesList, 0);
		menuItemCheck("medikit", playerMenuConsumablesList, 1);
		menuItemCheck("molotov", playerMenuOthersList, 0);
		//Checando se o jogador possui as armas no menu do jogador
		menuWeaponCheck("knife", playerMenuWeaponsList, 0);
		menuWeaponCheck("pistol", playerMenuWeaponsList, 1);
		menuWeaponCheck("shotgun", playerMenuWeaponsList, 2);
		//Checando se é o início do jogo
		if (savedGame.player.scenary1Progress === 0){
			walkButton.classList.add("opacity-0", "pe-none");
		}
		//Alterando a exibição do botão de busca de acordo com o progresso no jogo
		if (savedGame.player.scenary1Progress === 5 || searchButtonHidden === true){
			searchButton.classList.add("opacity-0", "pe-none");
		}
	//Checando se é o fim do cenário 1
		if (savedGame.player.scenary1Progress === 100){
			walkButton.classList.add("opacity-0", "pe-none");
		}
		
	//Checando a vida dos inimigos e fazendo eles sumirem caso a vida seja 0
	enemiesObjects.forEach(function(object, objectIndex){
		if (object.life <= 0){
			enemiesList[objectIndex].classList.add("opacity-0");
			enemiesList[objectIndex].classList.remove("enemy-active");
		}
	});
	//Mostrando a vida do jogador
	playerLifeBar.style.height = `${savedGame.player.life}%`;
	if (savedGame.player.life >= 60){
		playerLifeBarImage.src = "assets/images/screen/healt_line_fine.png";
	//Caso queira fazer a vida mudar de cor depois que a transição acabar
		/*
		playerLifeBar.addEventListener("transitionend", function(){
			playerLifeBarImage.src = "assets/images/screen/healt_line_fine.png";
		});
		*/
	}
	else if (savedGame.player.life < 60 && savedGame.player.life > 30){
		playerLifeBarImage.src = "assets/images/screen/healt_line_warning.png";
		/*
		playerLifeBar.addEventListener("transitionend", function(){
			playerLifeBarImage.src = "assets/images/screen/healt_line_warning.png";
		});
		*/
	}
	else if (savedGame.player.life < 30 && savedGame.player.life > 0){
		playerLifeBarImage.src = "assets/images/screen/healt_line_danger.png";
		/*
		playerLifeBar.addEventListener("transitionend", function(){
			playerLifeBarImage.src = "assets/images/screen/healt_line_danger.png";
		});
		*/
	}
	//Mostrando os eventos na área de ventos
	if (burning === true){
		fireEventImage.classList.remove("opacity-0");
	}
	else{
		fireEventImage.classList.add("opacity-0");
	}
}


//Principal função de controle do jogo
function mainControlFunction(){
	//Prevenindo a vida dos inimigos de ficar negativa
	enemiesObjects.forEach(function(object, objectIndex){
		if (object.life <= 0){
			enemiesObjects[objectIndex].life = 0;
		}
	});
	//Prevenindo que a propriedade fightChance ultrapasse 100
	if (savedGame.fightChance > 100){
		savedGame.fightChance = 100;
	}
	//Checando se o jogador está numa luta
	if (enemiesList[0].classList.contains("opacity-0") && enemiesList[1].classList.contains("opacity-0") && enemiesList[2].classList.contains("opacity-0") && enemiesList[3].classList.contains("opacity-0") && enemiesList[4].classList.contains("opacity-0") && enemiesList[5].classList.contains("opacity-0") && enemiesList[6].classList.contains("opacity-0") && enemiesList[7].classList.contains("opacity-0")){
		fighting = false;
	}
	else{
		fighting = true;
	}
	//Prevenindo que a vida do jogador fique abaixo de 0 ou acima de 100
	if (savedGame.player.life > 100){
		savedGame.player.life = 100;
	}
	else if (savedGame.player.life < 0){
		savedGame.player.life = 0;
	}
	//Ação caso o jogador morra
	if (savedGame.player.life === 0){
		gameTextsNextButton.classList.add("d-none");
		gameTextsCheckpointButton.classList.remove("d-none");
		
		displayGameTextsScreen("Você morreu");
		
		gameTextsCheckpointButton.addEventListener("click", function(){
			
			resetScreen();
			loadGameFunction();
			
			gameTextsScreen.classList.add("d-none");
			gameTextsNextButton.classList.remove("d-none");
			gameTextsCheckpointButton.classList.add("d-none");
		});
	}
	//Checando o estado de queimadura dos inimigos
	if (burningCounter === 2 || fighting === false){
		burning = false;
		burningCounter = 0;
	}
}

//Função que previne o progresso dos cenários de ultrapassar o limite de evento final e limite de 100
function progressControlFunction(){
	if (savedGame.player.scenary1Progress > 90 && LastFightDone === false){
		savedGame.player.scenary1Progress = 90;
	}
	else if (savedGame.player.scenary1Progress > 100){
		savedGame.player.scenary1Progress = 100;
	}
}

function checkUpdates() {
	if (savedGame.enemy1AppearChance === undefined){
		savedGame.enemy1AppearChance = 0;
		savedGame.enemy2AppearChance = 0;
		savedGame.enemy3AppearChance = 0;
		savedGame.enemy4AppearChance = 0;
		savedGame.enemy5AppearChance = 0;
		savedGame.enemy6AppearChance = 0;
		savedGame.enemy7AppearChance = 0;
		savedGame.enemy8AppearChance = 0;
		gameProgress();
	}
		
	if (savedGame.player.weapons.knife === undefined){
		savedGame.player.weapons.knife = true;
		savedGame.player.weapons.knifeAmmo = "---";
	}	
}


//Chamando a função checkUpdates
setInterval(checkUpdates, 100);

//Chamando a função mainDisplayFunction constantemente
setInterval(mainDisplayFunction, 100);

//Chamando a função mainControlFunction constantemente
setInterval(mainControlFunction, 100);

//Chamando a função gameProgress
gameProgress();

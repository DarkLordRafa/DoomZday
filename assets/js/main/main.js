
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
const pistolEquipButton = document.querySelector("#pistol-equip-button");
const molotovEquipButton = document.querySelector("#molotov-equip-button");

//Botões de ação do jogador
const attackButton = document.querySelector(".actions-area__attack-button");
const searchButton = document.querySelector(".actions-area__search-button");
const walkButton = document.querySelector(".actions-area__walk-button");




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


//Variáveis das imagens das munições
const ammoImage9mm = "assets/images/ammo/9mm_ammo.png";




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
	maxCriticalDamage: 0
};

const enemy2 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};

const enemy3 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};

const enemy4 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};

const enemy5 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};

const enemy6 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};

const enemy7 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};

const enemy8 = {
	life: 0,
	hitChance: 0,
	criticalChance: 0,
	minDamage: 0,
	maxDamage: 0,
	minCriticalDamage: 0,
	maxCriticalDamage: 0
};


//Variável com todos os Objetos dos inimigos
const enemiesObjects = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];



//Variável de chance de luta aleatória
let fightChance = 0;


//Variável da dificuldade da luta
let fightDifficult = 1;


//Variável com o estado da luta
let fighting = false;



//Variáveis das chances dos inimigos surgirem
let enemy1AppearChance = 0;
let enemy2AppearChance = 0;
let enemy3AppearChance = 0;
let enemy4AppearChance = 0;
let enemy5AppearChance = 0;
let enemy6AppearChance = 0;
let enemy7AppearChance = 0;
let enemy8AppearChance = 0;


//Imagens dos inimigos
const zombie1Image = "assets/images/enemies/zombie1.png";
const zombie2Image = "assets/images/enemies/zombie2.png";
const zombie3Image = "assets/images/enemies/zombie3.png";
const zombie4Image = "assets/images/enemies/zombie4.png";




//Variável do jogo salvo
let savedGame = {};

//Objeto do jogo salvo
savedGame = {
	player: {
		life: 100,
		weapons: {
			pistol: false,
//Quando a munição for infinita, trocar por "---"
			pistolAmmo: 10
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
		scenary1Progress: 0,
	}
};



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



//Função de fazer busca
function searchItems(){
	let pistolPercentage = randomPercentage();
	let bandagePercentage = randomPercentage();
	let medikitPercentage = randomPercentage();
	let molotovPercentage = randomPercentage();
	let clothPercentage = randomPercentage();
	let alcoholPercentage = randomPercentage();
	let bottlePercentage = randomPercentage();
	let ammo9mmPercentage = randomPercentage();
	if (pistolPercentage <= 100 && savedGame.player.weapons.pistol === false){
		displayReceivedWeaponScreen(pistolImage, "Pistola 9mm");
		savedGame.player.weapons.pistol = true;
	}
	else if (bandagePercentage <= 10){
		let foundQuantity = randomRangeNumber(1, 2);
		displayReceivedItemScreen(bandageImage, foundQuantity, "Bandagem");
		savedGame.player.itemsQuantity.bandage += foundQuantity;
	}
	else if (medikitPercentage <= 5){
		let foundQuantity = randomRangeNumber(1, 1);
		displayReceivedItemScreen(medikitImage, foundQuantity, "Kit médico");
		savedGame.player.itemsQuantity.medikit += foundQuantity;
	}
	else if (molotovPercentage <= 3){
		let foundQuantity = randomRangeNumber(1, 1);
		displayReceivedItemScreen(molotovImage, foundQuantity, "Molotov");
		savedGame.player.itemsQuantity.molotov += foundQuantity;
	}
	else if (clothPercentage <= 25){
		let foundQuantity = randomRangeNumber(1, 2);
		displayReceivedItemScreen(clothImage, foundQuantity, "Pano");
		savedGame.player.craftingItemsQuantity.cloth += foundQuantity;
	}
	else if (alcoholPercentage <= 25){
		let foundQuantity = randomRangeNumber(1, 2);
		displayReceivedItemScreen(alcoholImage, foundQuantity, "Álcool");
		savedGame.player.craftingItemsQuantity.alcohol += foundQuantity;
	}
	else if (bottlePercentage <= 10){
		let foundQuantity = randomRangeNumber(1, 1);
		displayReceivedItemScreen(bottleImage, foundQuantity, "Garrafa");
		savedGame.player.craftingItemsQuantity.bottle += foundQuantity;
	}
	else if (ammo9mmPercentage <= 30){
		let foundQuantity = randomRangeNumber(5, 15);
		displayReceivedItemScreen(ammoImage9mm, foundQuantity, "Munição de 9mm");
		savedGame.player.weapons.pistolAmmo += foundQuantity;
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
		enemy2.minDamage = 10;
		enemy2.maxDamage = 20;
		enemy2.minCriticalDamage = 25;
		enemy2.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[1].src = zombie2Image;
		enemy2.life = 100;
		enemy2.hitChance = 50;
		enemy2.criticalChance = 20;
		enemy2.minDamage = 10;
		enemy2.maxDamage = 20;
		enemy2.minCriticalDamage = 25;
		enemy2.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[1].src = zombie2Image;
		enemy2.life = 100;
		enemy2.hitChance = 50;
		enemy2.criticalChance = 20;
		enemy2.minDamage = 10;
		enemy2.maxDamage = 20;
		enemy2.minCriticalDamage = 25;
		enemy2.maxCriticalDamage = 35;
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
		enemy3.minDamage = 10;
		enemy3.maxDamage = 20;
		enemy3.minCriticalDamage = 25;
		enemy3.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[2].src = zombie3Image;
		enemy3.life = 100;
		enemy3.hitChance = 50;
		enemy3.criticalChance = 20;
		enemy3.minDamage = 10;
		enemy3.maxDamage = 20;
		enemy3.minCriticalDamage = 25;
		enemy3.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[2].src = zombie3Image;
		enemy3.life = 100;
		enemy3.hitChance = 50;
		enemy3.criticalChance = 20;
		enemy3.minDamage = 10;
		enemy3.maxDamage = 20;
		enemy3.minCriticalDamage = 25;
		enemy3.maxCriticalDamage = 35;
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
		enemy4.minDamage = 10;
		enemy4.maxDamage = 20;
		enemy4.minCriticalDamage = 25;
		enemy4.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[3].src = zombie4Image;
		enemy4.life = 100;
		enemy4.hitChance = 50;
		enemy4.criticalChance = 20;
		enemy4.minDamage = 10;
		enemy4.maxDamage = 20;
		enemy4.minCriticalDamage = 25;
		enemy4.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[3].src = zombie4Image;
		enemy4.life = 100;
		enemy4.hitChance = 50;
		enemy4.criticalChance = 20;
		enemy4.minDamage = 10;
		enemy4.maxDamage = 20;
		enemy4.minCriticalDamage = 25;
		enemy4.maxCriticalDamage = 35;
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
		enemy5.minDamage = 10;
		enemy5.maxDamage = 20;
		enemy5.minCriticalDamage = 25;
		enemy5.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[4].src = zombie3Image;
		enemy5.life = 100;
		enemy5.hitChance = 50;
		enemy5.criticalChance = 20;
		enemy5.minDamage = 10;
		enemy5.maxDamage = 20;
		enemy5.minCriticalDamage = 25;
		enemy5.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[4].src = zombie3Image;
		enemy5.life = 100;
		enemy5.hitChance = 50;
		enemy5.criticalChance = 20;
		enemy5.minDamage = 10;
		enemy5.maxDamage = 20;
		enemy5.minCriticalDamage = 25;
		enemy5.maxCriticalDamage = 35;
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
		enemy6.minDamage = 10;
		enemy6.maxDamage = 20;
		enemy6.minCriticalDamage = 25;
		enemy6.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[5].src = zombie2Image;
		enemy6.life = 100;
		enemy6.hitChance = 50;
		enemy6.criticalChance = 20;
		enemy6.minDamage = 10;
		enemy6.maxDamage = 20;
		enemy6.minCriticalDamage = 25;
		enemy6.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[5].src = zombie3Image;
		enemy6.life = 100;
		enemy6.hitChance = 50;
		enemy6.criticalChance = 20;
		enemy6.minDamage = 10;
		enemy6.maxDamage = 20;
		enemy6.minCriticalDamage = 25;
		enemy6.maxCriticalDamage = 35;
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
		enemy7.minDamage = 10;
		enemy7.maxDamage = 20;
		enemy7.minCriticalDamage = 25;
		enemy7.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[6].src = zombie3Image;
		enemy7.life = 100;
		enemy7.hitChance = 50;
		enemy7.criticalChance = 20;
		enemy7.minDamage = 10;
		enemy7.maxDamage = 20;
		enemy7.minCriticalDamage = 25;
		enemy7.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemy7.life = 100;
		enemiesImageList[6].src = zombie4Image;
		enemy7.hitChance = 50;
		enemy7.criticalChance = 20;
		enemy7.minDamage = 10;
		enemy7.maxDamage = 20;
		enemy7.minCriticalDamage = 25;
		enemy7.maxCriticalDamage = 35;
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
		enemy8.minDamage = 10;
		enemy8.maxDamage = 20;
		enemy8.minCriticalDamage = 25;
		enemy8.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 2){
		enemiesImageList[7].src = zombie1Image;
		enemy8.life = 100;
		enemy8.hitChance = 50;
		enemy8.criticalChance = 20;
		enemy8.minDamage = 10;
		enemy8.maxDamage = 20;
		enemy8.minCriticalDamage = 25;
		enemy8.maxCriticalDamage = 35;
	}
	else if (savedGame.player.scenary1Progress < 100 && fightDifficult === 3){
		enemiesImageList[7].src = zombie1Image;
		enemy8.life = 100;
		enemy8.hitChance = 50;
		enemy8.criticalChance = 20;
		enemy8.minDamage = 10;
		enemy8.maxDamage = 20;
		enemy8.minCriticalDamage = 25;
		enemy8.maxCriticalDamage = 35;
	}
}




//Função de luta aleatória
function randomFight(){
	console.log(fightChance);
	let fightChanceResult = randomPercentage();
	if (fightChanceResult <= fightChance){
		let enemy1AppearResult = randomPercentage();
		let enemy2AppearResult = randomPercentage();
		let enemy3AppearResult = randomPercentage();
		let enemy4AppearResult = randomPercentage();
		let enemy5AppearResult = randomPercentage();
		let enemy6AppearResult = randomPercentage();
		let enemy7AppearResult = randomPercentage();
		let enemy8AppearResult = randomPercentage();
		
		if (enemy1AppearResult <= enemy1AppearChance){
			activateEnemy1();
		}
		if (enemy2AppearResult <= enemy2AppearChance){
			activateEnemy2();
		}
		if (enemy3AppearResult <= enemy3AppearChance){
			activateEnemy3();
		}
		if (enemy4AppearResult <= enemy4AppearChance){
			activateEnemy4();
		}
		if (enemy5AppearResult <= enemy5AppearChance){
			activateEnemy5();
		}
		if (enemy6AppearResult <= enemy6AppearChance){
			activateEnemy6();
		}
		if (enemy7AppearResult <= enemy7AppearChance){
			activateEnemy7();
		}
		if (enemy8AppearResult <= enemy8AppearChance){
			activateEnemy8();
		}
	}
}



//função que controla o progresso do jogo
function gameProgress(){
	if (savedGame.player.scenary1Progress <= 5){
		fightChance = 0;
	}
	else if (savedGame.player.scenary1Progress > 5 && savedGame.player.scenary1Progress <= 50){
		fightChance = 30;
		fightDifficult = 1;
		enemy1AppearChance = 0;
		enemy2AppearChance = 0;
		enemy3AppearChance = 0;
		enemy4AppearChance = 0;
		enemy5AppearChance = 0;
		enemy6AppearChance = 30;
		enemy7AppearChance = 30;
		enemy8AppearChance = 50;
	}
	else if (savedGame.player.scenary1Progress > 50 && savedGame.player.scenary1Progress < 90){
		fightChance = 40;
		fightDifficult = 2;
		enemy1AppearChance = 0;
		enemy2AppearChance = 0;
		enemy3AppearChance = 0;
		enemy4AppearChance = 0;
		enemy5AppearChance = 0;
		enemy6AppearChance = 50;
		enemy7AppearChance = 50;
		enemy8AppearChance = 50;
	}
	else if (savedGame.player.scenary1Progress > 0 && savedGame.player.scenary1Progress === 90){
		fightChance = 100;
		fightDifficult = 3;
		enemy1AppearChance = 50;
		enemy2AppearChance = 50;
		enemy3AppearChance = 50;
		enemy4AppearChance = 50;
		enemy5AppearChance = 50;
		enemy6AppearChance = 100;
		enemy7AppearChance = 100;
		enemy8AppearChance = 100;
	}
}









//Ideia para a função de ataque
/*
function attack(){
  let pistolHitChance = randomPercentage();
  let doubleHitChance = randomPercentage();
  if (doubleHitChance <= 20){
  	console.log(doubleHitChance);
  	alert("double hit");
  	pistolHitChance = randomPercentage();
	  if (pistolHitChance <= 40){
	  	alert("acertou");
    	console.log(pistolHitChance);
	  }
	  pistolHitChance = randomPercentage();
	  if (pistolHitChance <= 40){
	  	alert("acertou");
    	console.log(pistolHitChance);
	  }
  }
  else if (pistolHitChance <= 40){
  	alert("acertou");
  	console.log(pistolHitChance);
  }
}

attackButton.addEventListener("click", attack);
*/


//Ações dos botões de criar item
craftBandageButton.addEventListener("click", function(){
	craftBandage();
	}
);

craftMolotovButton.addEventListener("click", function(){
	craftMolotov();
	}
);


//Ações dos botões de equipar armas e itens
pistolEquipButton.addEventListener("click", function(){
	changedEquipedWeapon("pistol", 40, 20, 50, 70, 100, 150);
});
molotovEquipButton.addEventListener("click", function(){
	changedEquipedWeapon("molotov", 100, 30, 40, 50, 80, 120);
});


//Ações dos botões de ações
searchButton.addEventListener("click", function(){
	if (savedGame.player.scenary1Progress === 0){
		savedGame.player.scenary1Progress += 5;
		gameProgress();
	}
	else{
		fightChance += 10;
		//Aumentar mais as dificuldades, como chance dos inimigos aparecerem e a dificuldade da luta
	}
		searchItems();
	const receivedItemsOkButton = document.querySelector(".received-items__ok-button");
	const receivedWeaponOkButton = document.querySelector(".received-weapon__ok-button");
  const searchFailOkButton = document.querySelector(".search-fail__ok-button");
  receivedItemsOkButton.addEventListener("click", randomFight);
  receivedWeaponOkButton.addEventListener("click", randomFight);
  searchFailOkButton.addEventListener("click", randomFight);
});

//Ideia para função de ataque
attackButton.addEventListener("click", function(){
	//Checando a arma equipada
	if (equipedWeapon == "pistol"){
		if (savedGame.player.weapons.pistolAmmo === 0){
		alert("Sem munição, tome um pouco");
		savedGame.player.weapons.pistolAmmo += 10;
		return;
		}
		else{
			savedGame.player.weapons.pistolAmmo -= 1;
		}
	}
	
	if (equipedWeapon == "molotov"){
		if (savedGame.player.itemsQuantity.molotov === 0){
		alert("Sem munição");
		return;
		}
		else{
			savedGame.player.itemsQuantity.molotov -= 1;
		}
	}
	
	let enemyPosition = randomRangeNumber(0, 7);
	while (!enemiesList[enemyPosition].classList.contains("enemy-active")){
		enemyPosition = randomRangeNumber(0, 7);
	};
	//Falta validar os inimigos para o cálculo ser feito apenas nos inimigos que apareceram na tela
	let enemyReceivedDamage = randomRangeNumber(50, 70);
	enemiesObjects[enemyPosition].life -= enemyReceivedDamage;
	enemiesDamageList[enemyPosition].innerHTML = enemyReceivedDamage;
	enemiesDamageList[enemyPosition].classList.add("enemy-damage-display");
	enemiesDamageList[enemyPosition].addEventListener("animationend", function(){
	  enemiesDamageList[enemyPosition].classList.remove("enemy-damage-display");
	});
  console.log(enemy1.life, enemy2.life, enemy3.life, enemy4.life, enemy5.life, enemy6.life, enemy7.life, enemy8.life);
  //Condição para quando for preciso chamar um evento logo após uma luta
  /*
  if (fighting === true && savedGame.player.scenary1Progress >= 90 && enemiesObjects.every(object =>{return object.life <= 0;})){
  	alert("Evento exatamente após acabar a última luta");
  }
  */
});

walkButton.addEventListener("click", function(){
	savedGame.player.scenary1Progress += 10;
	progressControlFunction();
	gameProgress();
	randomFight();
});




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
	}
	else{
		searchButton.classList.remove("opacity-0", "pe-none");
		walkButton.classList.remove("opacity-0", "pe-none");
		attackButton.classList.add("pe-none");
	}
	
	//Checando a arma equipada
	if (equipedWeapon === "none"){
		displayedAmmoQuantity.innerHTML = "?";
		attackButton.classList.add("opacity-0", "pe-none");
	}
	else if (equipedWeapon !== "none"){
		attackButton.classList.remove("opacity-0");
	}
  if (equipedWeapon === "pistol"){
		displayedAmmoQuantity.innerHTML = savedGame.player.weapons.pistolAmmo;
	}
  else if (equipedWeapon === "molotov"){
		displayedAmmoQuantity.innerHTML = savedGame.player.itemsQuantity.molotov;
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
		menuWeaponCheck("pistol", playerMenuWeaponsList, 0);
		//Checando se é o início do jogo
		if (savedGame.player.scenary1Progress === 0){
			walkButton.classList.add("opacity-0", "pe-none");
		}
		/*else{
			walkButton.classList.remove("opacity-0", "pe-none");
		}*/
		//Checando se pegou a pistola na busca no tutorial
		if (savedGame.player.scenary1Progress === 5){
			searchButton.classList.add("opacity-0", "pe-none");
		}
		/*else{
			searchButton.classList.remove("opacity-0", "pe-none");
		}*/
	//Checando a vida dos inimigos e fazendo eles sumirem caso a vida seja 0
	enemiesObjects.forEach(function(object, objectIndex){
		if (object.life <= 0){
			enemiesList[objectIndex].classList.add("opacity-0");
			enemiesList[objectIndex].classList.remove("enemy-active");
		}
	});
}


//Principal função de controle do jogo
function mainControlFunction(){
	//Prevenindo a vida dos inimigos de ficar negativa
	enemiesObjects.forEach(function(object, objectIndex){
		if (object.life <= 0){
			enemiesObjects[objectIndex].life = 0;
		}
	});
	//Prevenindo que a Variável fightChance ultrapasse 100
	if (fightChance > 100){
		fightChance = 100;
	}
	//Checando se o jogador está numa luta
	if (enemiesList[0].classList.contains("opacity-0") && enemiesList[1].classList.contains("opacity-0") && enemiesList[2].classList.contains("opacity-0") && enemiesList[3].classList.contains("opacity-0") && enemiesList[4].classList.contains("opacity-0") && enemiesList[5].classList.contains("opacity-0") && enemiesList[6].classList.contains("opacity-0") && enemiesList[7].classList.contains("opacity-0")){
		fighting = false;
	}
	else{
		fighting = true;
	}
}


//Função que previne o progresso dos cenários de ultrapassar o limite de evento final e limite de 100
function progressControlFunction(){
	if (savedGame.player.scenary1Progress > 90 && savedGame.player.scenary1Progress < 100){
		savedGame.player.scenary1Progress = 90;
	}
	if (savedGame.player.scenary1Progress > 90 && fighting === false){
		savedGame.player.scenary1Progress = 100;
		alert("Evento após acabar a última luta e clicar em andar");
	}
}



//Chamando a função mainDisplayFunction constantemente
setInterval(mainDisplayFunction, 100);

//Chamando a função mainControlFunction constantemente
setInterval(mainControlFunction, 100);

//Chamando a função gameProgress
gameProgress();

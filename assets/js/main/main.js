
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


//Variáveil da lista de armas no menu do jogador
const playerMenuWeaponsList = document.querySelectorAll(".player-menu-area-display__weapons li");


//Botões de equipar armas e itens
const pistolEquipButton = document.querySelector("#pistol-equip-button");
const molotovEquipButton = document.querySelector("#molotov-equip-button");

//Botões de ação do jogador
const attackButton = document.querySelector(".actions-area__attack-button");




//Variável do jogo salvo
let savedGame = {};

//Objeto do jogo salvo
savedGame = {
	player: {
		life: 100,
		equipedWeapon: "none",
//Quando a munição for infinita, trocar por "---"
		hitChance: 0,
		criticalChance: 0,
		minDamage: 0,
		maxDamage: 0,
		minCriticalDamage: 0,
		maxCriticalDamage: 0,
		weapons: {
			pistol: true,
			pistolAmmo: 10
		},
		itemsQuantity: {
			bandage: 0,
			medikit: 0,
			molotov: 0
		},
		craftingItemsQuantity: {
			cloth: 2,
			alcohol: 2,
			bottle: 1
		}
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


//Funcão que checa se tem itens de criação suficientes para criar o item e mostra ou esconde o botão de criação relacionado
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


//Funcão que faz a troca da arma ou item equipado
function changedEquipedWeapon(
	weaponName,
	hitChance,
	criticalChance,
	minDamage,
	maxDamage,
	minCriticalDamage,
	maxCriticalDamage)
	{
	savedGame.player.equipedWeapon = weaponName;
	savedGame.player.hitChance = hitChance;
	savedGame.player.criticalChance = criticalChance;
	savedGame.player.minDamage = minDamage;
	savedGame.player.maxDamage = maxDamage;
	savedGame.player.minCriticalDamage = minCriticalDamage;
	savedGame.player.maxCriticalDamage = maxCriticalDamage;
	console.log(
		savedGame.player.equipedWeapon,
		savedGame.player.hitChance,
		savedGame.player.criticalChance,
		savedGame.player.minDamage,
		savedGame.player.maxDamage,
		savedGame.player.minCriticalDamage,
		savedGame.player.maxCriticalDamage
		);
}





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






//Princial função de exibição
function mainDisplayFunction(){
	//Itens gerais
	displayItemQuantity(displayedBandageQuantity, "bandage");
	displayItemQuantity(displayedMedikitQuantity, "medikit");
	displayItemQuantity(displayedMolotovQuantity, "molotov");
	//Itens de criação
	displayCraftingItemQuantity(displayedClothQuantity, "cloth");
	displayCraftingItemQuantity(displayedAlcoholQuantity, "alcohol");
	displayCraftingItemQuantity(displayedBottleQuantity, "bottle");
	//Munição da arma equipada
	if (savedGame.player.equipedWeapon === "none"){
		displayedAmmoQuantity.innerHTML = "?";
		attackButton.classList.add("opacity-0", "pe-none");
	}
	else{
		attackButton.classList.remove("opacity-0", "pe-none");
	}
  if (savedGame.player.equipedWeapon === "pistol"){
		displayedAmmoQuantity.innerHTML = savedGame.player.weapons.pistolAmmo;
	}
  else if (savedGame.player.equipedWeapon === "molotov"){
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
}

//Chamando a função mainDisplayFunction constantemente
setInterval(mainDisplayFunction, 100);



//Variáveis das quantidades de itens exibidas na tela
const displayedBandageQuantity = document.querySelector(".displayed-bandage-quantity");
const displayedMedikitQuantity = document.querySelector(".displayed-medikit-quantity");
const displayedMolotovQuantity = document.querySelector(".displayed-molotov-quantity");


//Variáveis das quantidades de itens de criação exibidas na tela
const displayedClothQuantity = document.querySelectorAll(".displayed-cloth-quantity");
const displayedAlcoholQuantity = document.querySelectorAll(".displayed-alcohol-quantity");
const displayedBottleQuantity = document.querySelectorAll(".displayed-bottle-quantity");


//Variáveis dos botões de criar item
const craftBandageButton = document.querySelector("#craft-bandage-button");
const craftMolotovButton = document.querySelector("#craft-molotov-button");


//Variáveis das listas de consumíveis e outros no menu do jogador
const playerMenuConsumablesList = document.querySelectorAll(".player-menu-area-display__consumables li");
const playerMenuOthersList = document.querySelectorAll(".player-menu-area-display__others li");



//Variável do jogo salvo
let gameSaved = {};

//Objeto do jogo salvo
gameSaved = {
	player: {
		life: 100,
		equipedWeapon: {},
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



//Função que mostra a quantidade do item na tela baseada no elemento alvo e no nome da propriedade do objeto gameSaved.player.itemsQuantity
function displayItemQuantity(targetElement, propertyName){
	targetElement.innerHTML = gameSaved.player.itemsQuantity[propertyName];
}


//Função que mostra a quantidade do item de criação na tela baseada na node list dos elementos alvos e no nome da propriedade do objeto gameSaved.player.craftingItemsQuantity
function displayCraftingItemQuantity(targetNodeList, propertyName){
	targetNodeList.forEach(function(element){
		element.innerHTML = gameSaved.player.craftingItemsQuantity[propertyName];
	});
}



//Função de criação da bandagem
function craftBandage(){
	//Checando se a quantidade de todos os itens necessários no array é maior que 0 com o método every
	if ([
		gameSaved.player.craftingItemsQuantity.cloth,
		gameSaved.player.craftingItemsQuantity.alcohol
		].every(value =>{return value > 0;}))
		{
		//Fazendo as alterações
		gameSaved.player.craftingItemsQuantity.cloth -= 1;
		gameSaved.player.craftingItemsQuantity.alcohol -= 1;
		gameSaved.player.itemsQuantity.bandage += 1;
	}
}


//Função de criação do molotov
function craftMolotov(){
	if ([
		gameSaved.player.craftingItemsQuantity.cloth,
		gameSaved.player.craftingItemsQuantity.bottle
		].every(value =>{return value > 0;}))
		{
		//Fazendo as alterações
		gameSaved.player.craftingItemsQuantity.cloth -= 1;
		gameSaved.player.craftingItemsQuantity.bottle -= 1;
		gameSaved.player.itemsQuantity.molotov += 1;
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
	if (gameSaved.player.itemsQuantity[itemName] > 0){
		targetNodeList[elementPosition].classList.remove("d-none");
	}
	else{
		targetNodeList[elementPosition].classList.add("d-none");
	}
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
	//Validando os botões de criação de item
	craftItemCheck(
		craftBandageButton,
		gameSaved.player.craftingItemsQuantity.cloth,
		gameSaved.player.craftingItemsQuantity.alcohol
		);
		
	craftItemCheck(
		craftMolotovButton,
		gameSaved.player.craftingItemsQuantity.cloth,
		gameSaved.player.craftingItemsQuantity.bottle
		);
		//Checando se o jogador possui os itens no menu do jogador
		menuItemCheck("bandage", playerMenuConsumablesList, 0);
		menuItemCheck("medikit", playerMenuConsumablesList, 1);
		menuItemCheck("molotov", playerMenuOthersList, 0);
}

//Chamando a função mainDisplayFunction constantemente
setInterval(mainDisplayFunction, 100);


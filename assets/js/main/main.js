
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
			alcohol: 1,
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
	else{
		alert("não pode");
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
	else{
		alert("não pode");
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



//Chamando a função mainDisplayFunction constantemente
setInterval(mainDisplayFunction, 100);


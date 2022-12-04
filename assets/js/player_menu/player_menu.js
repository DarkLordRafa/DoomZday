
//Variáveis de elementos
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
const shotgunConfirmScreen = document.querySelector("#shotgun-confirm-screen");
const bandageConfirmScreen = document.querySelector("#bandage-confirm-screen");
const medikitConfirmScreen = document.querySelector("#medikit-confirm-screen");
const molotovConfirmScreen = document.querySelector("#molotov-confirm-screen");
const pistolEquipButton = document.querySelector("#pistol-equip-button");
const pistolInfoButton = document.querySelector("#pistol-info-button");
const pistolReturnButton = document.querySelector("#pistol-return-button");
const shotgunEquipButton = document.querySelector("#shotgun-equip-button");
const shotgunInfoButton = document.querySelector("#shotgun-info-button");
const shotgunReturnButton = document.querySelector("#shotgun-return-button");
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
const itemInfoScreenOKButton = document.querySelector(".item-info-ok-button");
const weaponInfoScreenOKButton = document.querySelector(".weapon-info-ok-button");
const playerItemInfoScreen = document.querySelector("#player-item-info-screen");
const playerWeaponInfoScreen = document.querySelector("#player-weapon-info-screen");
const itemInfoName = document.querySelector(".item-info-name");
const itemInfoImage = document.querySelector(".item-info-image");
const itemInfoLegendary = document.querySelector(".player-item-info .legendary-badge");
const itemInfoDescription = document.querySelector(".item-info-description");
const weaponInfoContent = document.querySelector(".weapon-info-content");
const weaponInfoName = document.querySelector(".weapon-info-name");
const weaponInfoImage = document.querySelector(".weapon-info-image");
const weaponInfoLegendary = document.querySelector(".player-weapon-info .legendary-badge");
const weaponInfoDescription = document.querySelector(".weapon-info-description");
const weaponInfoDamage = document.querySelector(".weapon-info-damage");
const weaponInfoHitChance = document.querySelector(".weapon-info-hit-chance");
const weaponInfoCriticalChance = document.querySelector(".weapon-info-critical-chance");
const weaponInfoText = document.querySelector(".weapon-info-text");
const craftItemScreen = document.querySelector("#craft-item-screen");
const craftItemScreenScreenList = document.querySelectorAll(".craft-item-area");
const craftItemList = document.querySelectorAll(".craft-item__item-list li");
const craftItemScreenReturnButtons = document.querySelectorAll(".craft-item-area__return-button");
const receivedItemsScreen = document.querySelector(".received-items-screen");
const receivedItemsOkButton = document.querySelector(".received-items__ok-button");
const receivedWeaponScreen = document.querySelector(".received-weapon-screen");
const receivedWeaponOkButton = document.querySelector(".received-weapon__ok-button");
const searchFailScreen = document.querySelector(".search-fail-screen");
const searchFailOkButton = document.querySelector(".search-fail__ok-button");



//Objetos das infos dos itens
const bandageInfo = {
	name: "Bandagem",
	image: "assets/images/items/bandage.png",
	description: "Curativo simples feito com trapos e um pouco de álcool. Recupera parte da vida.",
	legendary: false
};

const medikitInfo = {
	name: "Kit médico",
	image: "assets/images/items/medikit.png",
	description: "Um kit médico quase em perfeito estado que contém medicamentos e itens de primeiros socorros muito úteis. Recupera boa parte da vida.",
	legendary: false
};

const pistolInfo = {
	name: "Pistola 9mm",
	image: "assets/images/items/handgun.png",
	description: "Pistola 9mm gasta mas que ainda funciona muito bem. Não possui muito poder de fogo mas tem certa chance de crítico e chance de dar mais de um tiro.",
	damage: "Baixo",
	hitChance: "Moderada",
	criticalChance: "Baixa",
	text: '"As armas são para dizer que lutamos, e as rosas para dizer que vencemos" - Axl Rose".',
	legendary: false
};

const shotgunInfo = {
	name: "Escopeta",
	image: "assets/images/items/shotgun.webp",
	description: "Uma arma de curto alcance com poder de fogo considerável. Capaz de atingir dois inimigos ou concentrar todo o dano em apenas um. Porém não possui ataque crítico.",
	damage: "Moderado",
	hitChance: "Moderada",
	criticalChance: "Não possui",
	text: '"Na cara não chefe".',
	legendary: false
};

const molotovlInfo = {
	name: "Molotov",
	image: "assets/images/items/molotov.png",
	description: "Coquetel molotov improvisado feito com uma garrafa de bebida velha e um pano que você encontrou. Atinge todos os inimigos na tela e os deixa queimando, causando dano contínuo por 2 turnos.",
	damage: "Baixo/Fixo",
	hitChance: "Garantido",
	criticalChance: "Baixa",
	text: "Veja esses malditos zumbis queimarem.",
	legendary: false
};


//Variáveis das imagens
const pistolImage = "assets/images/items/handgun.png";
const shotgunImage = "assets/images/items/shotgun.webp";
const molotovImage = "assets/images/items/molotov.png";


//Variável do item atualmente equipado
let equipedMenuItem = playerMenuWeaponsList[0];


//Função que faz a mudança visual do item equipado, baseada nas variáveis de imagem, a nodeList do item, e a posição do item
function changeEquipedItem(itemImage, itemList, itemIndex){
	attackButtonWeaponImage.src = itemImage;
	itemList.forEach(function(item){
		item.style.backgroundColor = "#e8dcb8";
	});
	equipedMenuItem.style.backgroundColor = "#e8dcb8";
	itemList[itemIndex].style.backgroundColor = "#8B4000";
	equipedMenuItem = itemList[itemIndex];
}


//Função que abre uma tela baseada no argumento passado
function displayScreen(targetScreen){
	targetScreen.classList.remove("d-none");
}


//Função que fecha uma tela baseada no argumento passado
function closeScreen(targetScreen){
	targetScreen.classList.add("d-none");
}


//Função que troca as telas de itens do menu do jogador baseada no argumento passado
function displayPlayerMenuItemScreen(itemScreen){
	playerMenuItemsScreens.forEach(function(screen){
		screen.classList.add("d-none");
	});
	playerMenuItemsScreens[itemScreen].classList.remove("d-none");
}

//Função que troca as telas dos itens da tela de criação de itens baseada no argumento passado
function displayCraftItemScreens(screenIndex){
	craftItemScreenScreenList.forEach(function(screen){
		screen.classList.add("d-none");
	});
	craftItemScreenScreenList[screenIndex].classList.remove("d-none");
}


//Função que muda as informações da tela de info do item baseada no objeto desse item
function changeItemInfoScreenInfo(itemInfoObject){
	itemInfoDescription.scrollTo(0, 0);
	itemInfoName.innerHTML = itemInfoObject.name;
	itemInfoImage.src = itemInfoObject.image;
	itemInfoDescription.innerHTML = itemInfoObject.description;
	if (itemInfoObject.legendary === true){
		itemInfoLegendary.classList.remove("d-none");
	}
	else{
		itemInfoLegendary.classList.add("d-none");
	}
}


//Função que muda as informações da tela de info da arma baseada no objeto dessa arma
function changeWeaponInfoScreenInfo(weaponInfoObject){
	weaponInfoContent.scrollTo(0, 0);
	weaponInfoName.innerHTML = weaponInfoObject.name;
	weaponInfoImage.src = weaponInfoObject.image;
	weaponInfoDescription.innerHTML = weaponInfoObject.description;
	weaponInfoDamage.innerHTML = weaponInfoObject.damage;
	weaponInfoHitChance.innerHTML = weaponInfoObject.hitChance;
	weaponInfoCriticalChance.innerHTML = weaponInfoObject.criticalChance;
	weaponInfoText.innerHTML = weaponInfoObject.text;
	if (weaponInfoObject.legendary === true){
		weaponInfoLegendary.classList.remove("d-none");
	}
	else{
		weaponInfoLegendary.classList.add("d-none");
	}
}



//Botões que trocam as telas de itens do menu
weaponsDisplayButton.addEventListener("click", function(){
	displayPlayerMenuItemScreen(0);
});

consumablesDisplayButton.addEventListener("click", function(){
	displayPlayerMenuItemScreen(1);
});

othersDisplayButton.addEventListener("click", function(){
	displayPlayerMenuItemScreen(2);
});


//Botão que abre a tela de criação de item
craftDisplayButton.addEventListener("click", function(){
	displayScreen(craftItemScreen);
});


//Botão que abre o menu principal com o botão "voltar" exibido
menuDisplayButton.addEventListener("click", function(){
	menuScreen.classList.remove("d-none");
	menuScreenReturnButton.classList.remove("d-none");
});

//Botões que exibem a tela de confirmação do item específico ao clicar nele no menu
playerMenuWeaponsList[0].addEventListener("click", function(){
	displayScreen(pistolConfirmScreen);
});

playerMenuWeaponsList[1].addEventListener("click", function(){
	displayScreen(shotgunConfirmScreen);
});

playerMenuConsumablesList[0].addEventListener("click", function(){
	displayScreen(bandageConfirmScreen);
});

playerMenuConsumablesList[1].addEventListener("click", function(){
	displayScreen(medikitConfirmScreen);
});

playerMenuOthersList[0].addEventListener("click", function(){
	displayScreen(molotovConfirmScreen);
});

//Botões que fecham a tela de confirmação do item
pistolReturnButton.addEventListener("click", function(){
	closeScreen(pistolConfirmScreen);
});

shotgunReturnButton.addEventListener("click", function(){
	closeScreen(shotgunConfirmScreen);
});

bandageReturnButton.addEventListener("click" , function(){
	closeScreen(bandageConfirmScreen);
});

medikitReturnButton.addEventListener("click" , function(){
	closeScreen(medikitConfirmScreen);
});

molotovReturnButton.addEventListener("click" , function(){
	closeScreen(molotovConfirmScreen);
});

bandageUseButton.addEventListener("click", function(){
	closeScreen(bandageConfirmScreen);
});

medikitUseButton.addEventListener("click", function(){
	closeScreen(medikitConfirmScreen);
});


//Botões que fazem a mudança visual do item equipado
pistolEquipButton.addEventListener("click", function(){
	changeEquipedItem(pistolImage, playerMenuWeaponsList, 0);
	closeScreen(pistolConfirmScreen);
});

pistolInfoButton.addEventListener("click", function(){
	displayScreen(playerWeaponInfoScreen);
	changeWeaponInfoScreenInfo(pistolInfo);
});

shotgunEquipButton.addEventListener("click", function(){
	changeEquipedItem(shotgunImage, playerMenuWeaponsList, 1);
	closeScreen(shotgunConfirmScreen);
});

shotgunInfoButton.addEventListener("click", function(){
	displayScreen(playerWeaponInfoScreen);
	changeWeaponInfoScreenInfo(shotgunInfo);
});

bandageInfoButton.addEventListener("click", function(){
	displayScreen(playerItemInfoScreen);
	changeItemInfoScreenInfo(bandageInfo);
});

medikitInfoButton.addEventListener("click", function(){
	displayScreen(playerItemInfoScreen);
	changeItemInfoScreenInfo(medikitInfo);
});

molotovInfoButton.addEventListener("click", function(){
	displayScreen(playerWeaponInfoScreen);
	changeWeaponInfoScreenInfo(molotovlInfo);
});

molotovEquipButton.addEventListener("click", function(){
	changeEquipedItem(molotovImage, playerMenuOthersList, 0);
	closeScreen(molotovConfirmScreen);
});

itemInfoScreenOKButton.addEventListener("click", function(){
	closeScreen(playerItemInfoScreen);
});

weaponInfoScreenOKButton.addEventListener("click", function(){
	closeScreen(playerWeaponInfoScreen);
});


//Botões que trocam a tela de item atual da tela de criação de itens
craftItemList[0].addEventListener("click", function(){
	displayCraftItemScreens(1);
});

craftItemList[1].addEventListener("click", function(){
	displayCraftItemScreens(2);
});


//Botões que fecham a tela de criação item
craftItemScreenReturnButtons.forEach(function(button){
	button.addEventListener("click", function(){
		closeScreen(craftItemScreen);
	});
});


//Botão que fecha a tela de item recebido
receivedItemsOkButton.addEventListener("click", function(){
	closeScreen(receivedItemsScreen);
});


//Botão que fecha a tela de arma recebida
receivedWeaponOkButton.addEventListener("click", function(){
	closeScreen(receivedWeaponScreen);
});


//Botão que fecha a tela de busca malsucedida
searchFailOkButton.addEventListener("click", function(){
	closeScreen(searchFailScreen);
});


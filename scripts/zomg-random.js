function lowFirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateEnigmatictown(){
	var name1 = ["Highsilver","Vertibridge","Westerwheat","Kirkwall 2","New Kirkwall","Dispel City","Sundermeier Burg","Gibbytown","Greencastle","Port Suman","Ferndale","Dawn Rock","Lillygrove","Ironwood Refuge","Elmoss","Sandmason","Shorestone","Willowroot","Pebble","Mirulake","Bode","Woadtown","Toad Sound","Lamentgarden","Telamon City","Scarlet Citadel","Underleaf","Welloak","Pinewall","Buttercrystal","Redley","Addertown","Dinny","Crowgate"];

	var knownFor = ["Silver","Bridge","Wheat","Wall","Statues","Mages","Crater","Ale","Wine","Brew","Juice","Whales","Horses","Sheep","Tree","Trees","Bog","Swamp","Leaves","Seashore", "River", ""];
    
    var adjective = ["Luxurious","Tall","Golden","Black","New","Stony","Magic","Expensive","Cheap","Delicious","Good","Wooden","Teleporting","Tiny","Small","Large","Giant","Gargantuan","Leviathan"];

	var name = name1[getRandomInt(0, name1.length + 1)] + ', known for its ' + lowFirst(adjective[getRandomInt(0, adjective.length + 1)]) + ' ' + lowFirst(knownFor[getRandomInt(0, knownFor.length + 1)]) + '.';
	return name;
    
}

console.log(generateEnigmatictown());


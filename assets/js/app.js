var ninja = {
    type: "fighter",
    name:"Tenz", 
    style: "Ninja",
    home: forest,
    weakness: desert,
    advantage: "dark",
    special: shurikens,
    hp: 100,
    hit: (Math.floor(Math.random() * 7.5) + 10),
    crit: (Math.floor(Math.random() * 25) + 25)),
    img: img
};

var gunner = {
    type: "fighter",
    name:"Hutch", 
    style: "gunner",
    home: plains,
    weakness: forest,
    advantage: "bright",
    special: twoShots,
    hp: 90,
    hit: (Math.floor(Math.random() * 10) + 10)),
    crit: (Math.floor(Math.random() * 30) + 25)),
};

var brawler = {
    type: "fighter",
    name:"Ozzy", 
    style: "brawler",
    home: city,
    weakness: plains,
    advantage: "dark",
    special: uppercut,
    hp: 120,
    hit: (Math.floor(Math.random() * 10) + 5)),
    crit: (Math.floor(Math.random() * 20) + 25)),
};

var warrior = {
    type: "fighter",
    name:"Jinx", 
    style: "Warrior",
    home: desert,
    weakness: city,
    advantage: "bright",
    special: whipLash,
    hp: 110,
    hit: (Math.floor(Math.random() * 7.5) + 7.5)),
    crit: (Math.floor(Math.random() * 25) + 30)),
}

var figher = [ninja, gunner, brawler, warrior];

//random fighter placement



var desert = {
    type = "stage",
    lighting = "bright",
    home = warrior,
    weakness = ninja,
}

var city = {
    type = "stage",
    lighting = "dark",
    home = brawler,
    weakness = warrior,
}

var plains = {
    type = "stage",
    lighting = "bright",
    home = gunner,
    weakness = brawler,
}

var forest = {
    type = "stage",
    lighting = "dark",
    home = ninja,
    weakness = gunner,
}
    
var stage = [forest, plains, city, desert];

var stageSelect =

var player1 = if($())

var critPct = if(){
    ((Math.random() * .35);
}
var hitDamage = $(fighter[hit]);




$('#fighter-1').
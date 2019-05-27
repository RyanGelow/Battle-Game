// Start Game

$("#start-game").on('click', function() {

    // Clicking the button triggers an alert message.
    $("div.hidden").toggleClass("hidden");
    
    //Select fighter and dark overlay on non-selection
    $('#brawler-btn-sel, #ninja-btn-sel, #gunner-btn-sel, #warrior-btn-sel').click(function () {
        if (this.id == 'brawler-btn-sel') {
            $("#fighter-1 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-2 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-3 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
        else if (this.id == 'ninja-btn-sel') {
            $("#fighter-2 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-3 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
        else if (this.id == 'gunner-btn-sel') {
            $("#fighter-3 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-2 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
        else if (this.id == 'warrior-btn-sel') {
            $("#fighter-4 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-2 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-3 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
    });
     
    //Move fighter to lower card
    
    //Select stage  and dark overlay on non-selection
    $('#forest-btn-sel, #plains-btn-sel, #desert-btn-sel, #city-btn-sel').click(function () {
        if (this.id == 'brawler-btn-sel') {
            $("#fighter-1 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-2 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-3 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
        else if (this.id == 'ninja-btn-sel') {
            $("#fighter-2 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-3 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
        else if (this.id == 'gunner-btn-sel') {
            $("#fighter-3 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-2 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
        else if (this.id == 'warrior-btn-sel') {
            $("#fighter-4 div.card").addClass("border-primary").removeClass("bg-secondary");
            $("#fighter-2 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-3 div.card").addClass("bg-secondary").removeClass("border-primary");
            $("#fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary");
        }
    });
    //Move stage to lower card
    
    //Start Fight...
    $("h3.hidden").toggleClass("hidden");

});


// Fighters listed

var ninja = {
    type: "fighter",
    name:"Tenz", 
    style: "Ninja",
    home: forest,
    weakness: desert,
    advantage: "dark",
    special: "shurikens",
    hp: 100,
    hit: (Math.ceil(Math.random() * 7.5) + 10),
    crit: (Math.ceil(Math.random() * 25) + 25),
    critChance: (Math.ceil(Math.random() * .3)),
};

var gunner = {
    type: "fighter",
    name:"Hutch", 
    style: "gunner",
    home: plains,
    weakness: forest,
    advantage: "bright",
    special: "twoShots",
    hp: 90,
    hit: (Math.ceil(Math.random() * 10) + 10),
    crit: (Math.ceil(Math.random() * 30) + 25),
    critChance: (Math.ceil(Math.random() * .3)),
};

var brawler = {
    type: "fighter",
    name:"Ozzy", 
    style: "brawler",
    home: city,
    weakness: plains,
    advantage: "dark",
    special: "uppercut",
    hp: 120,
    hit: (Math.ceil(Math.random() * 10) + 5),
    crit: (Math.ceil(Math.random() * 20) + 25),
    critChance: (Math.ceil(Math.random() * .3)),
};

var warrior = {
    type: "fighter",
    name:"Jinx", 
    style: "Warrior",
    home: desert,
    weakness: city,
    advantage: "bright",
    special: "whipLash",
    hp: 110,
    hit: (Math.ceil(Math.random() * 7.5) + 7.5),
    crit: (Math.ceil(Math.random() * 25) + 30),
    critChance: (Math.ceil(Math.random() * .3)),
}

var figher = [ninja, gunner, brawler, warrior];

// Stages listed

var desert = {
    type: "stage",
    lighting: "bright",
    home: warrior,
    weakness: ninja,
    hit: (Math.ceil(Math.random() * 5) + 2),
    hitChance: (Math.ceil(Math.random() * .2)),
}

var city = {
    type: "stage",
    lighting: "dark",
    home: brawler,
    weakness: warrior,
    hit: (Math.ceil(Math.random() * 3) + 3),
    hitChance: (Math.ceil(Math.random() * .2)),
}

var plains = {
    type: "stage",
    lighting: "bright",
    home: gunner,
    weakness: brawler,
    hit: (Math.ceil(Math.random() * 2)),
    hitChance: (Math.ceil(Math.random() * .2)),
}

var forest = {
    type: "stage",
    lighting: "dark",
    home: ninja,
    weakness: gunner,
    hit: (Math.ceil(Math.random() * 3) + 4),
    hitChance: (Math.ceil(Math.random() * .2)),
}
    
var stage = [forest, plains, city, desert];


//Fighting scoring

// var hitDamage = $(fighter[hit]);

// var critPct = if(){
//     (Math.random() * .35);
// }


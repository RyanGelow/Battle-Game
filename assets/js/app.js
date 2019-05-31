// Fighters listed

const players = [
    {
        name:"Ozzy", 
        style: "brawler",
        id: "#fighter-1",
        playerBtnSel: "brawler-btn-sel",
        image: "./assets/images/brawler.jpeg",
        home: 'city',
        weakness: 'plains',
        advantage: 'dark',
        attackName: "clobbered",
        specialName: "Combo Uppercut",
        hp: 245,
        defense: .9,
        hit: [15, 7],
        special: [20, 30],
    },
    {
        name: "Tenz", 
        style: 'ninja',
        id: "#fighter-2",
        playerBtnSel: "ninja-btn-sel",
        image: "./assets/images/ninja.jpg",
        home: 'forest',
        weakness: 'desert',
        advantage: 'dark',
        attackName: "slashed",
        specialName: "Shurikens",
        hp: 235,
        defense: .9,
        hit: [8,11],
        special: [25,25],
    },
    {
        name:"Hutch", 
        style: "gunner",
        id: "#fighter-3",
        playerBtnSel: "gunner-btn-sel",
        image: "./assets/images/gunner.jpg",
        home: 'plains',
        weakness: 'forest',
        advantage: 'bright',
        attackName: "pistol whipped",
        specialName: "Two Blasts",
        hp: 200,
        defense: .9,
        hit: [12,12],
        special: [30,25],
    },
    {
        name:"Jinx", 
        style: "warrior",
        id: "#fighter-4",
        playerBtnSel: "warrior-btn-sel",
        image: "./assets/images/warrior.jpg",
        home: 'desert',
        weakness: 'city',
        advantage: 'bright',
        attackName: "jump kicked",
        specialName: "Whip Lash",
        hp: 225,
        defense: .9,
        hit: [11,10],
        special: [25,25],
    }
]

// Stages listed

const stages = [
    {
    name: 'Forest',
    id: "#stage-1",
    stageBtnSel: "forest-btn-sel",
    image: "./assets/images/forest.jpg",
    advantage: 'dark',
    home: 'ninja',
    weakness: 'gunner',
    elements: "Creatures",
    elementChance: Math.random() * 1.5,
    hit: [3,4],
    },
    {
    name: 'Plains',
    id: "#stage-2",
    stageBtnSel: "plains-btn-sel",
    image: "./assets/images/plains.jpg",
    advantage: 'bright',
    home: 'gunner',
    weakness: 'brawler',
    elements: "Outlaws",
    hit: [2,0],    
    },
    {
    name: 'Desert',
    id: "#stage-3",
    stageBtnSel: "desert-btn-sel",
    image: "./assets/images/desert.jpg",
    advantage: 'bright',
    home: 'warrior',
    weakness: 'ninja',
    elements: "Sandstorms",
    hit: [5,2],
    
    },
    {
    name: 'The City',
    id: "#stage-4",
    stageBtnSel: "city-btn-sel",
    image: "./assets/images/city.jpg",
    advantage: 'dark',
    home: 'brawler',
    weakness: 'warrior',
    elements: "Pollution",
    hit: [3,2],
    },
]

// Start Game

$("#start-game").on('click', function () {

    // Clicking the button shows characters and stages
    $("div.hidden").toggleClass("hidden");
    $("h3.hidden").toggleClass("hidden");
    $('#start').addClass('hidden');
    $('#player-2-name').append('<small> Random Select</small>');
    
    //Select fighter and dark overlay on non-selection
    $('#brawler-btn-sel, #ninja-btn-sel, #gunner-btn-sel, #warrior-btn-sel').click(function () {
        for(let i = 0; i < players.length; i++) {
            if(((this).id) == players[i].playerBtnSel) {
                // console.log('this is this id: ' +(this).id)
                // console.log("this is plyrbtnsel: " + players[i].playerBtnSel)
                let playerID = players[i].id;
            
                $(playerID+" div.card").addClass("border-primary").removeClass("bg-secondary");
                
                //Pass info to Player 1
                $('#player-1').addClass('selected');
                let playerName = players[i].name;
                $('#player-1-name').text(playerName);
                let playerImage = players[i].image;
                $('#player-1-image').attr('src',playerImage);
                player1HP();
                

            } else {
                let playerID = players[i].id;
                $(playerID+" div.card").addClass("bg-secondary").removeClass("border-primary");

            }
                
        }
    }) 

    //Select Stage and dark overlay on non-selection
    $('#forest-btn-sel, #plains-btn-sel, #desert-btn-sel, #city-btn-sel').click(function () {
        for(let i = 0; i < stages.length; i++) {
            if(((this).id) == stages[i].stageBtnSel) {

                let stageID = stages[i].id;

                $(stageID+" div.card").addClass("border-primary").removeClass("bg-secondary");

                //Pass info to Chosen Stage
                $('#chosen-stage').addClass('selected');
                let stageName = stages[i].name;
                $('#stage-name').text(stageName);
                let stageImage = stages[i].image;
                $('#stage-image').attr('src',stageImage);
                $('#stage-effect').html("Unknown");
            
            } else {
                let stageID = stages[i].id;
                $(stageID+" div.card").addClass("bg-secondary").removeClass("border-primary");
            }
        }
    })
})            

// Start Fight
$('#start-fight').on('click', function() {
    if($('#player-1').hasClass('selected')) {
        if($('#chosen-stage').hasClass('selected')) {
            // Clicking the button shows characters and stages
            $('#fighter-engage').addClass("begin");
            $(".unhidden").addClass("hidden");
            $('.fight-title').append(' - Start The Fight!');

            //Random Select Player 2
            let fightCompRef = Math.floor(Math.random() * 4);
            
            let compImg = players[fightCompRef].image;
            $('#player-2-image').attr('src',compImg);
            let compName = players[fightCompRef].name;
            $('#player-2-name').text(compName);
            let compHP = players[fightCompRef].hp;
            $('#player-2-hp').text(compHP);
            alert(compName + ' is ready to Battle!');

            //Stage Elements
            if(elementShow == true) {
                elementRead();
            }else{
                $('#stage-effect').text("No Dangers are present.");
            }
            
        }
    }
})


// ATTACK BUTTON

$('#attack-btn').on('click', function() {

    if($('#fighter-engage').hasClass("begin")) {

        player1HitDamage();

        const player1Name = $("#player-1-name").text();
        const player2Name = $("#player-2-name").text();
        
        $('#player-2-hp').text($('#player-2-hp').text() - player1HitDamage());

        $('#fight-stats').text(player1Name + " " + player1AttackName() + " " + player2Name + " and dealt " + player1HitDamage() + " damage.");
        // console.log(player1HitDamage);
        // console.log(player1HitDamage());
        
        warning();
        gameOver();

    }
})


// SPECIAL ATTACK BUTTON

$('#special-btn').on('click', function() {
    
    if($('#fighter-engage').hasClass("begin")) {
        
        var p1Special = player1SpecialDamage();
        
        let player1Name = $("#player-1-name").text();
        let player2Name = $("#player-2-name").text();

        if(player1SpecialDamage() === 0) {
            $('#fight-stats').text(player1Name + " tried to use " + player1SpecialName() + ", but failed.");
        }else{
            $('#player-2-hp').text($('#player-2-hp').text() - p1Special);


            $('#fight-stats').text(player1Name + " used " + player1SpecialName() + " to deal " + p1Special + " damage to " + player2Name + ".");
            // console.log(player1HitDamage);
            // console.log(player1HitDamage());

            
        }
        warning();
        gameOver();
    }
})

// RESET BUTTON

$('#reset-btn').on('click', function () {
    // Clicking the button shows characters and stages
    // Clear player 1, 2, and chosen-stage


    //Reveal players and stages
    $("div.hidden").toggleClass("hidden");
    $("h3.hidden").toggleClass("hidden");
    $('#start').toggleClass('hidden');
    $('.fight-title').text('Game Controller');
    $('#player-1').toggleClass('selected');
    $('#chosen-stage').toggleClass('selected');
    $('#fighter-engage').toggleClass("begin");
    $('#player-1 div.card').removeClass("border-secondary bg-danger bg-warning");
    $('#player-2 div.card').removeClass("border-secondary bg-danger bg-warning");    

})     

            
// Fight Controls

//player 1 hit stats

let player1HitDamage = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name === $("#player-1-name").text()) {
            // If critical hit at lower odds, give 3x damage.
            
            if(Math.random() < .25) {
                
                return ((Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]))*2);
                
            // If not critical hit, run normal hit.
            } else {
        
                return (Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]));

            }
        } 
    }
} 

let player1SpecialDamage = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-1-name").text()) {
            if(Math.random() > .6) {
                    
                return(Math.max(Math.ceil(Math.random() * players[i].special[0]), 10) + players[i].special[1]);
            }else{
                return 0;
            }
        }
    }
}

//Player 2 fight stats
let player2HitDamage = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
            // If critical hit at low odds, give 2x damage.
            
            if(Math.random() < .25) {
                
                return ((Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]))*2);
                
            // If not critical hit, run normal hit.
            } else {

            return (Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]));
            }
        }
    }
}

let player2SpecialDamage = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
            if(Math.random() > .6) {

                return (Math.max(Math.ceil(Math.random() * players[i].special[0]), 10) + players[i].special[1]);
            }else{
                return 0;
            }
        }
    }
}

//Health Effects

let player1HP = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-1-name").text()) {
            return ($('#player-1-hp').text(players[i].hp));
        }
    }
}

let player2HP = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
            return ($('#player-2-hp').text(players[i].hp));
        }
    }
}


// ATTACK NAMES

const player1AttackName = function () {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-1-name").text()) {
            return players[i].attackName;
        }
    }
}

const player1SpecialName = function () {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-1-name").text()) {
            return players[i].specialName;
        }
    }
}

const player2AttackName = function () {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
            return players[i].attackName;
        }
    }
}

const player2SpecialName = function () {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
            return players[i].specialName;
        }
    }
}

//Warning

var warning = function () {
    if (parseInt($('#player-1-hp').text()) <= 75) {
        $('#player-1 div.card').addClass("border-secondary bg-warning");
    } 
    if (parseInt($('#player-2-hp').text()) <= 75) {
        $('#player-2 div.card').addClass("border-secondary bg-warning");
    }
    if (parseInt($('#player-1-hp').text()) <= 35) {
        $('#player-1 div.card').addClass("border-secondary bg-danger");
    } 
    if (parseInt($('#player-2-hp').text()) <= 35) {
        $('#player-2 div.card').addClass("border-secondary bg-danger");
    }
    return;
}

// Game ends at 0
var gameOver = function () {
    if (parseInt($('#player-1-hp').text()) <= 0) {
        $('#player-1-hp').text("0");
        alert("You lose.");

    } if (parseInt($('#player-2-hp').text()) <= 0) {
        $('#player-2-hp').text("0");
        alert("You win!");
    }
    return;
}



// Element Impact

const stageName = $("#stage-name").text();

let elementShow = Math.random() > .6;

let elementRead = function() {

    for(i=0; i < stages.length; i++) {
        if(stages[i].name == stageName) {
        $('#stage-effect').text(stages[i].elements + " are present.");
        }
    }
}

let elementHitChance1 = Math.random() > .6;

let elementHitChance2 = Math.random() > .6;

let elementHitDamage1 = function() {
    for(i=0; i < stages.length; i++) {
        if(stages[i].name == stageName) {
 
            let player1Name = $("#player-1-name").text();
    
            if(elementShow === true) {

                $('#stage-effect').text(stages[i].elements + " are present.");

                if(elementHitChance1 === true) {
                    
                    
                    let stageHitDam = (Math.max(Math.ceil(Math.random() * stages[i].special[0]), 10) + stages[i].special[1]);
                
                    $('#fight-stats').append(player1Name + ' hit with ' + stages[i].elements + ' for ' + stageHitDam + ' damage.');
                    
                    return stageHitDam;
                    
                } else {
                    return $('#fight-stats').append(stages[i].elements + ' just miss ' + player1Name);
                }

                
            } else {
                return $('#stage-effect').text("No dangers are present.");

            }
          
        }
    }
}

let elementHitDamage2 = function() {
    for(i=0; i < stages.length; i++) {
        if(stages[i].name == stageName) {
 
            let player2Name = $("#player-2-name").text();
    
            if(elementShow === true) {

                if(elementHitChance2 === true) {
                    
                    
                    let stageHitDam = (Math.max(Math.ceil(Math.random() * stages[i].special[0]), 10) + stages[i].special[1]);
                
                    $('#fight-stats').append(player2Name + ' hit with ' + stages[i].elements + ' for ' + stageHitDam + ' damage.');
                    
                    return stageHitDam;
                    
                } else {
                    $('#fight-stats').append(stages[i].elements + ' just miss ' + player1Name);
                }

            } else {
                $('#stage-effect').text("No dangers are present.");

            }  
        }
    }
}


// Stage Attack
// $('#attack-btn, #special-btn #defend-btn').on('click', function() {
//     if($('#player-1').hasClass('selected')) {
//         if($('#chosen-stage').hasClass('selected')) {

//             elementHitDamage();
//         }
//     }
// })
       
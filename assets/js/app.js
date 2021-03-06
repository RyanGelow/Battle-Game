// Fighters listed

const players = [
    {
        name:"Ozzy", 
        style: "brawler",
        id: "#fighter-1",
        playerBtnSel: "brawler-btn-sel",
        image: "./assets/images/brawler.jpeg",
        home: 'The City',
        weakness: 'Plains',
        advantage: 'dark',
        attackName: "clobbered",
        specialName: "Combo Uppercut",
        hp: 400,
        defense: .9,
        hit: [15, 7],
        special: [30, 40],
    },
    {
        name: "Tenz", 
        style: 'ninja',
        id: "#fighter-2",
        playerBtnSel: "ninja-btn-sel",
        image: "./assets/images/ninja.jpg",
        home: 'Forest',
        weakness: 'Desert',
        advantage: 'dark',
        attackName: "slashed",
        specialName: "Shurikens",
        hp: 350,
        defense: .9,
        hit: [8,11],
        special: [35,35],
    },
    {
        name:"Hutch", 
        style: "gunner",
        id: "#fighter-3",
        playerBtnSel: "gunner-btn-sel",
        image: "./assets/images/gunner.jpg",
        home: 'Plains',
        weakness: 'Forest',
        advantage: 'bright',
        attackName: "pistol whipped",
        specialName: "Two Blasts",
        hp: 360,
        defense: .9,
        hit: [12,12],
        special: [40,35],
    },
    {
        name:"Jinx", 
        style: "warrior",
        id: "#fighter-4",
        playerBtnSel: "warrior-btn-sel",
        image: "./assets/images/warrior.jpg",
        home: 'Desert',
        weakness: 'The City',
        advantage: 'bright',
        attackName: "jump kicked",
        specialName: "Whip Lash",
        hp: 380,
        defense: .9,
        hit: [11,10],
        special: [35,35],
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
            $('.game-over').removeClass('hidden');
            $('.ready').removeClass('hidden');
            $('#start-fight').removeClass('hidden');

            //Stage Elements
            elementTime()
            
        }
    }
})


// ATTACK BUTTON

$('#attack-btn').on('click', function() {

    if($('#fighter-engage').hasClass("begin")) {

        player1HitDamage();
        player2HitDamage();

        const player1Name = $("#player-1-name").text();
        const player2Name = $("#player-2-name").text();
        
        $('#player-2-hp').text($('#player-2-hp').text() - player1HitDamage());

        $('#fight-stats').text(player1Name + " " + player1AttackName() + " " + player2Name + " and dealt " + player1HitDamage() + " damage.");

        $('#player-1-hp').text($('#player-1-hp').text() - player2HitDamage());

        $('#fight-stats').append('<br>' + player2Name + " " + player2AttackName() + " " + player1Name + " and dealt " + player2HitDamage() + " damage.");

        if(elementShow === false) {
            elementTime();
        }
        warning();
        gameOver();

    }
})


// SPECIAL ATTACK BUTTON

$('#special-btn').on('click', function() {
    
    if($('#fighter-engage').hasClass("begin")) {
        
        var p1Special = player1SpecialDamage();
        var p2Special = player2SpecialDamage();
        
        let player1Name = $("#player-1-name").text();
        let player2Name = $("#player-2-name").text();

        if(p1Special == 0) {
            $('#fight-stats').text(player1Name + " tried to use " + player1SpecialName() + ", but failed.");
        
        }if (p1Special > 0) {
            $('#player-2-hp').text($('#player-2-hp').text() - p1Special);

            $('#fight-stats').text(player1Name + " used " + player1SpecialName() + " to deal " + p1Special + " damage to " + player2Name + ".");

        }if(p2Special == 0) {
            $('#fight-stats').append('<br>' + player2Name + " tried to use " + player2SpecialName() + ", but failed.");
        
        }if(p2Special > 0) {
            $('#player-1-hp').text($('#player-1-hp').text() - p2Special);

            $('#fight-stats').append('<br>' + player2Name + " used " + player2SpecialName() + " to deal " + p2Special + " damage to " + player1Name + ".");
            
        }

        if(elementShow === false) {
            elementTime();
        }

        warning();
        gameOver();
    }
})

// DEFEND BUTTON

$('#defend-btn').on('click', function() {

    if($('#fighter-engage').hasClass("begin")) {

        let player1Def = player1Defense();
        let player2Def = player2Defense();

        const player1Name = $("#player-1-name").text();
        const player2Name = $("#player-2-name").text();
        
        $('#player-1-hp').text($('#player-1-hp').text() - player1Def);

        if(player1Def < 0) {
            $('#fight-stats').text(player1Name + " successfully defended " + player2Name + "'s attack and gained " + player1Def * -1 + " HP.");        
        } else {
            $('#fight-stats').text(player1Name + " got hit by " + player2Name + " for " + player1Def + " damage.");

        }

        $('#player-2-hp').text($('#player-2-hp').text() - player2Def);

        if(player2Def < 0) {
            $('#fight-stats').append("<br>" + player2Name + " successfully defended " + player1Name + "'s attack and gained " + player2Def * -1 + " HP.");        
        } else {
            $('#fight-stats').append("<br>" + player2Name + " got hit by " + player1Name + " for " + player2Def + " damage.");

        }

        if(elementShow === false) {
            elementTime();
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
    $('#player-1').removeClass('selected');
    $('#chosen-stage').removeClass('selected');
    $('#fighter-engage').toggleClass("begin");
    $('#player-1 div.card').removeClass("border-secondary bg-danger bg-warning");
    $('#player-2 div.card').removeClass("border-secondary bg-danger bg-warning");    
    $('.game-over').addClass('hidden');
    $('.ready').text('Ready for another one? ');
    
    for(let i = 0; i < players.length; i++) {
        if(($('#brawler-btn-sel, #ninja-btn-sel, #gunner-btn-sel, #warrior-btn-sel').id) == players[i].playerBtnSel) {
            let playerID = players[i].id;
            $(playerID+" div.card").addClass("border-primary").removeClass("bg-secondary");
        }    
    }

    for(let i = 0; i < stages.length; i++) {
        if(($('#forest-btn-sel, #plains-btn-sel, #desert-btn-sel, #city-btn-sel').id) == stages[i].stageBtnSel) {
            let stageID = stages[i].id;
            $(stageID+" div.card").addClass("border-primary").removeClass("bg-secondary");
        }
    }
    $(".fighter div.card, .stage div.card").toggleClass("bg-secondary border-secondary").addClass("border-primary");

})     

//Stage Attack

$('#attack-btn, #special-btn, #defend-btn').on('click', function() {
    if($('#fighter-engage').hasClass("begin")) {

        elementHitDamage1();
        elementHitDamage2();
    }
})

            
// Fight Controls

//player 1 hit stats

let player1HitDamage = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name === $("#player-1-name").text()) {
            // If critical hit at lower odds, give 3x damage.
            if(players[i].home == $('#stage-name').text()) {
                if(Math.random() < .4) {
                
                    return ((Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]))*2);
                }
            }if(players[i].weakness == $('#stage-name').text()) {
                if(Math.random() < .1) {
                
                    return ((Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]))*2);
                }

            }else if(Math.random() < .25) {
                
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
                    
                return(Math.max(Math.ceil(Math.random() * players[i].special[0]), 15) + players[i].special[1]);
            }else{
                return 0;
            }
        }
    }
}

let player1Defense = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
            if(Math.random() > .2) {
                    
                return(Math.max(Math.ceil(Math.random() * players[i].special[0]), 15) + players[i].special[1])*-1;
            }else{
                return(Math.max(Math.ceil(Math.random() * players[i].hit[0]), 15) + players[i].hit[1]);
            }
        }
    }
}

//Player 2 fight stats
let player2HitDamage = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-2-name").text()) {
             // If critical hit at lower odds, give 3x damage.
             if(players[i].home == $('#stage-name').text()) {
                if(Math.random() < .4) {
                
                    return ((Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]))*2);
                }
            }if(players[i].weakness == $('#stage-name').text()) {
                if(Math.random() < .1) {
                
                    return ((Math.max(Math.ceil(Math.random() * (players[i].hit[0])), 5) + (players[i].hit[1]))*2);
                }

            }else if(Math.random() < .25) {
                
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

let player2Defense = function() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].name == $("#player-1-name").text()) {
            if(Math.random() > .3) {
                    
                return(Math.max(Math.ceil(Math.random() * players[i].special[0]), 15) + players[i].special[1])*-1;
            }else{
                return(Math.max(Math.ceil(Math.random() * players[i].hit[0]), 15) + players[i].hit[1]);
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

// Element Impact

const stageName = $("#stage-name").text();

elementShow = false;

let elementShown = function(){
    if(Math.random() > .6) {
        elementShow = true;
    }else{
        elementShow = false;
    }
}

let elementRead;

let elementWrite = function() {
    
    for(i=0; i < stages.length; i++) {
        if(stages[i].name == stageName) {
            elementRead = $('#stage-effect').text(stages[i].elements + " are present.");
        }
    }
}

let elementTime = function() {
    elementShown()
    if(elementShow === true) {
        var number = Math.max(Math.ceil((Math.random() * 30)),15);
        var intervalId;
        function run() {
            clearInterval(intervalId)
            intervalId = setInterval(decrement, 1000);
            elementWrite();
        }
        function decrement() {
            number--;
            if (number === 0) {
                stop();
                elementShow = false;
                $('#stage-effect').text("No Dangers are present.");      
            }
        }

        function stop() {
            clearInterval(intervalId);
            elementShow = false;
        }
        run();
    }
}

let elementHitChance = false;

let elementHitChance1 = function(){
    if(Math.random() > .5) {
        elementHitChance = true;
    }else{
        elementHitChance = false;
    }
}

let elementHitChance2 = function(){
    if(Math.random() > .5) {
        elementHitChance = true;
    }else{
        elementHitChance = false;
    }
}

let elementHitDamage1 = function() {
    for(i=0; i < stages.length; i++) {
        if(stages[i].name == stageName) {
 
            let player1Name = $("#player-1-name").text();
    
            if(elementShow === true) {

                elementHitChance1()
                if(elementHitChance === true) {
                    
                    let stageHitDam = (Math.max(Math.ceil(Math.random() * stages[i].hit[0]), 1) + stages[i].hit[1]);
                
                    return $('#fight-stats').append(player1Name + ' hit with ' + stages[i].elements + ' for ' + stageHitDam + ' damage.');    
                    
                } else {
                   
                    return $('#fight-stats').append(stages[i].elements + ' just missed ' + player1Name);
                }
            }   
        }
    }
}

let elementHitDamage2 = function() {
    for(i=0; i < stages.length; i++) {
        if(stages[i].name == stageName) {
 
            let player2Name = $("#player-2-name").text();
    
            if(elementShow === true) {

                elementHitChance2()
                if(elementHitChance === true) {
                                    
                    let stageHitDam = (Math.max(Math.ceil(Math.random() * stages[i].hit[0]), 1) + stages[i].hit[1]);
                
                    $('#fight-stats').append(player2Name + ' hit with ' + stages[i].elements + ' for ' + stageHitDam + ' damage.');
                    
                    return stageHitDam;
                    
                } else {
                    return $('#fight-stats').append(stages[i].elements + ' just miss ' + player2Name);
                }
            }  
        }
    }
}

//Warning

var warning = function () {
    if (parseInt($('#player-1-hp').text()) > 75) {
        $('#player-1 div.card').removeClass("border-secondary bg-warning bg-danger").addClass("border-primary bg-primary");
    }
    if (parseInt($('#player-2-hp').text()) > 75) {
        $('#player-2 div.card').removeClass("border-secondary bg-warning bg-danger").addClass("border-primary bg-primary");
    }
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
    if((parseInt($('#player-1-hp').text()) <= 0) && (parseInt($('#player-2-hp').text()) <= 0)) {
        
        if((parseInt($('#player-1-hp').text())) === (parseInt($('#player-2-hp').text()))) {
            $('#player-2-hp').text("0");
            $('#player-1-hp').text("0");

            alert("You tie!");
            $('.game-over').addClass('hidden');
            $('#fight-stats').text('Game Over - Tie Game');
                
        }if((parseInt($('#player-1-hp').text())) > (parseInt($('#player-2-hp').text()))) {
            $('#player-2-hp').text("0");
            $('#player-1-hp').text("0");
            console.log("you lost better");
            alert("You win!");
            $('.game-over').addClass('hidden');
            $('#fight-stats').text('Game Over - Player 1 Wins');
        
        }if((parseInt($('#player-1-hp').text())) < (parseInt($('#player-2-hp').text()))) {
            $('#player-2-hp').text("0");
            $('#player-1-hp').text("0");
            console.log("you lost worse");
            alert("You lose.");
            $('.game-over').addClass('hidden');
            $('#fight-stats').text('Game Over - Player 2 Wins');
        }
    
    }if (parseInt($('#player-1-hp').text()) <= 0) {
        $('#player-1-hp').text("0");
        console.log("only you lost");
        alert("You lose.");
        $('.game-over').addClass('hidden');
        $('#fight-stats').text('Game Over - Player 2 Wins');

    }if (parseInt($('#player-2-hp').text()) <= 0) {
        $('#player-2-hp').text("0");
        console.log("only you won");
        alert("You win!");
        $('.game-over').addClass('hidden');
        $('#fight-stats').text('Game Over - Player 1 Wins');
    }
    return;
}
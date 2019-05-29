// Start Game

$("#start-game").on('click', function startGame() {

    // Clicking the button shows characters and stages
    $("div.hidden").toggleClass("hidden");
    $("h3.hidden").toggleClass("hidden");
    
    //Select fighter and dark overlay on non-selection
    $('#brawler-btn-sel, #ninja-btn-sel, #gunner-btn-sel, #warrior-btn-sel').click(function () {
        for(let i = 0; i < players.length; i++) {
            if(((this).id) === players[i].playerBtnSel) {
                // console.log(i);
                let playerID = players[i].id;
                // console.log(players[i].id);
                $(playerID+" div.card").addClass("border-primary").removeClass("bg-secondary");
                // console.log(playerID+" div.card");
                
                //Pass info to Player 1
                $('#player-1').addClass('selected');
                let playerName = players[i].name;
                $('#player-1-name').text(playerName);
                let playerImage = players[i].image;
                $('#player-1-image').attr('src',playerImage);
                let playerHP = players[i].hp;
                $('#player-1-hp').html(playerHP);
                

            } else {
                let playerID = players[i].id;
                // console.log(playerID);
                $(playerID+" div.card").addClass("bg-secondary").removeClass("border-primary");

            }
                
        }
    }) 

    //Select Stage and dark overlay on non-selection
    $('#forest-btn-sel, #plains-btn-sel, #desert-btn-sel, #city-btn-sel').click(function () {
        for(let i = 0; i < stages.length; i++) {
            if(((this).id) == stages[i].stageBtnSel) {
                // console.log(i);
                let stageID = stages[i].id;
                // console.log(players[i].id);
                $(stageID+" div.card").addClass("border-primary").removeClass("bg-secondary");
                // console.log(playerID+" div.card");

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
                // console.log(stageID);
            }
        }
    })
})            
    




// Start Fight
$('#start-fight').on('click', function() {
    if($('#player-1').hasClass('selected')) {
        if($('#chosen-stage').hasClass('selected')) {
            // Clicking the button shows characters and stages
            $(".unhidden").addClass("hidden");
            $('.fight-title').append(' - Start The Fight!')

            //Random Select Player 2
            let fightCompRef = Math.floor(Math.random() * 4);
            
            //One chance to change if same character
            if(fightCompRef = $('#player-1-name').html()) {
                
            } else {
                //Random opponent selected
                let compImg = players[fightCompRef].image;
                $('#player-2-image').attr('src',compImg);
                let compName = players[fightCompRef].name;
                $('#player-2-name').text(compName);
                let compHP = players[fightCompRef].hp;
                $('#player-2-hp').text(compHP);
            }
            
            alert(compName + ' is ready to Battle!');


            
            // Fight Controls
            
            // Attack

            $('#attack-btn').on('click', function() {
                //Pass on text reading player 1 (name) delivers x damage to player 2(name)
                for(i = 0; i < players.length; i++) {
                    if($("#player-1-name").text() == (players[i].name)) {
                        console.log(players[i].name);
                        console.log(players[i].hit);
                        let hitDamage = players[i].hit;
                        $('#fight-stats').html(players[i].name + " dealt " + hitDamage + " damage to Player 2.");
                        let remainingHP = parseInt($('#player-2-hp').text()) - hitDamage;
                        console.log(remainingHP);
                        $('#player-2-hp').text(remainingHP);
                    } else if($("#player-2-name").text() == (players[i].name)) {
                        console.log(players[i].name);
                        console.log(players[i].hit);
                        let hitDamage = players[i].hit;
                        $('#fight-stats').append("<br>" + players[i].name + " dealt "+ hitDamage + " damage to Player 1.");
                        let remainingHP = parseInt($('#player-1-hp').text()) - hitDamage;
                        console.log(remainingHP);
                        $('#player-1-hp').text(remainingHP);
                    }
                }

                // Stage Attack

                for(i = 0; i < stages.length; i++) {   

                    if($("#stage-name").text() == (stages[i].name)) {
                        console.log(stages[i].name);
                        console.log(stages[i].hit);
                        let hitChance = stages[i].elementChance;
                        let hitDamage = stages[i].hit;
                        const element = stages[i].elements;
                        if (hitChance > 1) {
                            $('#stage-effect').html(element);
                            if (Math.random() > .5) {
                                $('#fight-stats').append("<br>" + stages[i].elements + " dealt "+ hitDamage + " damage to Player 1.");
                                let remainingHP = parseInt($('#player-1-hp').text()) - hitDamage;
                                console.log(remainingHP);
                                $('#player-1-hp').text(remainingHP);
                            } else if (Math.random() > .5) {
                                $('#fight-stats').append("<br>" + stages[i].elements + " dealt "+ hitDamage + " damage to Player 2.");
                                let remainingHP = parseInt($('#player-2-hp').text()) - hitDamage;
                                console.log(remainingHP);
                                $('#player-2-hp').text(remainingHP);
                            } 
                        } else {
                            $('#fight-stats').append("<br>" + stages[i].name + " is not showing any signs of " + stages[i].elements);
                        
                        }
                    }
                }
            })
            
            // Special Attack

            $('#special-btn').on('click', function() {
                //Pass on text reading player 1 (name) delivers x damage to player 2(name)
                for(i = 0; i < players.length; i++) {
                    if($("#player-1-name").text() == (players[i].name)) {
                        if(Math.random() > .5) {
                            let hitDamage = players[i].special;
                            console.log(hitDamage);
                            $('#fight-stats').html(players[i].name + " dealt " + players[i].specialName + " for " + hitDamage + " damage to Player 2.");
                            let remainingHP = parseInt($('#player-2-hp').text()) - hitDamage;
                            console.log(remainingHP);
                            $('#player-2-hp').text(remainingHP);
                        }
                    } else if($("#player-2-name").text() == (players[i].name)) {
                        if(Math.random() > .55) {
                            let hitDamage = players[i].special;
                            console.log(hitDamage);
                            $('#fight-stats').append("<br>" + players[i].name + " connected with " + players[i].specialName + " for " + hitDamage + " damage to Player 1.");
                        let remainingHP = parseInt($('#player-1-hp').text()) - hitDamage;
                        console.log(remainingHP);
                        $('#player-1-hp').text(remainingHP);
                        }
                    }
                }

                // Stage attack

                for(i = 0; i < stages.length; i++) {   

                    if($("#stage-name").text() == (stages[i].name)) {
                        console.log(stages[i].name);
                        console.log(stages[i].hit);
                        let hitChance = stages[i].elementChance;
                        let hitDamage = stages[i].hit;
                        const element = stages[i].elements;
                        if (hitChance > 1) {
                            $('#stage-effect').html(element);
                            if (Math.random() > .5) {
                                $('#fight-stats').append("<br>" + stages[i].elements + " dealt "+ hitDamage + " damage to Player 1.");
                                let remainingHP = parseInt($('#player-1-hp').text()) - hitDamage;
                                console.log(remainingHP);
                                $('#player-1-hp').text(remainingHP);
                            } else if (Math.random() > .5) {
                                $('#fight-stats').append("<br>" + stages[i].elements + " dealt "+ hitDamage + " damage to Player 2.");
                                let remainingHP = parseInt($('#player-2-hp').text()) - hitDamage;
                                console.log(remainingHP);
                                $('#player-2-hp').text(remainingHP);
                            } 
                        } else {
                            $('#fight-stats').append("<br>" + stages[i].name + " is not showing any signs of " + stages[i].elements);
                        
                        }
                    }
                }
            })
            $('#reser-btn').on('click', startGame());
            
        }
    }
})

//Warning

if (parseInt($('#player-1-hp').html()) <= 25) {
    $('#player-1-hp div.card').addClass("border-secondary bg-warning");
} 
if (parseInt($('#player-2-hp').html()) <= 25) {
    $('#player-2-hp div.card').addClass("border-secondary bg-warning");
}

// Game ends at 0

if (parseInt($('#player-1-hp').html()) <= 0) {
    $('#player-1-hp').text("0");
    alert("You lose.");

} if (parseInt($('#player-2-hp').html()) <= 0) {
    $('#player-2-hp').text("0");
    alert("You win!");
}
// var critPct = if(){
//     (Math.random() * .35);
// }


// Fighters listed

let players = [
    {
        name:"Ozzy", 
        style: "brawler",
        id: "#fighter-1",
        playerBtnSel: "brawler-btn-sel",
        image: "./assets/images/brawler.jpeg",
        home: 'city',
        weakness: 'plains',
        advantage: 'dark',
        specialName: "Combo Uppercut",
        hp: 120,
        defense: .9,
        hit: (Math.ceil(Math.random() * 10) + 5),
        special: (Math.ceil(Math.random() * 20) + 25),
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
        specialName: "Shurikens",
        hp: 100,
        defense: .9,
        hit: (Math.ceil(Math.random() * 8) + 10),
        special: (Math.ceil(Math.random() * 25) + 25),
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
        specialName: "Two Blasts",
        hp: 90,
        defense: .9,
        hit: (Math.ceil(Math.random() * 10) + 10),
        special: (Math.ceil(Math.random() * 30) + 25),
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
        specialName: "Whip Lash",
        hp: 110,
        defense: .9,
        hit: (Math.ceil(Math.random() * 8) + 8),
        special: (Math.ceil(Math.random() * 25) + 30),
    }
]

let critPct = (Math.ceil(Math.random() * .25));


// Stages listed

let stages = [
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
    hit: (Math.ceil(Math.random() * 3) + 4),
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
    hit: (Math.ceil(Math.random() * 2)),    
    },
    {
    name: 'Desert',
    id: "#stage-3",
    stageBtnSel: "desert-btn-sel",
    image: "./assets/images/desert.jpg",
    advantage: 'bright',
    home: 'warrior',
    weakness: 'ninja',
    elements: "Sandstorm",
    hit: (Math.ceil(Math.random() * 5) + 2),
    
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
    hit: (Math.ceil(Math.random() * 3) + 2),
    },
]

const stageHitPct = (Math.ceil(Math.random() * .2));


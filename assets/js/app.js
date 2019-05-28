// Start Game

$("#start-game").on('click', function() {

    // Clicking the button shows characters and stages
    $("div.hidden").toggleClass("hidden");
    $("h3.hidden").toggleClass("hidden");
    
    //Select fighter and dark overlay on non-selection
    $('#brawler-btn-sel, #ninja-btn-sel, #gunner-btn-sel, #warrior-btn-sel').click(function () {
        for(let i = 0; i < players.length; i++) {
            if(((this).id) == players[i].playerBtnSel) {
                // console.log(i);
                let playerID = players[i].id;
                // console.log(players[i].id);
                $(playerID+" div.card").addClass("border-primary selected").removeClass("bg-secondary");
                // console.log(playerID+" div.card");
            
            } else {
                let playerID = players[i].id;
                $(playerID+" div.card").addClass("bg-secondary").removeClass("border-primary selected");

            }
                
        }
    }) 

        // }
        // if (this.id) {
        //     //Assign current
        //     $(".fighter div.card").addClass("border-primary selected").removeClass("bg-secondary");
        //     // $(this.id).addClass("selected " + if(this.id == "#"+players.name+"-btn-sel") {
        //     //     players.name;
        //     // })
        // }    //Clear others
        // if(!this.id) {
        //     $(".fighter div.card").addClass("bg-secondary ").removeClass("border-primary selected");
        //     $(!this.id).addClass("selected");
    
        //     $("#fighter-2 div.card, #fighter-3 div.card, #fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary selected ninja gunner warrior");
        //     //Fighter info transfer to bottom
        //     $('#player-1-image').attr('src', './assets/images/brawler.jpeg');
        //     $('#player-1-name').text('Ozzy');
        //     $('#player-1').addClass('selected brawler').removeClass("ninja gunner warrior");;

        // }
        // else if (this.id == 'ninja-btn-sel') {
        //     //Assign current
        //     $("#fighter-2 div.card").addClass("border-primary selected").removeClass("bg-secondary");
        //     $("#fighter-2").addClass("selected");
        //     //Clear others
        //     $("#fighter-1 div.card, #fighter-3 div.card, #fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary selected brawler gunner warrior");
        //     //Fighter info transfer to bottom
        //     $('#player-1-image').attr('src', './assets/images/ninja.jpg');
        //     $('#player-1-name').text('Tenz');
        //     $('#player-1').addClass('selected ninja').removeClass("brawler gunner warrior");
        // }
        // else if (this.id == 'gunner-btn-sel') {
            
        //     //Assign current
        //     $("#fighter-3 div.card").addClass("border-primary selected").removeClass("bg-secondary");
        //     $("#fighter-3").addClass("selected");
        //     //Clear others
        //     $("#fighter-2 div.card, #fighter-1 div.card, #fighter-4 div.card").addClass("bg-secondary").removeClass("border-primary selected ninja brawler warrior");
        //     //Fighter info transfer to bottom
        //     $('#player-1-image').attr('src', './assets/images/gunner.jpg');
        //     $('#player-1-name').text('Hutch');
        //     $('#player-1').addClass('selected gunner').removeClass("brawler ninja warrior");
        // }
        // else if (this.id == 'warrior-btn-sel') {
        //     //Assign current
        //     $("#fighter-4 div.card").addClass("border-primary selected").removeClass("bg-secondary");
        //     $("#fighter-4").addClass("selected");
        //     //Clear others
        //     $("#fighter-2 div.card, #fighter-3 div.card, #fighter-1 div.card").addClass("bg-secondary").removeClass("border-primary selected ninja gunner brawler");
        //     //Fighter info transfer to bottom
        //     $('#player-1-image').attr('src', './assets/images/warrior.jpg');
        //     $('#player-1-name').text('Jinx');
        //     $('#player-1').addClass('selected warrior').removeClass("brawler ninja gunner");
        // }
        

    //Move fighter to lower card
    
    //Select stage and dark overlay on non-selection
    //Move stage to lower card...
    
    $('#forest-btn-sel, #plains-btn-sel, #desert-btn-sel, #city-btn-sel').click(function () {
        if (this.id == 'forest-btn-sel') {
            //Assign Stage
            $("#stage-1 div.card").addClass("border-primary selected").removeClass("bg-secondary");
            $("#stage-1").addClass("selected");
            //Clear others
            $("#stage-2 div.card, #stage-3 div.card, #stage-4 div.card").addClass("bg-secondary").removeClass("border-primary selected");
            //Stage info to bottom
            $('#stage-pic').attr('src', './assets/images/forest.jpg');
            $('#stage-name').text('Forest');
            $('#chosen-stage').addClass('selected forest').removeClass('plains desert city');
            
        } else if (this.id == 'plains-btn-sel') {
            //Assign Stage
            $("#stage-2 div.card").addClass("border-primary selected").removeClass("bg-secondary");
            $("#stage-2").addClass("selected");
            //Clear others
            $("#stage-1 div.card, #stage-3 div.card, #stage-4 div.card").addClass("bg-secondary").removeClass("border-primary selected");
            $('#stage-pic').attr('src', './assets/images/plains.jpg');
            //Stage to bottom
            $('#stage-name').text('Plains');
            $('#chosen-stage').addClass('selected plains').removeClass('forest desert city');
        } else if (this.id == 'desert-btn-sel') {
            //Assign Stage
            $("#stage-3 div.card").addClass("border-primary selected").removeClass("bg-secondary");
            $("#stage-3").addClass("selected");
            //Clear others
            $("#stage-2 div.card, #stage-1 div.card, #stage-4 div.card").addClass("bg-secondary").removeClass("border-primary selected");
            //Stage to bottom
            $('#stage-pic').attr('src', './assets/images/desert.jpg');
            $('#stage-name').text('Desert');
            $('#chosen-stage').addClass('selected desert').removeClass('forest plains city');
        } else if (this.id == 'city-btn-sel') {
            //Assign stage
            $("#stage-4 div.card").addClass("border-primary selected").removeClass("bg-secondary");
            $("#stage-4").addClass("selected");
            //Clear others
            $("#stage-2 div.card, #stage-3 div.card, #stage-1 div.card").addClass("bg-secondary").removeClass("border-primary selected");
            //Stage to bottom
            $('#stage-pic').attr('src', './assets/images/city.jpg');
            $('#stage-name').text('The City');
            $('#chosen-stage').addClass('selected city').removeClass('forest plains desert');
        }
    });
});
    


//Random Select Player 2
let fightCompRef = Math.floor(Math.random() * 4);

// Start Fight
$('#start-fight').on('click', function() {
    if($('#player-1').hasClass('selected')) {
        if($('#chosen-stage').hasClass('selected')) {
            // Clicking the button shows characters and stages
            $(".unhidden").addClass("hidden");
            $('.fight-title').append(' - Start The Fight!')
            
            //Random opponent selected
            $('#player-2-image').attr('src',players[fightCompRef].image);
            $('#player-2-name').text(players[fightCompRef].name);
            
            alert(players[fightCompRef].name + ' is ready to Battle!');


        }
    }
})

    


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
        special: "Combo Uppercut",
        hp: 120,
        defence: .9,
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
        special: "Shurikens",
        hp: 100,
        defence: .9,
        hit: (Math.ceil(Math.random() * 7.5) + 10),
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
        special: "Two Blasts",
        hp: 90,
        defence: .9,
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
        special: "Whip Lash",
        hp: 110,
        defence: .9,
        hit: (Math.ceil(Math.random() * 7.5) + 7.5),
        special: (Math.ceil(Math.random() * 25) + 30),
    }
]

let critPct = (Math.ceil(Math.random() * .25));


// Stages listed

let stages = [
    {
    name: 'Desert',
    image: "./assets/images/desert.jpg",
    advantage: 'bright',
    home: 'warrior',
    weakness: 'ninja',
    elements: "sandstorm",
    hit: (Math.ceil(Math.random() * 5) + 2),
    
    },
    {
    name: 'The City',
    image: "./assets/images/city.jpg",
    advantage: 'dark',
    home: 'brawler',
    weakness: 'warrior',
    hit: (Math.ceil(Math.random() * 3) + 2),
    },
    {
    name: 'Plains',
    image: "./assets/images/plains.jpg",
    advantage: 'bright',
    home: 'gunner',
    weakness: 'brawler',
    hit: (Math.ceil(Math.random() * 2)),    
    },
    {
    name: 'Forest',
    image: "./assets/images/forest.jpg",
    advantage: 'dark',
    home: 'ninja',
    weakness: 'gunner',
    hit: (Math.ceil(Math.random() * 3) + 4),
    },
]

const stageHitPct = (Math.ceil(Math.random() * .2));

//Fighting scoring

// var hitDamage = $(fighter[hit]);

// var critPct = if(){
//     (Math.random() * .35);
// }

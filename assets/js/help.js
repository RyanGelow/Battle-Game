let players = [
    {
        name: 'Brawler',
        attackDamage: 60,
        health: 400,
        attacker: false,
        defender: false
    },
    {
        name: 'warrior',
        attackDamage: 60,
        health: 400,
        attacker: false,
        defender: false
    },
    {
        name: 'gunner',
        attackDamage: 60,
        health: 400,
        attacker: false,
        defender: false
    },
    {
        name: 'ninja',
        attackDamage: 60,
        health: 400,
        attacker: false,
        defender: false
    }
];


var playerOneChosen = false



function displayPlayers(){
    $('#players-container').empty();
    for (let i = 0; i < players.length; i++) {
        const div = $('<div>');
        div.addClass('player');
        div.append(players[i].name);
        if(players[i].attacker){
            div.addClass('attacker');
        };

        if(players[i].defender){
            div.addClass('defender');
        };
        $('#players-container').append(div);
    };
}


displayPlayers();


$('.player').on('click', function(){
    let chosenName = $(this).text();
    console.log(playerOneChosen);
    if (playerOneChosen == true){
        console.log('if true');
        for (let i = 0; i < players.length; i++) {
            if(players[i].name == chosenName){
                 players[i].defender = true
            };
        };
    }
    

    if (playerOneChosen == false){
        console.log('if false');
        for (let i = 0; i < players.length; i++) {
            if(players[i].name == chosenName){
                 players[i].attacker = true
            };
        };
        playerOneChosen = true
    } 
    

    displayPlayers();
});
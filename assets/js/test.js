$('#brawler-btn-sel, #ninja-btn-sel, #gunner-btn-sel, #warrior-btn-sel').click(function () {
    let btnSel = $(this.fighter).addClass("border-primary").removeClass("bg-secondary") && $(this#fighter).addClass("selected") && $(!this.fighter).addClass("bg-secondary").removeClass("border-primary") && (!this#fighter).removeClass("selected");
    
    if($('.fighter').hasClass('selected')
    
    for (let i = 0; i < players.length; i++) {
        let playerSel = {
            $('#player-1-image').attr('src', 'players[i].image');
            $('#player-1-name').text('players[i].name');
            $('#player-1 div.card').addClass('selected' ).removeClass("ninja gunner warrior");;
        
        }
    }
})



    //<div class="container" id="fighter-engage">
    // <div class="row">
    // <div class="col-xs-12 col-sm-12 col-md-12">    
    //     <div class="row">
    //         <div class="col p-1" id="player-1">
    //             <div class="card bg-primary text-white">
                
    //                 <img src="./assets/images/filler1.jpg" class="card-img-top" id="player-1-image" alt="#">
    //                 <div class="card-body p-1">
                    
    //                     <!-- Player 1 Name -->
    //                     <h5 class="card-title text-center mb-0 player-selected" id="player-1-name">TBD</h5>
                            
    //                     <!-- Player 1 Description -->
    //                     <p class="card-text m-0 p-0 text-center"><small>HP: </small><span id="player-1-hp"></span></small></p>
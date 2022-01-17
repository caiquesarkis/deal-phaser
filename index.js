

// Functions - Move those to external files
let x_initial = window.innerWidth*3/7
let y_initial = window.innerHeight - 55


function setOnhoverShow(card){
    card.setInteractive().on('pointerover',()=>{
        card.y -= 40
        card.x -= 30
    })
    card.setInteractive().on('pointerout',()=>{
        card.y += 40
        card.x += 30
    })
    card.input.alwaysEnabled = true;
}

function setScale(card, scaleFactor){
    card.setScale(scaleFactor)
}

function deckCurve(playerDeck){
    playerDeck.map((card,index)=>{
        card.x = x_initial
        card.y = y_initial
        console.log(index - Math.floor(playerDeck.length/2))
        card.angle = 2*(index - Math.floor(playerDeck.length/2))
        card.y += 5*(index- Math.floor(playerDeck.length/2))**2 
        card.x += 45*index
    })
    
}

function loadCards(gameScene){
    gameDeck.map((card,index)=>{
        gameScene.load.image(card, `assets/${card}.png`);
    })
}

function initialHand(card,playerDeck){
    setOnhoverShow(card)
    setScale(card,0.5)
    deckCurve(playerDeck)
}


// Game
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


function addCardToDeck(object){
    let lastIndexGameDeck = gameDeck.length - 1;
    playerDeck.push(object.add.sprite(x_initial, y_initial, gameDeck[lastIndexGameDeck]));

    let lastIndexPlayerDeck = playerDeck.length - 1;
    let card = playerDeck[lastIndexPlayerDeck]
    setOnhoverShow(card)
    setScale(card,0.5)
    deckCurve(playerDeck)
}

var game = new Phaser.Game(config);

let gameDeck = ["blue-card","green-card","pink-card","yellow-card","red-card"]
let playerDeck = []

function preload ()
{
    loadCards(this)
}

function create (){
    let spacing = 60
    let object = this


    gameDeck.map((card,index)=>{
        if(index < gameDeck.length - 1){
            playerDeck.push(this.add.sprite(x_initial + index*spacing, y_initial+10, card));
        }   
    })

    playerDeck.map((card,index)=>{
        initialHand(card, playerDeck)
    })

    console.log(playerDeck)

    this.input.mouse.disableContextMenu();
    this.input.on('pointerup', function (pointer) {

        if (pointer.event.button === 0)
        {
            console.log('Left button released');
        }
        else if (pointer.event.button === 1)
        {
            console.log('Middle button released');
        }
        else if (pointer.event.button === 2)
        {
            console.log('Right button released');
        }

    });

    this.input.on('pointerdown', function (pointer) {

        if (pointer.event.button === 0)
        {
            console.log('Left button pressed');
            
            addCardToDeck(object)
        }
        else if (pointer.event.button === 1)
        {
            console.log('Middle button pressed');
        }
        else if (pointer.event.button === 2)
        {
            console.log('Right button pressed');
        }

    });

}

function update(){

    
}


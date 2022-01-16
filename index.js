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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('blue-card', 'assets/blue-card.png');
    this.load.image('green-card', 'assets/green-card.png');
    this.load.image('pink-card', 'assets/pink-card.png');
    this.load.image('yellow-card', 'assets/yellow-card.png');
}

function create ()
{
    let x_initial = window.innerWidth/2 - 100
    let y_initial = window.innerHeight
    let spacing = 60
    let scaleFactor = 0.5
    blueCard = this.add.sprite(x_initial, y_initial+10, 'blue-card');
    greenCard = this.add.sprite(x_initial+spacing, y_initial, 'green-card');
    pinkCard = this.add.sprite(x_initial+2*spacing, y_initial, 'pink-card');
    yellowCard = this.add.sprite(x_initial+3*spacing, y_initial+10, 'yellow-card');
    blueCard.setScale(scaleFactor)
    greenCard.setScale(scaleFactor)
    pinkCard.setScale(scaleFactor)
    yellowCard.setScale(scaleFactor)
    blueCard.rotation -= 0.2
    greenCard.rotation -= 0.1
    pinkCard.rotation += 0.1
    yellowCard.rotation += 0.2
    

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


    blueCard.setInteractive().on('pointerover',(item)=>{
        console.log(item)
        blueCard.y -= 40
    })
    blueCard.setInteractive().on('pointerout',(item)=>{
        console.log(item)
        blueCard.y += 40
    })
    blueCard.input.alwaysEnabled = true;

    greenCard.setInteractive().on('pointerover',(item)=>{
        console.log(item)
        greenCard.y -= 40
    })
    greenCard.setInteractive().on('pointerout',(item)=>{
        console.log(item)
        greenCard.y += 40
    })
    greenCard.input.alwaysEnabled = true;

    pinkCard.setInteractive().on('pointerover',(item)=>{
        console.log(item)
        pinkCard.y -= 40
    })
    pinkCard.setInteractive().on('pointerout',(item)=>{
        console.log(item)
        pinkCard.y += 40
    })
    pinkCard.input.alwaysEnabled = true;

    yellowCard.setInteractive().on('pointerover',(item)=>{
        console.log(item)
        yellowCard.y -= 40
    })
    yellowCard.setInteractive().on('pointerout',(item)=>{
        console.log(item)
        yellowCard.y += 40
    })
    yellowCard.input.alwaysEnabled = true;


   

}



function update(){

    
}

// utils
  


function loadCard(){

}
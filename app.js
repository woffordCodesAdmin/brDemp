// Objects
let playerOne = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector('.pTwo');
    // Find Target

    let me = document.querySelector('.pOne')

    let squareUp = document.createElement('img')
    squareUp.setAttribute('src','https://www.fightersgeneration.com/characters3/ryu-shoryureppa.gif')
    squareUp.setAttribute('class','.pOne')
    //replace with actionMove img

    me.classList.toggle('')
    // then keyFrame


    currentTarget.classList.toggle('.shakeAble')
    let boom = document.querySelector('.actionBubble')
    boom.style.display = "block"
    // boom Appear

  },
  dodgeAttack: function () {
    // animate evasive manuever
  },
};

let playerTwo = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector();
    // Find Target
  },
  dodgeAttack: function () {
    // animate evasive manuever
  },
};

let levelBossOne = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector();
    // Find Target
  },
  dodgeAttack: function () {
    // animate evasive manuever
  },
};

let levelBossTwo = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector();
    // Find Target
  },
  dodgeAttack: function () {
    // animate evasive manuever
  },
};
let levelBossThree = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector();
    // Find Target
  },
  dodgeAttack: function () {
    // animate evasive manuever
  },
};
let ryu = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector();
    // Find Target
  },
  dodgeAttack: function () {
    // animate evasive manuever
  },
  moveOne: function () {
    //   https://bestanimations.com/media/fire/415150878fire-flames-burning-close-up-animated-gif-image.gif
  },
  moveTwo: function () {
    //  https://www.fightersgeneration.com/characters3/ryu-shoryureppa.gif
  },
};

// akumaVSken: https://c.tenor.com/EPjiTOGXEZ8AAAAi/street-fighter-ken.gif

// girlAttack: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVtpnAKcbSL9MtfUtbf1YMlybgvpdPAPm9Xeme90N0TdPQCAsKBYIFkwyRd7wPV1dJHk&usqp=CAU

// girlAttX2: https://thumbs.gfycat.com/ValuableKindlyEquine-max-1mb.gif

// fightSequence: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cbabdda-80b4-4926-ac0f-1b71cc9d64dd/de5kxig-2f6c3641-83a9-4b01-a809-70c288bcf1cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjYmFiZGRhLTgwYjQtNDkyNi1hYzBmLTFiNzFjYzlkNjRkZFwvZGU1a3hpZy0yZjZjMzY0MS04M2E5LTRiMDEtYTgwOS03MGMyODhiY2YxY2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PJcEsXxyUM8JSMuDE-1vEIzELfWc0LeE-ZhJZaKXu0g

const startGame = () => {
  alert("Welcome To BlahBlah Game");
};

const startRound = (x, y) => {
  //   grab both images for players
};

const shakeThaRoom = () => {
  // grab board, players, and title

  let board = document.querySelector(".gameboard");
  let title = document.querySelector(".titleMain");
  let player = document.querySelector(".pOne");
  let opponent = document.querySelector(".pTwo");

  let items = [board,title,player,opponent]
    items.forEach((thing)=>{
        thing.classList.toggle('shakeAble')
    })

};


const attack = () => {
    

}

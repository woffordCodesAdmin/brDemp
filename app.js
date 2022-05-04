// Objects
let playerOne = {
  name: "",
  image: "",
  hp: 1000,
  turnToAttack: true,
  isOnDefense: false,
  advanceToNextRound: false,
  attackEnemy: function () {
    let currentTarget = document.querySelector(".pTwoHp");
    // Find Target
    let me = document.querySelector(".pWon");

    let squareUp = document.createElement("img");
    squareUp.setAttribute(
      "src",
      "https://media1.giphy.com/media/l2QE6znHVshMqR5ba/giphy.gif"
    );
    squareUp.setAttribute("class", ".pOne");
    me.replaceWith(squareUp);
    //replace with actionMove img
    squareUp.classList.toggle("initiateAttack");
    // then keyFrame
    currentTarget.classList.toggle("shakeAble");

    let newTotal = parseInt((playerTwo.hp -= 100));
    let pointTotal = document.querySelector(".points2");
    playerTwo.hp = newTotal;

    let bar = document.querySelector(".pTwoHp");

    bar.style.backgroundColor = "red";
    displayScore();
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
      let currentTarget = document.querySelector(".pOneHp");
      // Find Target
      let me = document.querySelector(".pToo");
  
      let squareUp = document.createElement("img");
      squareUp.setAttribute(
        "src",
        "https://thumbs.gfycat.com/ValuableKindlyEquine-max-1mb.gif"
      );
      squareUp.setAttribute("class", ".pTwo");
      me.replaceWith(squareUp);
      //replace with actionMove img
      squareUp.classList.toggle("initiateAttack2");
      // then keyFrame
      currentTarget.classList.toggle("shakeAble");
  
      let newTotal = parseInt((playerOne.hp -= 100));
      let pointTotal = document.querySelector(".points");

      playerOne.hp = newTotal;
  
      let bar = document.querySelector(".pOneHp");
      bar.style.backgroundColor = "red";
      displayScore();
    },
    dodgeAttack: function () {
      // animate evasive manuever
    },
  };

// akumaVSken: https://c.tenor.com/EPjiTOGXEZ8AAAAi/street-fighter-ken.gif

// girlAttack: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVtpnAKcbSL9MtfUtbf1YMlybgvpdPAPm9Xeme90N0TdPQCAsKBYIFkwyRd7wPV1dJHk&usqp=CAU

// girlAttX2: https://thumbs.gfycat.com/ValuableKindlyEquine-max-1mb.gif

// fightSequence: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cbabdda-80b4-4926-ac0f-1b71cc9d64dd/de5kxig-2f6c3641-83a9-4b01-a809-70c288bcf1cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjYmFiZGRhLTgwYjQtNDkyNi1hYzBmLTFiNzFjYzlkNjRkZFwvZGU1a3hpZy0yZjZjMzY0MS04M2E5LTRiMDEtYTgwOS03MGMyODhiY2YxY2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PJcEsXxyUM8JSMuDE-1vEIzELfWc0LeE-ZhJZaKXu0g


const startGame = () => {
  alert("Welcome To BlahBlah Game");
  if (playerOne.turnToAttack === true) {
    // if its p1 turn
    console.log(" PLAYER ONES TURN~");
    playerOne.isOnDefense = false;
    // take off Defense
    

    playerOne.turnToAttack =false
    playerOne.isOnDefense= true

    // end Turn
  } else  {
    console.log(" PLAYER TWO= TURN~");
    playerTwo.turnToAttack = true;
    playerTwo.isOnDefense = false;
    

    playerTwo.turnToAttack =false
    playerTwo.isOnDefense= true
  }

};

const shakeThaRoom = () => {
  // grab board, players, and title
  let board = document.querySelector(".gameboard");
  let title = document.querySelector(".titleMain");
  let player = document.querySelector(".pOne");
  let opponent = document.querySelector(".pTwo");

  let items = [board, title, player, opponent];
  items.forEach((thing) => {
    thing.classList.toggle("shakeAble");
  });
};

const displayScore = () => {
  let pOneScore = document.querySelector(".points");
  pOneScore.innerHTML = `${playerOne.hp}`;

  let pTwoScore = document.querySelector(".points2");
  pTwoScore.innerHTML = `${playerTwo.hp}`;
};
displayScore();

const playerOneAttack = () =>{
    let body = document.querySelector(".battleZone");
    body.style.backgroundColor = "lightblue";

    playerOne.turnToAttack = true
    let currentTarget = document.querySelector(".pTwoHp");
    // Find Target
    let me = document.querySelector(".pWon");

    let squareUp = document.createElement("img");
    squareUp.setAttribute(
      "src",
      "https://media1.giphy.com/media/l2QE6znHVshMqR5ba/giphy.gif"
    );
    squareUp.setAttribute("class", ".pOne");
    me.replaceWith(squareUp);
    //replace with actionMove img
    squareUp.classList.toggle("initiateAttack");
    // then keyFrame
    currentTarget.classList.toggle("shakeAble");

    let newTotal = parseInt((playerTwo.hp -= 100));
    let pointTotal = document.querySelector(".points2");
    playerTwo.hp = newTotal;

    let bar = document.querySelector(".pTwoHp");

    bar.style.backgroundColor = "red";
    displayScore();
    
}

const playerTwoAttack = () =>{
    let body = document.querySelector(".battleZone");
    body.style.backgroundColor = "salmon";

    playerTwo.turnToAttack = true
    let currentTarget = document.querySelector(".pOneHp");
    // Find Target
    let me = document.querySelector(".pToo");

    let squareUp = document.createElement("img");
    squareUp.setAttribute(
      "src",
      "https://thumbs.gfycat.com/ValuableKindlyEquine-max-1mb.gif"
    );
    squareUp.setAttribute("class", ".pTwo");
    me.replaceWith(squareUp);
    //replace with actionMove img
    squareUp.classList.toggle("initiateAttack2");
    // then keyFrame
    currentTarget.classList.toggle("shakeAble");

    let newTotal = parseInt((playerOne.hp -= 100));
    let pointTotal = document.querySelector(".points");

    playerOne.hp = newTotal;

    let bar = document.querySelector(".pOneHp");
    bar.style.backgroundColor = "red";
    displayScore();

}

const changeMap = ()=>{
    const map = document.querySelector('.gameboard')
    map.classList.toggle('newLevel')
}


const removeAir = () =>{

    let floatableThings = []

    let board = document.querySelector('.gameboard')
    let playerOne = document.querySelector('.pWon')
    let playerTwo = document.querySelector('.pToo')
    let title = document.querySelector('')
    // targetAllFloatingItems p1 p2 title board
}
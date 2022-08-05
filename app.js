// import functions and grab DOM elements
import { renderGoblin, renderPlayer } from './render-utils.js';

const goblinsEl = document.querySelector('.goblins');
const playerEl = document.querySelector('.player');

//const goblinInputEl = document.getElementById('goblin-input');
//const addGoblinButton = document.getElementById('add-goblin-button');

// let state

let playerHP = 10;

const goblinData = [
    {
        name: 'goblin one',
        hitpoints: 5,
    },
    {
        name: 'goblin two',
        hitpoints: 5,
    },
    {
        name: 'goblin three',
        hitpoints: 5,
    },
];
const playerData = [
    {
        name: 'goblin destroyer',
        hitpoints: 10,
    } 
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displayPlayer() {
  // clear the DOM
    playerEl.textContent = '';
    for (let player of playerData) {
        const newPlayerEl = renderPlayer(player);
        playerEl.append(newPlayerEl);
    }

}


function displayGoblins() {
    goblinsEl.textContent = '';
    for (let goblin of goblinData) {
        const newGoblinEl = renderGoblin(goblin);

        newGoblinEl.addEventListener('click', () => {
          // and if the friend's satisfaction level is below 3 and you have mushrooms left
            if (Math.random() > 0.5) {
          // increment the friends satisfaction and decrement your mushrooms
                goblin.hitpoints--;
                console.log(goblin.name);
                console.log(goblin.hitpoints);

            }
            displayGoblins();
            displayPlayer();
        });
        goblinsEl.append(newGoblinEl);
    }
}

displayGoblins();
displayPlayer();
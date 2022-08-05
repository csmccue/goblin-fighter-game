// import functions and grab DOM elements
import { renderGoblin, renderPlayer } from './render-utils.js';

const goblinsEl = document.querySelector('.goblins');
const playerEl = document.querySelector('.player');
const formEl = document.querySelector('form');
const myInputEl = document.querySelector('input');

//const goblinInputEl = document.getElementById('goblin-input');
//const addGoblinButton = document.getElementById('add-goblin-button');

// let state

let playerHP = 10;
let goblinsDefeated = 0;

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
        hitpoints: playerHP,
    } 
];
//add more goblins
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    myInputEl.value;

    const myNewGoblin = {
        name: myInputEl.value,
        hitpoints: Math.ceil(Math.random() * 4)
    };

    goblinData.push(myNewGoblin);

    formEl.reset();
    displayGoblins();
});


function displayPlayer() {
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
            if (Math.random() > 0.3) {
                goblin.hitpoints--;
                alert(goblin.name);
                //alert(goblin.hitpoints);

            }
            if (Math.random() > 0.1) {
                playerHP--;
            }

            displayGoblins();
            displayPlayer();
            console.log(playerHP);
        });
        goblinsEl.append(newGoblinEl);
    }
}

displayGoblins();
displayPlayer();
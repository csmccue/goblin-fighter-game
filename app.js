// import functions and grab DOM elements
import { renderGoblin, renderPlayer } from './render-utils.js';

const goblinsEl = document.querySelector('.goblins');
const playerEl = document.querySelector('.player');
const formEl = document.querySelector('form');
const myInputEl = document.querySelector('input');
const goblinsDefeatedEl = document.querySelector('.goblins-defeated');

//const goblinInputEl = document.getElementById('goblin-input');
//const addGoblinButton = document.getElementById('add-goblin-button');

// let state


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
        hitpoints: 10,
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
    displayGoblinsDefeated();
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
    for (let player of playerData) {
        const newPlayerEl = renderPlayer(player);
        playerEl.append(newPlayerEl);

        for (let goblin of goblinData) {
            const newGoblinEl = renderGoblin(goblin);
            if (goblin.hitpoints > 0 && player.hitpoints > 0){        
                newGoblinEl.addEventListener('click', () => {
                    if (Math.random() > 0.5) {
                        goblin.hitpoints--;
                        alert('You hit ' + goblin.name + '!');
                        alert(goblin.name + ' is now at ' + goblin.hitpoints + ' hitpoints!');
                    }
                    if (Math.random() > 0.1) {
                        player.hitpoints--;
                        if (player.hitpoints === 0) {
                            alert('You died!');
                        }
                    } else {
                        goblinsDefeated++;
                    }
                    displayGoblins();
                    displayPlayer();
                    displayGoblinsDefeated(); }
                );
            }
            goblinsEl.append(newGoblinEl);
        }
    }
}

function displayGoblinsDefeated() {
    goblinsDefeatedEl.textContent = 'You have defeated ' + goblinsDefeated + ' goblins.';
}

displayGoblins();
displayPlayer();
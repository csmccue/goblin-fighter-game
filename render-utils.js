export function renderPlayer(player) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hitpointsEl = document.createElement('p');
    
    nameEl.classList.add('player-name');
    emojiEl.classList.add('player-emoji');
    hitpointsEl.classList.add('player-hitpoints');

    nameEl.textContent = player.name;
    hitpointsEl.textContent = player.hitpoints;
    console.log(player.hitpoints);

    if (player.hitpoints > 0) {
        emojiEl.textContent = '🧍';
    } else {
        emojiEl.textContent = '☠️';
    }
    div.append(nameEl, emojiEl, hitpointsEl);
    return div;
}

export function renderGoblin(goblin) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hitpointsEl = document.createElement('p');

    div.classList.add('goblin');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');
    hitpointsEl.classList.add('hitpoints');

    nameEl.textContent = goblin.name;
    hitpointsEl.textContent = goblin.hitpoints;
    
    if (goblin.hitpoints === 0) {
        emojiEl.textContent = '☠️';
    } else {
        emojiEl.textContent = '👺';
    }
    div.append(nameEl, emojiEl, hitpointsEl);
    return div;
}
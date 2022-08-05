export function renderPlayer(player) {
    const div = document.createElement('div');
    if (player.hitpoints > 0) {
        div.textContent = '🧍';
    } else {
        div.textContent = '☠️';
    }
    return div;
}

export function renderGoblin(goblin) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('goblin');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = goblin.name;
    
    if (goblin.hitpoints === 0) {
        emojiEl.textContent = '☠️';
    } else {
        emojiEl.textContent = '👺';

        div.append(nameEl, emojiEl);
        return div;
    }
}
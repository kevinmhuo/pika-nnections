const categories = {
    water: ['Squirtle', 'Gyarados', 'Vaporeon', 'Lapras'],
    fire: ['Charizard', 'Flareon', 'Arcanine', 'Magmar'],
    legendary: ['Mew', 'Lugia', 'Rayquaza', 'Ho-Oh'],
    evolution: ['Charmander', 'Eevee', 'Magikarp', 'Bulbasaur']
};

let selectedWords = [];

document.querySelectorAll('.grid-item').forEach(button => {
    button.addEventListener('click', function () {
        if (selectedWords.length < 4) {
            this.style.backgroundColor = '#3b4cca';
            selectedWords.push(this.textContent);
        }
    });
});

document.getElementById('submitBtn').addEventListener('click', function () {
    let result = '';
    if (checkCategories(selectedWords)) {
        result = 'Correct!';
    } else {
        result = 'Try again.';
    }
    document.getElementById('result').textContent = result;
    resetGame();
});

function checkCategories(selected) {
    const groups = Object.values(categories);
    return groups.some(group => group.every(word => selected.includes(word)));
}

function resetGame() {
    selectedWords = [];
    document.querySelectorAll('.grid-item').forEach(button => {
        button.style.backgroundColor = '#eee';
    });
}

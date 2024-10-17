// Predefined Pokémon lists for each category
const categories = {
    water: ['Squirtle', 'Gyarados', 'Vaporeon', 'Lapras'],
    fire: ['Charizard', 'Flareon', 'Arcanine', 'Magmar'],
    legendary: ['Mew', 'Lugia', 'Rayquaza', 'Ho-Oh'],
    evolution: ['Charmander', 'Eevee', 'Magikarp', 'Bulbasaur']
};

// Combine all the Pokémon into a single array
let pokemonList = Object.values(categories).flat();

// Function to shuffle the Pokémon array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the Pokémon when the page loads
pokemonList = shuffle(pokemonList);

// Dynamically add the shuffled Pokémon to the grid
window.onload = function() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; // Clear the grid
    
    // Add each Pokémon as a button in the grid
    pokemonList.forEach(pokemon => {
        const button = document.createElement('button');
        button.classList.add('grid-item');
        button.textContent = pokemon;
        button.addEventListener('click', handleSelection);
        grid.appendChild(button);
    });
};

// Track selected words for the game
let selectedWords = [];

function handleSelection() {
    if (selectedWords.length < 4) {
        this.style.backgroundColor = '#3b4cca';
        selectedWords.push(this.textContent);
    }
}

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

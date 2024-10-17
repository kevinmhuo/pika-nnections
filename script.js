// Array to hold the selected Pokémon
let selectedItems = [];

// Function to select a Pokémon
function selectItem(item) {
    if (selectedItems.includes(item.textContent)) {
        // If already selected, deselect it
        selectedItems = selectedItems.filter(pokemon => pokemon !== item.textContent);
        item.style.backgroundColor = "#ffcc00";
    } else {
        // Select the item
        selectedItems.push(item.textContent);
        item.style.backgroundColor = "#ff5733";
    }
}

// Function to check the connections
function checkConnections() {
    const correctGroups = [
        ["Pikachu", "Raichu", "Jolteon"],
        ["Charmander", "Charizard", "Vaporeon"],
        ["Bulbasaur", "Venusaur", "Blastoise"],
        ["Squirtle", "Jigglypuff", "Eevee"]
    ];

    let result = "Incorrect! Try again.";

    // Check if the selected items form one of the correct groups
    correctGroups.forEach(group => {
        if (group.every(pokemon => selectedItems.includes(pokemon))) {
            result = "Correct! You found a connection.";
        }
    });

    document.getElementById("result").textContent = result;

    // Reset selection
    selectedItems = [];
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = "#ffcc00";
    });
}

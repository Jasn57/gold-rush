const mine_button = document.getElementById('mine_button');
const multiplier_shop = document.getElementById('multiplier_shop');
let gold_count = 0;
let multiplier = 1;

mine_button.addEventListener('click', () => {
    gold_count += 1 * multiplier;
    let gold_count_output = `<p>You have: ${gold_count}</p>`;
    document.getElementById("gold_count_output").innerHTML = gold_count_output;
});

multiplier_shop.addEventListener('click', () => {
    let multiplier_cost = multiplier;
    if (multiplier >= 1000000000) {
        alert("Max multiplier reached!");
        return; 
    }
    if (gold_count < multiplier_cost) {
        alert("Not enough gold!");
        return;
    }
    gold_count -= multiplier_cost;
    multiplier += 1;
    document.getElementById("output").innerHTML =
        `<p>Gold: ${gold_count}</p><p>Multiplier: ${multiplier}</p>`;
});



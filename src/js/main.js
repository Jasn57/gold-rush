const mine_button = document.getElementById('mine_button');
const wood_pick_upgrade = document.getElementById('wood_pick_upgrade');
const stone_pick_upgrade = document.getElementById('stone_pick_upgrade');
const copper_pick_upgrade = document.getElementById('copper_pick_upgrade');
let gold_count = 0;
let multiplier = 1;
let wood_pick_status = 'not_purchased';
let stone_pick_status = 'not_purchased';
let copper_pick_status = 'not_purchased';

// mining logic
mine_button.addEventListener('click', () => {
    gold_count += 1 * multiplier;
    document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
});
// wood pick upgrade
wood_pick_upgrade.addEventListener('click', () => {
    if (gold_count >= 50 && wood_pick_status === 'not_purchased') {
        gold_count -= 50;
        multiplier += 2;
        wood_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});
// stone pick upgrade
stone_pick_upgrade.addEventListener('click', async () => {
    if (gold_count >= 200 && stone_pick_status === 'not_purchased') {
        multiplier += 3;
        stone_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});
// copper pick upgrade
copper_pick_upgrade.addEventListener('click', async () => {
    if (gold_count >= 400 && copper_pick_status === 'not_purchased') {
        multiplier += 5;
        copper_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});


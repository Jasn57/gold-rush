// wood pick
wood_pick_upgrade.addEventListener('click', () => {
    if (gold_count >= 50 && wood_pick_status === 'not_purchased') {
        gold_count -= 50;
        multiplier += 2;
        wood_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});
// stone pick
stone_pick_upgrade.addEventListener('click', async () => {
    if (gold_count >= 200 && stone_pick_status === 'not_purchased') {
        multiplier += 3;
        stone_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});
// copper pick
copper_pick_upgrade.addEventListener('click', async () => {
    if (gold_count >= 400 && copper_pick_status === 'not_purchased') {
        multiplier += 5;
        copper_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});
// iron pick
iron_pick_upgrade.addEventListener('click', async () => {
    if (gold_count >= 400 && copper_pick_status === 'not_purchased') {
        multiplier += 6;
        iron_pick_status = 'purchased';
        document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count}</p>`;
    }
});

// wood pick
wood_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 100 && wood_pick_status === 'not_purchased') {
        cash_count -= 100;
        multiplier += 2;
        wood_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});
// stone pick
stone_pick_upgrade.addEventListener('click', async () => {
    if (cash_count >= 500 && stone_pick_status === 'not_purchased') {
        cash_count -= 500;
        multiplier += 3;
        stone_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});
// copper pick
copper_pick_upgrade.addEventListener('click', async () => {
    if (cash_count >= 1250 && copper_pick_status === 'not_purchased') {
        cash_count -= 1250;
        multiplier += 5;
        copper_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});
// iron pick
iron_pick_upgrade.addEventListener('click', async () => {
    if (cash_count >= 2000 && copper_pick_status === 'not_purchased') {
        cash_count -= 2000;
        multiplier += 6;
        iron_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});
// gold pick upgrade
gold_pick_upgrade.addEventListener('click', async () => {
    if (cash_count >= 2500 && gold_pick_status === 'not_purchased') {
        cash_count -= 2500;
        multiplier += 7;
        gold_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});
// emerald pick upgrade
emerald_pick_upgrade.addEventListener('click', async () => {
    if (cash_count >= 3200 && emerald_pick_status === 'not_purchased') {
        cash_count -= 3200;
        multiplier += 9;
        emerald_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});
// diamond pick upgrade
diamond_pick_upgrade.addEventListener('click', async () => {
    if (cash_count >= 5000 && diamond_pick_status === 'not_purchased') {
        cash_count -= 5000;
        multiplier += 12;
        diamond_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count}</p>`;
    }
});

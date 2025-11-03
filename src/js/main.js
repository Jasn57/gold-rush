const gold_mine_button = document.getElementById('gold_mine_button');
const coal_mine_button = document.getElementById('coal_mine_button');
const smelt_button = document.getElementById('smelt_button');
const sell_button = document.getElementById('sell_button');
const wood_pick_upgrade = document.getElementById('wood_pick_upgrade');
const stone_pick_upgrade = document.getElementById('stone_pick_upgrade');
const copper_pick_upgrade = document.getElementById('copper_pick_upgrade');
const iron_pick_upgrade = document.getElementById('iron_pick_upgrade');
const gold_pick_upgrade = document.getElementById('gold_pick_upgrade');
const emerald_pick_upgrade = document.getElementById('emerald_pick_upgrade');
const diamond_pick_upgrade = document.getElementById('diamond_pick_upgrade');

let gold_ore_count = 0;
let coal_count = 0;
let cash_count = 0;
let gold_bar_count = 0;
let multiplier = 1;

let wood_pick_status = 'not_purchased';
let stone_pick_status = 'not_purchased';
let copper_pick_status = 'not_purchased';
let iron_pick_status = 'not_purchased';
let gold_pick_status = 'not_purchased';
let emerald_pick_status = 'not_purchased';
let diamond_pick_status = 'not_purchased';

// mine gold
gold_mine_button.addEventListener('click', () => {
    gold_ore_count += 1 * multiplier;
    document.getElementById("gold_ore_count_output").innerHTML = `<p>You have: ${gold_ore_count} Gold Ore</p>`;
});

// mine coal
coal_mine_button.addEventListener('click', () => {
    coal_count += 1 * multiplier;
    document.getElementById("coal_count_output").innerHTML = `<p>You have: ${coal_count} Coal</p>`;
});

// smelting
smelt_button.addEventListener('click', () => {
    if (gold_ore_count >= 1 && coal_count >= 1) {
        gold_ore_count -= 1;
        coal_count -= 1;
        gold_bar_count += 1;
        document.getElementById("gold_bar_count_output").innerHTML = `<p>You have: ${gold_bar_count} Gold Bars</p>`;
        document.getElementById("gold_ore_count_output").innerHTML = `<p>You have: ${gold_ore_count} Gold Ore</p>`;
        document.getElementById("coal_count_output").innerHTML = `<p>You have: ${coal_count} Coal</p>`;
    }
});

// sell gold bar
sell_button.addEventListener('click', () => {
    if (gold_bar_count >= 1) {
        gold_bar_count -= 1;
        cash_count += 1; 
        document.getElementById("gold_bar_count_output").innerHTML = `<p>You have: ${gold_bar_count} Gold Bars</p>`;
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

// upgrades
wood_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 100 && wood_pick_status === 'not_purchased') {
        cash_count -= 100;
        multiplier += 1;
        wood_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

stone_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 500 && stone_pick_status === 'not_purchased') {
        cash_count -= 500;
        multiplier += 2;
        stone_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

copper_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 1250 && copper_pick_status === 'not_purchased') {
        cash_count -= 1250;
        multiplier += 3;
        copper_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

iron_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 2000 && iron_pick_status === 'not_purchased') {
        cash_count -= 2000;
        multiplier += 4;
        iron_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

gold_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 2500 && gold_pick_status === 'not_purchased') {
        cash_count -= 2500;
        multiplier += 5;
        gold_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

emerald_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 3200 && emerald_pick_status === 'not_purchased') {
        cash_count -= 3200;
        multiplier += 6;
        emerald_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

diamond_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 5000 && diamond_pick_status === 'not_purchased') {
        cash_count -= 5000;
        multiplier += 8;
        diamond_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

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

// load from local storage
gold_ore_count = parseInt(localStorage.getItem("gold_ore_count")) || 0;
coal_count = parseInt(localStorage.getItem("coal_count")) || 0;
cash_count = parseInt(localStorage.getItem("cash_count")) || 0;
gold_bar_count = parseInt(localStorage.getItem("gold_bar_count")) || 0;
multiplier = parseInt(localStorage.getItem("multiplier")) || 1;

wood_pick_status = localStorage.getItem("wood_pick_status") || "not_purchased";
stone_pick_status = localStorage.getItem("stone_pick_status") || "not_purchased";
copper_pick_status = localStorage.getItem("copper_pick_status") || "not_purchased";
iron_pick_status = localStorage.getItem("iron_pick_status") || "not_purchased";
gold_pick_status = localStorage.getItem("gold_pick_status") || "not_purchased";
emerald_pick_status = localStorage.getItem("emerald_pick_status") || "not_purchased";
diamond_pick_status = localStorage.getItem("diamond_pick_status") || "not_purchased";

// save progress to local storage
function saveGame() {
  localStorage.setItem("gold_ore_count", gold_ore_count);
  localStorage.setItem("coal_count", coal_count);
  localStorage.setItem("cash_count", cash_count);
  localStorage.setItem("gold_bar_count", gold_bar_count);
  localStorage.setItem("multiplier", multiplier);

  localStorage.setItem("wood_pick_status", wood_pick_status);
  localStorage.setItem("stone_pick_status", stone_pick_status);
  localStorage.setItem("copper_pick_status", copper_pick_status);
  localStorage.setItem("iron_pick_status", iron_pick_status);
  localStorage.setItem("gold_pick_status", gold_pick_status);
  localStorage.setItem("emerald_pick_status", emerald_pick_status);
  localStorage.setItem("diamond_pick_status", diamond_pick_status);
}

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
        cash_count += 10; 
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
    if (wood_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the Wood Pickaxe equiped.`
    }
});

stone_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 500 && stone_pick_status === 'not_purchased') {
        cash_count -= 500;
        multiplier += 2;
        stone_pick_status = 'purchased';
    }
    if (stone_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the Stone Pickaxe equiped.`
    }
});

copper_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 1500 && copper_pick_status === 'not_purchased') {
        cash_count -= 1500;
        multiplier += 3;
        copper_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
    if (copper_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the copper Pickaxe equiped.`
    }
});

iron_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 3000 && iron_pick_status === 'not_purchased') {
        cash_count -= 3000;
        multiplier += 4;
        iron_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
    if (iron_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the Iron Pickaxe equiped.`
    }
});

gold_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 5000 && gold_pick_status === 'not_purchased') {
        cash_count -= 5000;
        multiplier += 6;
        gold_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
    if (gold_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the Gold Pickaxe equiped.`
    }
});

emerald_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 8000 && emerald_pick_status === 'not_purchased') {
        cash_count -= 8000;
        multiplier += 8;
        emerald_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
    if (emerald_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the Emerald Pickaxe equiped.`
    }
});

diamond_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 12000 && diamond_pick_status === 'not_purchased') {
        cash_count -= 12000;
        multiplier += 10;
        diamond_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
    if (diamond_pick_status = 'purchased') {
        document.getElementById("equiped_pick").innerHTML = `<p> You have the Diamond Pickaxe equiped.`
    }
});

// save to local storage every 5 seconds
setInterval(saveGame, 5000);
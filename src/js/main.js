const gold_mine_button = document.getElementById('gold_mine_button');
const coal_mine_button = document.getElementById('coal_mine_button');
const smelt_button = document.getElementById('smelt_button');
const sell_button = document.getElementById('sell_button');
const basic_worker_hire = document.getElementById('hire_miner');
const prestige_up = document.getElementById('prestige_up');

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
let multiplier = 0;
let pick_durability = Infinity;
let prestige = 0;

let wood_pick_status = 'not_purchased';
let stone_pick_status = 'not_purchased';
let copper_pick_status = 'not_purchased';
let iron_pick_status = 'not_purchased';
let gold_pick_status = 'not_purchased';
let emerald_pick_status = 'not_purchased';
let diamond_pick_status = 'not_purchased';

let miner_count = 0;

// load from local storage
gold_ore_count = parseInt(localStorage.getItem("gold_ore_count")) || 0;
coal_count = parseInt(localStorage.getItem("coal_count")) || 0;
cash_count = parseInt(localStorage.getItem("cash_count")) || 0;
gold_bar_count = parseInt(localStorage.getItem("gold_bar_count")) || 0;
multiplier = parseInt(localStorage.getItem("multiplier")) || 0;
pick_durability = parseInt(localStorage.getItem("pick_durability")) || Infinity;
prestige = parseInt(localStorage.getItem("prestige")) || 0;

wood_pick_status = localStorage.getItem("wood_pick_status") || "not_purchased";
stone_pick_status = localStorage.getItem("stone_pick_status") || "not_purchased";
copper_pick_status = localStorage.getItem("copper_pick_status") || "not_purchased";
iron_pick_status = localStorage.getItem("iron_pick_status") || "not_purchased";
gold_pick_status = localStorage.getItem("gold_pick_status") || "not_purchased";
emerald_pick_status = localStorage.getItem("emerald_pick_status") || "not_purchased";
diamond_pick_status = localStorage.getItem("diamond_pick_status") || "not_purchased";

miner_count = localStorage.getItem("miner_count") || 0;

// save progress to local storage
function saveGame() {
  localStorage.setItem("gold_ore_count", gold_ore_count);
  localStorage.setItem("coal_count", coal_count);
  localStorage.setItem("cash_count", cash_count);
  localStorage.setItem("gold_bar_count", gold_bar_count);
  localStorage.setItem("multiplier", multiplier);
  localStorage.setItem("pick_durability", pick_durability);
  localStorage.setItem("prestige", prestige);

  localStorage.setItem("wood_pick_status", wood_pick_status);
  localStorage.setItem("stone_pick_status", stone_pick_status);
  localStorage.setItem("copper_pick_status", copper_pick_status);
  localStorage.setItem("iron_pick_status", iron_pick_status);
  localStorage.setItem("gold_pick_status", gold_pick_status);
  localStorage.setItem("emerald_pick_status", emerald_pick_status);
  localStorage.setItem("diamond_pick_status", diamond_pick_status);

  localStorage.setItem("miner_count", miner_count);
}

// function for basic miner
function Miner() {
    gold_ore_count += 1;
    coal_count += 1;
}

// mine gold
gold_mine_button.addEventListener('click', () => {
    gold_ore_count += 1 * multiplier;
    pick_durability -= 1;
    document.getElementById("gold_ore_count_output").innerHTML = `<p>You have: ${gold_ore_count} Gold Ore</p>`;
});

// mine coal
coal_mine_button.addEventListener('click', () => {
    coal_count += 1 * multiplier;
    pick_durability -= 1;
    document.getElementById("coal_count_output").innerHTML = `<p>You have: ${coal_count} Coal</p>`;
});

// if pick breaks
if (pick_durability <= 0) {
    document.getElementById('random_output').innerHTML = `<p> Your pickaxe broke, buy a new one.</p>`;
}

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

// storage limits
if (gold_ore_count > 10000) { // 10k
  gold_ore_count = 10000;
  document.getElementById('random_output').innerHTML = `<p>You ran out of storage space for gold ore</p>`;
}

if (gold_bar_count > 10000) { // 10k
  gold_bar_count = 10000;
  document.getElementById('random_output').innerHTML = `<p>You ran out of storage space for gold bars</p>`;
}

if (coal_count > 10000) { // 10k
  coal_count = 10000;
  document.getElementById('random_output').innerHTML = `<p>You ran out of storage space for coal</p>`;
}

if (cash_count > 10000000) { // 1m
  cash_count = 10000;
  document.getElementById('random_output').innerHTML = `<p>You ran out of storage space for cash</p>`;
}

// prestige
prestige_up.addEventListener('click', async () => {
    prestige += 2;

    gold_ore_count = 0;
    coal_count = 0; 
    cash_count = 0;
    gold_bar_count = 0;
    multiplier = 0;
    pick_durability = Infinity;

    wood_pick_status = 'not_purchased';
    stone_pick_status = 'not_purchased';
    copper_pick_status = 'not_purchased';
    iron_pick_status = 'not_purchased';
    gold_pick_status = 'not_purchased';
    emerald_pick_status = 'not_purchased';
    diamond_pick_status = 'not_purchased';

    miner_count = 0;

});

// upgrades
wood_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 100 && wood_pick_status === 'not_purchased') {
        cash_count -= 100;
        multiplier += 1;
        pick_durability = 1000;
        wood_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

stone_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 500 && stone_pick_status === 'not_purchased') {
        cash_count -= 500;
        multiplier += 2;
        pick_durability = 2500;
        stone_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

copper_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 1500 && copper_pick_status === 'not_purchased') {
        cash_count -= 1500;
        multiplier += 3;
        pick_durability = 3000;
        copper_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

iron_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 3000 && iron_pick_status === 'not_purchased') {
        cash_count -= 3000;
        multiplier += 4;
        pick_durability = 4000;
        iron_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

gold_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 5000 && gold_pick_status === 'not_purchased') {
        cash_count -= 5000;
        multiplier += 6;
        pick_durability = 5000;
        gold_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

emerald_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 8000 && emerald_pick_status === 'not_purchased') {
        cash_count -= 8000;
        multiplier += 8;
        pick_durability = 5500;
        emerald_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

diamond_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 12000 && diamond_pick_status === 'not_purchased') {
        cash_count -= 12000;
        multiplier += 10;
        pick_durability = 7000;
        diamond_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = `<p>You have: ${cash_count} Dollars</p>`;
    }
});

// hire workers
miner_hire.addEventListener('click', async () => {
    miner_count += 1
});

// workers mining 
if (basic_worker_count >= 1) {
    setInterval(Miner, 10000) // 10 second interval
};

// save to local storage every 5 seconds
setInterval(saveGame, 5000);

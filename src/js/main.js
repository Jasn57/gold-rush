const gold_mine_button = document.getElementById('gold_mine_button');
const coal_mine_button = document.getElementById('coal_mine_button');
const smelt_button = document.getElementById('smelt_button');
const sell_button = document.getElementById('sell_button');

const miner_hire = document.getElementById('miner_hire');
const drill_hire = document.getElementById('drill_hire');
const blacksmith_hire = document.getElementById('blacksmith_hire');
const banker_hire = document.getElementById('banker_hire');

const gold_ore_storage_upgrade = document.getElementById('gold_ore_storage_upgrade');
const gold_bar_storage_upgrade = document.getElementById('gold_bar_storage_upgrade');
const cash_storage_upgrade = document.getElementById('cash_storage_upgrade');
const coal_storage_upgrade = document.getElementById('coal_storage_upgrade');

const craft_sword = document.getElementById('craft_sword');
const sword_sell = document.getElementById('sword_sell');
const craft_axe = document.getElementById('craft_axe');
const axe_sel = document.getElementById('axe_sell')

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
let gold_bar_price = 80;

let sword_count = 0;
let axe_count = 0;

let wood_pick_status = 'not_purchased';
let stone_pick_status = 'not_purchased';
let copper_pick_status = 'not_purchased';
let iron_pick_status = 'not_purchased';
let gold_pick_status = 'not_purchased';
let emerald_pick_status = 'not_purchased';
let diamond_pick_status = 'not_purchased';

let cash_storage_upgrade_status = 'not_purchased';
let coal_storage_upgrade_status = 'not_purchased';
let gold_ore_storage_upgrade_status = 'not_purchased';
let gold_bar_storage_upgrade_status = 'not_purchased';

let miner_count = 0;
let drill_count = 0;
let blacksmith_status = 'not_purchased';
let banker_status = 'not_purchased';

// load from local storage
gold_ore_count = parseInt(localStorage.getItem("gold_ore_count")) || 0;
coal_count = parseInt(localStorage.getItem("coal_count")) || 0;
cash_count = parseInt(localStorage.getItem("cash_count")) || 0;
gold_bar_count = parseInt(localStorage.getItem("gold_bar_count")) || 0;
multiplier = parseInt(localStorage.getItem("multiplier")) || 0;
pick_durability = parseInt(localStorage.getItem("pick_durability")) || Infinity;
gold_bar_price = parseInt(localStorage.getItem("gold_bar_price")) || 80;

sword_count = parseInt(localStorage.getItem("sword_count")) || 0;
axe_count = parseInt(localStorage.getItem("axe_count")) || 0;

wood_pick_status = localStorage.getItem("wood_pick_status") || "not_purchased";
stone_pick_status = localStorage.getItem("stone_pick_status") || "not_purchased";
copper_pick_status = localStorage.getItem("copper_pick_status") || "not_purchased";
iron_pick_status = localStorage.getItem("iron_pick_status") || "not_purchased";
gold_pick_status = localStorage.getItem("gold_pick_status") || "not_purchased";
emerald_pick_status = localStorage.getItem("emerald_pick_status") || "not_purchased";
diamond_pick_status = localStorage.getItem("diamond_pick_status") || "not_purchased";

cash_storage_upgrade_status = localStorage.setItem("cash_storage_upgrade_status") || "not_pruchased";
coal_storage_upgrade_status = localStorage.setItem("coal_storage_upgrade_status") || "not_pruchased";
gold_ore_storage_upgrade_status = localStorage.setItem("gold_ore_storage_upgrade_status") || "not_pruchased";
gold_bar_storage_upgrade_status = localStorage.setItem("gold_bar_storage_upgrade_status") || "not_pruchased";

miner_count = localStorage.getItem("miner_count") || 0;
drill_count = localStorage.getItem("drill_count") || 0;
blacksmith_status = localStorage.getItem("blacksmith_status") || "not_purchased";
banker_status = localStorage.getItem("banker_status") || "not_purchased";

// save progress to local storage
function saveGame() {
  localStorage.setItem("gold_ore_count", gold_ore_count);
  localStorage.setItem("coal_count", coal_count);
  localStorage.setItem("cash_count", cash_count);
  localStorage.setItem("gold_bar_count", gold_bar_count);
  localStorage.setItem("multiplier", multiplier);
  localStorage.setItem("pick_durability", pick_durability);
  localStorage.setItem("gold_bar_price", gold_bar_price);

  localStorage.setItem("sword_count", sword_count);
  localStorage.setItem("axe_count", axe_count);

  localStorage.setItem("wood_pick_status", wood_pick_status);
  localStorage.setItem("stone_pick_status", stone_pick_status);
  localStorage.setItem("copper_pick_status", copper_pick_status);
  localStorage.setItem("iron_pick_status", iron_pick_status);
  localStorage.setItem("gold_pick_status", gold_pick_status);
  localStorage.setItem("emerald_pick_status", emerald_pick_status);
  localStorage.setItem("diamond_pick_status", diamond_pick_status);

  localStorage.setItem("cash_storage_upgrade_status", cash_storage_upgrade_status);
  localStorage.setItem("coal_storage_upgrade_status", coal_storage_upgrade_status);
  localStorage.setItem("gold_ore_storage_upgrade_status", gold_ore_storage_upgrade_status);
  localStorage.setItem("gold_bar_storage_upgrade_status", gold_bar_storage_upgrade_status);

  localStorage.setItem("miner_count", miner_count);
  localStorage.setItem("drill_count", drill_count);
  localStorage.setItem("blacksmith_count", blacksmith_count);
}

// mine gold
gold_mine_button.addEventListener('click', () => {
    gold_ore_count += 1 * multiplier;
    pick_durability -= 1;
    document.getElementById("gold_ore_count_output").innerHTML = 
    `<p>You have: ${gold_ore_count} Gold Ore</p>`;
});

// mine coal
coal_mine_button.addEventListener('click', () => {
    coal_count += 1 * multiplier;
    pick_durability -= 1;
    document.getElementById("coal_count_output").innerHTML = 
    `<p>You have: ${coal_count} Coal</p>`;
});

// gold market prices
function Price() {
    gold_bar_price = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
    document.getElementById('gold_bar_price_output').innerHTML = 
        `<p>Gold bar price: ${gold_bar_price}</p>`;
}

setInterval(Price, 20000); // 20 s

// crafting
craft_sword.addEventListener('click', () => {
    if (gold_bar_count === 2) {
        gold_bar_count -= 2;
        sword_count += 1;
        document.getElementById('sword_count_output').innerHTML =
        `<p>${sword_count} Swords</p>`;
    }
});

craft_axe.addEventListener('click', () => {
    if(gold_bar_count === 3) {
        gold_bar_count -= 3;
        axe_count += 1;
        document.getElementById('axe_count_output').innerHTML =
        `<p>${axe_count} Axes</p>` 
    }
});

// sell crafted
sword_sell.addEventListener('click', () => {
    if (sword_count >= 1) {
        sword_count -= 1;
        cash_count += 200
        document.getElementById('sword_count_output').innerHTML =
        `<p>${sword_count} Swords</p>`;
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

axe_sell.addEventListener('click', () => {
    if (axe_count >= 1) {
        axe_count -= 1;
        cash_count += 300;
        document.getElementById('axe_count_output').innerHTMl =
        `<p>${axe_count} Axes</p>`;
        document.getElementById('cash_count_output').innerHTMl =
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

// sell gold bar
sell_button.addEventListener('click', () => {
    if (gold_bar_count >= 1) {
        gold_bar_count -= 1;
        cash_count += gold_bar_price;
        gold_bar_price -= 5;
        if (gold_bar_price < 1) { 
            gold_bar_price = 1;
        }
        document.getElementById("gold_bar_count_output").innerHTML = 
            `<p>You have: ${gold_bar_count} Gold Bars</p>`;

        document.getElementById("cash_count_output").innerHTML = 
            `<p>You have: ${cash_count} Dollars</p>`;

        document.getElementById("gold_bar_price_output").innerHTML = 
            `<p>Gold bar price: ${gold_bar_price}</p>`;
    }
});

// smelting
smelt_button.addEventListener('click', () => {
    if (gold_ore_count >= 1 && coal_count >= 1) {
        gold_ore_count -= 1;
        coal_count -= 1;
        gold_bar_count += 1;
        document.getElementById("gold_bar_count_output").innerHTML = 
        `<p>You have: ${gold_bar_count} Gold Bars</p>`;
        document.getElementById("gold_ore_count_output").innerHTML = 
        `<p>You have: ${gold_ore_count} Gold Ore</p>`;
        document.getElementById("coal_count_output").innerHTML = 
        `<p>You have: ${coal_count} Coal</p>`;
    }
});

// storage upgrades
coal_storage_upgrade.addEventListener('click', async () => {
    coal_storage_upgrade_status = 'purchased';
});

cash_storage_upgrade.addEventListener('click', async () => {
    cash_storage_upgrade_status = 'purchased';
});

gold_ore_storage_upgrade.addEventListener('click', async () => {
    gold_ore_storage_upgrade_status = 'purchased';
});

gold_bar_storage_upgrade.addEventListener('click', async () => {
    gold_bar_storage_upgrade_status = 'purchased';
});

if (gold_ore_count > 10000 && gold_ore_storage_upgrade_status === 'not_purchased') {
  gold_ore_count = 10000;
  document.getElementById('random_output').innerHTML =
  `<p>You ran out of storage space for gold ore</p>`;
}

if (gold_bar_count > 10000 && gold_bar_storage_upgrade_status === 'not_purchased') {
  gold_bar_count = 10000;
  document.getElementById('random_output').innerHTML =
  `<p>You ran out of storage space for gold bars</p>`;
}

if (coal_count > 10000 && coal_storage_upgrade_status === 'not_purchased') {
  coal_count = 10000;
  document.getElementById('random_output').innerHTML =
  `<p>You ran out of storage space for coal</p>`;
}

if (cash_count > 10000000 && cash_storage_upgrade_status === 'not_purchased') {
  cash_count = 10000000;
  document.getElementById('random_output').innerHTML =
  `<p>You ran out of storage space for cash</p>`;
}

// upgrades
wood_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 250 && wood_pick_status === 'not_purchased') {
        cash_count -= 250;
        multiplier += 1;
        pick_durability = 1000;
        wood_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

stone_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 1000 && stone_pick_status === 'not_purchased') {
        cash_count -= 1000;
        multiplier += 2;
        pick_durability = 2500;
        stone_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

copper_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 5000 && copper_pick_status === 'not_purchased') {
        cash_count -= 5000;
        multiplier += 3;
        pick_durability = 3000;
        copper_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

iron_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 15000 && iron_pick_status === 'not_purchased') {
        cash_count -= 15000;
        multiplier += 4;
        pick_durability = 4000;
        iron_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

gold_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 40000 && gold_pick_status === 'not_purchased') {
        cash_count -= 40000;
        multiplier += 6;
        pick_durability = 5000;
        gold_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

emerald_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 100000 && emerald_pick_status === 'not_purchased') {
        cash_count -= 100000;
        multiplier += 8;
        pick_durability = 5500;
        emerald_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

diamond_pick_upgrade.addEventListener('click', () => {
    if (cash_count >= 250000 && diamond_pick_status === 'not_purchased') {
        cash_count -= 12000;
        multiplier += 10;
        pick_durability = 7000;
        diamond_pick_status = 'purchased';
        document.getElementById("cash_count_output").innerHTML = 
        `<p>You have: ${cash_count} Dollars</p>`;
    }
});

// if pick breaks
if (pick_durability <= 0) {
    document.getElementById('random_output').innerHTML = 
    `<p> Your pickaxe broke, buy a new one.</p>`;
    wood_pick_status = 'not_purchased';
    stone_pick_status = 'not_purchased';
    copper_pick_status = 'not_purchased';
    iron_pick_status = 'not_purchased';
    gold_pick_status = 'not_purchased';
    emerald_pick_status = 'not_purchased';
    diamond_pick_status = 'not_purchased';
}

// hire workers
miner_hire.addEventListener('click', async () => {
    miner_count += 1;
});

drill_hire.addEventListener('click', async () => {
    drill_count += 1;
});

blacksmith_hire.addEventListener('click', async () => {
    blacksmith_status = 'purchased';
});

banker_hire.addEventListener('click', async () => {
    banker_status = 'purchased';
});

// worker fucntions
function Miner() {
    gold_ore_count += 1 * miner_count;
    coal_count += 1 * miner_count;
    document.getElementById('gold_ore_count_output').innerHTML = 
    `You have: ${gold_ore_count} Gold Ore`;
    document.getElementById('coal_count_output').innerHTML = 
    `You have: ${coal_count} Coal`;
};

function Drill() {
    gold_ore_count += 10 * drill_count;
    coal_count += 10 * drill_count;
    document.getElementById('gold_ore_count_output').innerHTML = 
    `You have: ${gold_ore_count} Gold Ore`;
    document.getElementById('coal_count_output').innerHTML = 
    `You have: ${coal_count} Coal`;
};

function Blacksmith() {
    gold_ore_count -= 1;
    coal_count -= 1;
    gold_bar_count += 1;
    document.getElementById('gold_ore_count_output').innerHTML = 
    `You have: ${gold_ore_count} Gold Ore`;
    document.getElementById('coal_count_output').innerHTML = 
    `You have: ${coal_count} Coal`;
    document.getElementById('gold_bar_count_output').innerHTML = 
    `You have: ${gold_bar_count} Gold Bars`;
};

function Banker() {
    gold_bar_count -= 1;
    cash_count += 10;
    document.getElementById('gold_bar_count_output').innerHTML = 
    `You have: ${gold_bar_count} Gold Bars`;
    document.getElementById('cash_count_output').innerHTMl = 
    `You have: ${cash_count} Dollars`
};

// worker activation
if (miner_count >= 1) {
    setInterval(Miner, 10000);
}

if (drill_count >= 1) {
    setInterval(Drill, 30000);
}

if (blacksmith_status === 'purchased' && gold_ore_count >= 1 && coal_count >= 1) {
    setInterval(Blacksmith, 15000);
}

if (banker_status === 'purchased' && gold_bar_count >= 1) {
    setInterval(Banker, 15000);
}

// trader
function Trader() {
    document.getElementById('trader').innerHTML = `
        <p>Hello I am the Magic Trader, choose one gift:</p>
        <button id="choice_cash" type="button">5000 Dollars</button>
        <button id="choice_pickaxe" type="button">Copper Pickaxe</button>
        <button id="choice_miner" type="button">Hire Miner</button>
    `;

    const choice_cash = document.getElementById('choice_cash');
    const choice_pickaxe = document.getElementById('choice_pickaxe');
    const choice_miner = document.getElementById('choice_miner');

    choice_cash.addEventListener('click', () => {
        cash_count += 5000;
    });

    choice_pickaxe.addEventListener('click', () => {
        multiplier += 3;
        pick_durability = 3000;
        copper_pick_status = 'purchased';
    });

    choice_miner.addEventListener('click', () => {
        miner_count += 1;
    });

    // 30 s
    setTimeout(() => {
        traderBox.innerHTML = "";
    }, 30000);
};

// 1 h
setInterval(Trader, 3600000);

// 5 s
setInterval(saveGame, 5000);

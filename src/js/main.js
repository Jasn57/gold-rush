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

const craft_bracelet = document.getElementById('craft_bracelet');
const bracelet_sell = document.getElementById('bracelet_sell');
const craft_necklace = document.getElementById('craft_necklace');
const necklace_sell = document.getElementById('necklace_sell');
const craft_ring = document.getElementById('craft_ring');
const ring_sell = document.getElementById('ring_sell');

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

let bracelet_count = 0;
let ring_count = 0;
let necklace_count = 0;
let bracelet_price = 200;
let ring_price = 100;
let necklace_price = 300;

let wood_pick_status = false;
let stone_pick_status = false;
let copper_pick_status = false;
let iron_pick_status = false;
let gold_pick_status = false;
let emerald_pick_status = false;
let diamond_pick_status = false;

let cash_storage_upgrade_status = false;
let coal_storage_upgrade_status = false;
let gold_ore_storage_upgrade_status = false;
let gold_bar_storage_upgrade_status = false;

let miner_count = 0;
let drill_count = 0;
let blacksmith_count = 0;
let banker_count = 0;

gold_ore_count = parseInt(localStorage.getItem("gold_ore_count")) || 0;
coal_count = parseInt(localStorage.getItem("coal_count")) || 0;
cash_count = parseInt(localStorage.getItem("cash_count")) || 0;
gold_bar_count = parseInt(localStorage.getItem("gold_bar_count")) || 0;
multiplier = parseInt(localStorage.getItem("multiplier")) || 0;
pick_durability = parseInt(localStorage.getItem("pick_durability")) || Infinity;
gold_bar_price = parseInt(localStorage.getItem("gold_bar_price")) || 80;

ring_count = parseInt(localStorage.getItem("ring_count")) || 0;
bracelet_count = parseInt(localStorage.getItem("bracelet_count")) || 0;
necklace_count = parseInt(localStorage.getItem("necklace_count")) || 0;
ring_price = parseInt(localStorage.getItem("ring_price")) || 100;
bracelet_price = parseInt(localStorage.getItem("bracelet_price")) || 200;
necklace_price = parseInt(localStorage.getItem("necklace_price")) || 300;

wood_pick_status = localStorage.getItem("wood_pick_status") === "true" || false;
stone_pick_status = localStorage.getItem("stone_pick_status") === "true" || false;
copper_pick_status = localStorage.getItem("copper_pick_status") === "true" || false;
iron_pick_status = localStorage.getItem("iron_pick_status") === "true" || false;
gold_pick_status = localStorage.getItem("gold_pick_status") === "true" || false;
emerald_pick_status = localStorage.getItem("emerald_pick_status") === "true" || false;
diamond_pick_status = localStorage.getItem("diamond_pick_status") === "true" || false;

cash_storage_upgrade_status = localStorage.getItem("cash_storage_upgrade_status") === "true" || false;
coal_storage_upgrade_status = localStorage.getItem("coal_storage_upgrade_status") === "true" || false;
gold_ore_storage_upgrade_status = localStorage.getItem("gold_ore_storage_upgrade_status") === "true" || false;
gold_bar_storage_upgrade_status = localStorage.getItem("gold_bar_storage_upgrade_status") === "true" || false;

miner_count = parseInt(localStorage.getItem("miner_count")) || 0;
drill_count = parseInt(localStorage.getItem("drill_count")) || 0;
blacksmith_count = parseInt(localStorage.getItem("blacksmith_count")) || 0;
banker_count = parseInt(localStorage.getItem("banker_count")) || 0;

function saveGame() {
  localStorage.setItem("gold_ore_count", gold_ore_count);
  localStorage.setItem("coal_count", coal_count);
  localStorage.setItem("cash_count", cash_count);
  localStorage.setItem("gold_bar_count", gold_bar_count);
  localStorage.setItem("multiplier", multiplier);
  localStorage.setItem("pick_durability", pick_durability);
  localStorage.setItem("gold_bar_price", gold_bar_price);

  localStorage.setItem("ring_count", ring_count);
  localStorage.setItem("bracelet_count", bracelet_count);
  localStorage.setItem("necklace_count", necklace_count);
  localStorage.setItem("ring_price", ring_price);
  localStorage.setItem("bracelet_price", bracelet_price);
  localStorage.setItem("necklace_price", necklace_price);

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
  localStorage.setItem("banker_count", banker_count);
}

gold_mine_button.addEventListener('click', () => {
  gold_ore_count += 1 * multiplier;
  pick_durability -= 1;
  document.getElementById("gold_ore_count_output").innerHTML = 
    `<p>You have: ${gold_ore_count} Gold Ore</p>`;
});

coal_mine_button.addEventListener('click', () => {
  coal_count += 1 * multiplier;
  pick_durability -= 1;
  document.getElementById("coal_count_output").innerHTML = 
    `<p>You have: ${coal_count} Coal</p>`;
});

function Price() {
  gold_bar_price = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
  document.getElementById('gold_bar_price_output').innerHTML = 
    `<p>Gold bar price: ${gold_bar_price}</p>`;
}

function Ringprice() {
  ring_price = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  document.getElementById('ring_price_output').innerHTML = 
    `<p>Ring price: ${ring_price}</p>`;
}

function Braceletprice() {
  bracelet_price = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
  document.getElementById('bracelet_price_output').innerHTML = 
    `<p>Bracelet price: ${bracelet_price}</p>`;
}

function Necklaceprice() {
  necklace_price = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
  document.getElementById('necklace_price_output').innerHTML = 
    `<p>Necklace price: ${necklace_price}</p>`;
}

setInterval(Price, 20000);
setInterval(Ringprice, 20000);
setInterval(Braceletprice, 20000);
setInterval(Necklaceprice, 20000);

craft_ring.addEventListener('click', () => {
  if(gold_bar_count >= 1) {
    gold_bar_count -= 1;
    ring_count += 1;
    document.getElementById('ring_count_output').innerHTML =
      `<p>${ring_count} Rings</p>`;
  }
});

craft_bracelet.addEventListener('click', () => {
  if (gold_bar_count >= 2) {
    gold_bar_count -= 2;
    bracelet_count += 1;
    document.getElementById('bracelet_count_output').innerHTML =
      `<p>${bracelet_count} Bracelets</p>`;
  }
});

craft_necklace.addEventListener('click', () => {
  if(gold_bar_count >= 3) {
    gold_bar_count -= 3;
    necklace_count += 1;
    document.getElementById('necklace_count_output').innerHTML =
      `<p>${necklace_count} Necklaces</p>`;
  }
});

ring_sell.addEventListener('click', () => {
  if (ring_count >= 1) {
    ring_count -= 1;
    cash_count += ring_price;
    document.getElementById('ring_count_output').innerHTML =
      `<p>${ring_count} Rings</p>`;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

bracelet_sell.addEventListener('click', () => {
  if (bracelet_count >= 1) {
    bracelet_count -= 1;
    cash_count += bracelet_price;
    document.getElementById('bracelet_count_output').innerHTML =
      `<p>${bracelet_count} Bracelets</p>`;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

necklace_sell.addEventListener('click', () => {
  if (necklace_count >= 1) {
    necklace_count -= 1;
    cash_count += necklace_price;
    document.getElementById('necklace_count_output').innerHTML =
      `<p>${necklace_count} Necklaces</p>`;
    document.getElementById('cash_count_output').innerHTML =
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

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

coal_storage_upgrade.addEventListener('click', async () => {
  if (cash_count >= 10000) {
    cash_count -= 10000;
    coal_storage_upgrade_status = true;
  }
});

cash_storage_upgrade.addEventListener('click', async () => {
  if (cash_count >= 10000) {
    cash_count -= 10000;
    cash_storage_upgrade_status = true;
  }
});

gold_ore_storage_upgrade.addEventListener('click', async () => {
  if (cash_count >= 10000) {
    cash_count -= 10000;
    gold_ore_storage_upgrade_status = true;
  }
});

gold_bar_storage_upgrade.addEventListener('click', async () => {
  if (cash_count >= 10000) {
    cash_count -= 10000;
    gold_bar_storage_upgrade_status = true;
  }
});

if (gold_ore_count > 10000 && gold_ore_storage_upgrade_status === true) {
  gold_ore_count = 10000;
  document.getElementById('random_output').innerHTML =
    `<p>You ran out of storage space for gold ore</p>`;
}

if (gold_bar_count > 10000 && gold_bar_storage_upgrade_status === true) {
  gold_bar_count = 10000;
  document.getElementById('random_output').innerHTML =
    `<p>You ran out of storage space for gold bars</p>`;
}

if (coal_count > 10000 && coal_storage_upgrade_status === true) {
  coal_count = 10000;
  document.getElementById('random_output').innerHTML =
    `<p>You ran out of storage space for coal</p>`;
}

if (cash_count > 10000000 && cash_storage_upgrade_status === true) {
  cash_count = 10000000;
  document.getElementById('random_output').innerHTML =
    `<p>You ran out of storage space for cash</p>`;
}

wood_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 250 && wood_pick_status === false) {
    cash_count -= 250;
    multiplier += 1;
    pick_durability = 1000;
    wood_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

stone_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 1000 && stone_pick_status === false) {
    cash_count -= 1000;
    multiplier += 2;
    pick_durability = 2500;
    stone_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

copper_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 5000 && copper_pick_status === false) {
    cash_count -= 5000;
    multiplier += 3;
    pick_durability = 3000;
    copper_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

iron_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 15000 && iron_pick_status === false) {
    cash_count -= 15000;
    multiplier += 4;
    pick_durability = 4000;
    iron_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

gold_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 40000 && gold_pick_status === false) {
    cash_count -= 40000;
    multiplier += 6;
    pick_durability = 5000;
    gold_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

emerald_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 100000 && emerald_pick_status === false) {
    cash_count -= 100000;
    multiplier += 8;
    pick_durability = 5500;
    emerald_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

diamond_pick_upgrade.addEventListener('click', () => {
  if (cash_count >= 250000 && diamond_pick_status === false) {
    cash_count -= 250000;
    multiplier += 10;
    pick_durability = 7000;
    diamond_pick_status = true;
    document.getElementById("cash_count_output").innerHTML = 
      `<p>You have: ${cash_count} Dollars</p>`;
  }
});

if (pick_durability <= 0) {
  document.getElementById('random_output').innerHTML = 
    `<p> Your pickaxe broke, buy a new one.</p>`;
  wood_pick_status = false;
  stone_pick_status = false;
  copper_pick_status = false;
  iron_pick_status = false;
  gold_pick_status = false;
  emerald_pick_status = false;
  diamond_pick_status = false;
}

miner_hire.addEventListener('click', async () => {
  miner_count += 1;
});

drill_hire.addEventListener('click', async () => {
  drill_count += 1;
});

blacksmith_hire.addEventListener('click', async () => {
  blacksmith_count += 1;
});

banker_hire.addEventListener('click', async () => {
  banker_count += 1;
});

function Miner() {
  gold_ore_count += 1 * miner_count;
  coal_count += 1 * miner_count;
  document.getElementById('gold_ore_count_output').innerHTML = 
    `You have: ${gold_ore_count} Gold Ore`;
  document.getElementById('coal_count_output').innerHTML = 
    `You have: ${coal_count} Coal`;
}

function Drill() {
  gold_ore_count += 10 * drill_count;
  coal_count += 10 * drill_count;
  document.getElementById('gold_ore_count_output').innerHTML = 
    `You have: ${gold_ore_count} Gold Ore`;
  document.getElementById('coal_count_output').innerHTML = 
    `You have: ${coal_count} Coal`;
}

function Blacksmith() {
  gold_ore_count -= 1 * blacksmith_count;
  coal_count -= 1 * blacksmith_count;
  gold_bar_count += 1 * blacksmith_count;
  document.getElementById('gold_ore_count_output').innerHTML = 
    `You have: ${gold_ore_count} Gold Ore`;
  document.getElementById('coal_count_output').innerHTML = 
    `You have: ${coal_count} Coal`;
  document.getElementById('gold_bar_count_output').innerHTML = 
    `You have: ${gold_bar_count} Gold Bars`;
}

function Banker() {
  gold_bar_count -= 1 * banker_count;
  cash_count += 10 * banker_count;
  document.getElementById('gold_bar_count_output').innerHTML = 
    `You have: ${gold_bar_count} Gold Bars`;
  document.getElementById('cash_count_output').innerHTML = 
    `You have: ${cash_count} Dollars`;
}

if (miner_count >= 1) {
  setInterval(Miner, 10000);
}

if (drill_count >= 1) {
  setInterval(Drill, 30000);
}

if (blacksmith_count >= 1 && gold_ore_count >= 1 && coal_count >= 1) {
  setInterval(Blacksmith, 15000);
}

if (banker_count >= 1 && gold_bar_count >= 1) {
  setInterval(Banker, 15000);
}

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
    copper_pick_status = true;
  });

  choice_miner.addEventListener('click', () => {
    miner_count += 1;
  });

  setTimeout(() => {
    document.getElementById('trader').innerHTML = "";
  }, 30000);
}

let originalMultiplier = multiplier;

function Goldrush() {
  originalMultiplier = multiplier;
  multiplier = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  document.getElementById('random_output').innerHTML =
    `<p>ITS GOLD RUSH! Mining multiplier is ${multiplier}</p>`;
  setTimeout(() => {
    multiplier = originalMultiplier;
    document.getElementById('random_output').innerHTML = "";
  }, 60000);
}

setInterval(Goldrush, 3600000);
setInterval(Trader, 1800000);
setInterval(saveGame, 5000);
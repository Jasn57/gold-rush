gold_mine_button.addEventListener('click', () => {
    gold_ore_count += 1 * multiplier;
    document.getElementById("gold_ore_count_output").innerHTML = `<p>You have: ${gold_ore_count} Gold</p>`;
});

coal_mine_button.addEventListener('click', () => {
    coal__count += 1 * multiplier;
    document.getElementById("coal_ore_count_output").innerHTML = `<p>You have: ${coal_count} Coal</p>`;
});

gold_mine_button.addEventListener('click', () => {
    gold_count += 1 * multiplier;
    document.getElementById("gold_count_output").innerHTML = `<p>You have: ${gold_count} Gold</p>`;
});

coal_mine_button.addEventListener('click', () => {
    coal_count += 1 * multiplier;
    document.getElementById("coal_count_output").innerHTML = `<p>You have: ${coal_count} Coal</p>`;
});

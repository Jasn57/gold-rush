smelt_button.addEventListener('click', async () => {
    if (gold_count >= 1, coal_count >= 1) {
        gold_count -= 1;
        coal_count -= 1;
        cash_count += 1;
        document.getElementById("cash_count_output").innerHTML = `<p>You Have: ${cash_count} Dollars`;
        document.getElementById("gold_ore_count_output").innerHTML = `<p>You have: ${gold_count} Gold</p>`;
        document.getElementById("coal_count_output").innerHTML = `<p>You have: ${coal_count} Coal</p>`;
    }
});

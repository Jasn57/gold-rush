sell_button.addEventListener('click', async () => {
if (gold_bar_count >= 1) {
    gold_bar_count -= 1;
    cash_count += 1;
}
});
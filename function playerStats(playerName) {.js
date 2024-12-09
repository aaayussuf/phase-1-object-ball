function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
}
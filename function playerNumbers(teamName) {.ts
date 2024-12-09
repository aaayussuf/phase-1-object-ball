function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];
    if (game.home.teamName === teamName) {
        for (let player in game.home.players) {
            numbers.push(game.home.players[player].number);
        }
    } else if (game.away.teamName === teamName) {
        for (let player in game.away.players) {
            numbers.push(game.away.players[player].number);
        }
    }
    return numbers;
}

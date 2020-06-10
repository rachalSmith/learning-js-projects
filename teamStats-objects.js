const team = {
  _players: [
    {firstName: 'A', lastName: 'A', age:1},
    {firstName: 'B', lastName: 'B', age:2},
  ],

  get playersKey() {
    return this._players;
  },

addPlayer(firstName1, lastName1, age1){
  let playerlocVar = {
    firstNamez: firstName1,
    lastNamez: lastName1,
    agez: age1
  };
  this._players.push(playerlocVar);
}
};
team.addPlayer('D', 'D', 4);
console.log(team._players);

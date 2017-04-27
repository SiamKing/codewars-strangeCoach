function strangeCoach(players) {
  let obj = players.map(n => n[0]).reduce((acc, val) =>  {
    acc[val] ? acc[val] += 1 : acc[val] = 1;
    return acc
    }, {})
  let str = ''
  for (let key in obj) {
    obj[key] > 4 ? str += key : str;
  }

  return str ? str.split('').sort((a, b) => a.localeCompare(b)).join('') : 'forfeit';
}

export const takeRareColor = (cost) => {
  switch(cost) {
    case 1: return '#B2B2B2';
    case 2: return '#5e98d9';
    case 3: return '#4b69ff';
    case 4: return '#d32ce6';
    case 5: return '#FF7D0A';
    default: return 'transparent';
  }
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const matchRaces = (heroRaces, allRaces) => {
  const raceArr = [];
  allRaces.forEach(aRace => {
    heroRaces.forEach(hRace => {
      if (aRace.name === hRace) {
        raceArr.push(aRace);
      }
    })
  });
  return raceArr;
};
const sortByCost = (a, b) => a.cost - b.cost;

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

export const getFigureByName = (figures, name) => figures.find(figure => figure.name === name);

export const matchFiguresByMark = (figures, elements, isClasses) => {
  return figures.reduce((a,c) => {
    elements.forEach(element => {
      const cElem = element || 'unknown';
      if (!a[cElem]) a[cElem] = [];
      if (isClasses) {
        if (c.class === element) a[cElem].push(c);
      } else {
        if (c.race.find(item => item === element)) a[cElem].push(c);
      }
    });
    return a;
  }, {});
};

export const getSortedFigures = (figures, species, figureClasses) => {
  const allRaces = species.map(spec => spec.name);
  const allClasses = figureClasses.map(fClass => fClass.name);
  return {
    cost: figures.sort((a,b) => sortByCost(a, b)),
    race: matchFiguresByMark(figures, allRaces, false),
    species: matchFiguresByMark(figures, allClasses, true),
  };
};
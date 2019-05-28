import { createSelector } from 'reselect';

const getFiguresSelector = store => store.figures;   

export const getFigures = createSelector(
  getFiguresSelector,
  figures => figures.reduce((a,c) => {
    c.race.forEach(race => {
      const cRace = race || 'undefined';
      if (!a[cRace]) a[cRace] = [];
      a[cRace].push(c);
    })
    return a;
  }, {})
);
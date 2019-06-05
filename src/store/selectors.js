import { createSelector } from 'reselect';

export const getRaces = store => store.races;
export const getClasses = store => store.classes;
export const getFiguresSelector = store => store.figures;

export const getFiguresTable = createSelector(
  getFiguresSelector,
  figures => figures.reduce((a,c) => {
    c.race.forEach(race => {
      const cRace = race || 'undefined';
      if (!a[cRace]) a[cRace] = [];
      a[cRace].push(c);
    });
    return a;
  }, {})
);
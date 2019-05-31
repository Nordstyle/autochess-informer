export const takeRareColor = (cost) => {
  switch(cost) {
    case 1: return '#999999';
    case 2: return '#00ccff';
    case 3: return '#0087CF';
    case 4: return '#800080';
    case 5: return '#ff6600';
    default: return 'transparent';
  }
}

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
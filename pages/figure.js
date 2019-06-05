import React from "react";
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { App as AppLayout } from '../components/layouts';

import FigurePresent from "../components/PageComponents/FigurePresent";
import {getFiguresSelector, getRaces} from "../src/store/selectors";
import {getFigureByName, matchFiguresByRace, matchRaces} from "../src/utils";


const Page = withRouter(props => {
  const { name } = props.router.query;
  const { figures, races } = props;
  const figure = getFigureByName(figures, name);
  const matchedRaces = matchRaces(figure.race, races);
  const matchedFiguresByRace = matchFiguresByRace(figures, figure.race);
  return (
    <AppLayout>
      <FigurePresent figure={figure} races={matchedRaces} restFigures={matchedFiguresByRace}/>
    </AppLayout>
  )
});

export default connect(store => ({
  figures: getFiguresSelector(store),
  races: getRaces(store)
}))(Page);
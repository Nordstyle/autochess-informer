import React from "react";
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { App as AppLayout } from '../components/layouts';
import {getFiguresSelector, getRaces, getClasses} from "../src/store/selectors";
import {getSortedFigures} from "../src/utils";

import AllFigures from "../components/PageComponents/AllFigures";

const Page = withRouter(props => {
  const { figures, species, figureClasses } = props;
  const [state, setState] = React.useState({ sort: 'cost' });
  const figureSortObj = getSortedFigures(figures, species, figureClasses);
  const handleChange = (event) => setState({ [event.target.name]: event.target.value });
  return (
    <AppLayout title="Figures">
      <AllFigures figures={figureSortObj}
                  species={species}
                  state={state}
                  handleChange={handleChange}/>
    </AppLayout>
  )
});

export default connect(store => ({
  figures: getFiguresSelector(store),
  species: getRaces(store),
  figureClasses: getClasses(store)
}))(Page);
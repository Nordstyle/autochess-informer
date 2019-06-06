import React from "react";
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { App as AppLayout } from '../components/layouts';
import {getFiguresSelector, getRaces} from "../src/store/selectors";

import Species from "../components/PageComponents/Species";

const Page = withRouter(props => {
  const { figures, species } = props;
  return (
    <AppLayout title="Species">
      <Species species={species} figures={figures}/>
    </AppLayout>
  )
});

export default connect(store => ({
  figures: getFiguresSelector(store),
  species: getRaces(store)
}))(Page);
import React from "react";
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { App as AppLayout } from '../components/layouts';
import {getFiguresSelector, getClasses} from "../src/store/selectors";

import CommonTable from "../components/PageComponents/CommonTable";

const Page = withRouter(props => {
  const { figures, figureClasses } = props;
  return (
    <AppLayout title="Classes">
      <CommonTable elements={figureClasses} figures={figures} isClasses/>
    </AppLayout>
  )
});

export default connect(store => ({
  figures: getFiguresSelector(store),
  figureClasses: getClasses(store)
}))(Page);
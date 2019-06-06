import React from 'react';
import { connect } from 'react-redux';
import { getFiguresTable, getRaces, getClasses } from '../src/store/selectors';

import { App as AppLayout } from '../components/layouts';
import Table from '../components/Table';

class Index extends React.Component {
  render() {
    const { figures, races, classes } = this.props;
    return (
      <AppLayout title='Table of Figures'>
        <Table figures={figures} races={races} classesFigures={classes}/>
      </AppLayout>
    );
  }
}

export default connect(store => ({
  figures: getFiguresTable(store),
  races: getRaces(store),
  classes: getClasses(store)
}))(Index);
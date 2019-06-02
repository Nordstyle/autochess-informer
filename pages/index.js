import React from 'react';
import { connect } from 'react-redux';
import { getFigures, getRaces } from '../src/store/selectors';

import { App as AppLayout } from '../components/layouts';
import Wrapper from '../components/Wrapper';
import Table from '../components/Table';

class Index extends React.Component {
  render() {
    const { figures, races } = this.props;
    return (
      <AppLayout title='AutoChess Informer'>
        <Wrapper>
          <Table figures={figures} races={races}/>
        </Wrapper>
      </AppLayout>
    );
  }
}

export default connect(store => ({ figures: getFigures(store), races: getRaces(store) }))(Index);
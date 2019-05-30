import React from 'react';
import { connect } from 'react-redux';
import { getFigures } from '../src/store/selectors';

import { App as AppLayout } from '../components/layouts';
import Wrapper from '../components/Wrapper';
import Table from '../components/Table';

class Index extends React.Component {
  render() {
    const { figures } = this.props;
    return (
      <AppLayout title='AutoChess Informer'>
        <Wrapper>
          <Table figures={figures}/>
        </Wrapper>
      </AppLayout>
    );
  }
}

export default connect(store => ({ figures: getFigures(store) }))(Index);
import React from 'react';

import { App as AppLayout } from '../components/layouts';
import Wrapper from '../components/Wrapper';
import Table from '../components/Table';

class Index extends React.Component {
  render() {
    return (
      <AppLayout title='AutoChess Informer'>
        <Wrapper>
          <Table />
        </Wrapper>
      </AppLayout>
    );
  }
}

export default Index;
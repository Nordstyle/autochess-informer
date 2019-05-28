import React from 'react';
import Link from 'next/link';

import { App as AppLayout } from '../components/layouts';
import Wrapper from '../components/Pages/Index/Wrapper';

class Index extends React.Component {
  render() {
    return (
      <AppLayout title='AutoChess Informer'>
        <Wrapper/>
      </AppLayout>
    );
  }
}

export default Index;
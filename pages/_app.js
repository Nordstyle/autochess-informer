import React from 'react';
import App, { Container } from 'next/app';
import withReduxStore from '../src/withReduxStore'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const { sheetsRegistry, generateClassName, theme, sheetsManager } = this.pageContext;
    return (
      <Container>
        <Provider store={reduxStore}>
          <JssProvider
            registry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <MuiThemeProvider
              theme={theme}
              sheetsManager={sheetsManager}
            >
              <CssBaseline />
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
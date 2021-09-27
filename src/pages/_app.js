import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import { reduxStore } from '../redux/store';

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};


    console.log('MyApp ', reduxStore);

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;

// import { Component } from 'react'

// import { Provider } from 'react-redux'
// import { store } from '../redux/index';

// function App({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default App;
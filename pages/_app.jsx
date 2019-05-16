import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../data/with-redux-store';
import { Provider } from 'react-redux';
import Router from 'next/router';
import ReactGA from 'react-ga';
import { GA_ID } from '../etc/config';

class MagesuiteApp extends App {
    
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
    }

    render () {
        const {Component, pageProps, reduxStore} = this.props
        return (
            <Container>
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
            </Container>
        )
    }
    componentDidMount() {
        if(GA_ID) {
            ReactGA.initialize(GA_ID);
            this.logPageview();
            Router.router.events.on('routeChangeComplete', this.logPageview)
        }
    }
  
    logPageview() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }
  
  export default withReduxStore(MagesuiteApp)
import Head from 'next/head';
import Nav from '../sections/nav';
import Footer from '../sections/footer';
import Cookies from './cookies';
import { Component } from 'react';
import { connect } from 'react-redux';
import { acceptCookies } from '../data/store';
import styled, {createGlobalStyle} from 'styled-components';

class Layout extends Component {
    render() {
        var title = this.props.title || 'MageSuite'

        return (
            <Root className={this.props.className} as={this.props.as}>
                <Head>                
                    <title>{title}</title>
                    <meta name="description" content={this.props.description}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="robots" content="index, follow"/>
                    <link rel="icon" href="/static/images/favicon.png"/>
                    <meta property="og:type" content="website" />
                    {/* { this.props.ogimage && <meta property="og:image" content={"https://www.creativestyle.de/static/pictures/"+this.props.ogimage+"-large.jpg"} />} */}
                    <meta property="og:locale" content="en_US" />
                    {/* <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&amp;subset=latin-ext" rel="stylesheet"></link> */}
                </Head>
                <GlobalStyle/>
                <Nav as="header"/>
                <Content>
                    {this.props.children}
                </Content>
                <StyledCookies/>
                <Footer/>    
            </Root>
        );
    }

    constructor(props) {
        super(props);
        this.scrollTick = false;
    }

    componentDidMount() {
        if(window) {
            this.watchScroll();
        }
        this.initialScollY = window.scrollY;
    }

    watchScroll() {
        window.addEventListener('scroll', e => {
            if (!this.scrollTick) {
                window.requestAnimationFrame(w => {
                    this.scrollTick=false;
                    // this.props.dispatch(scrollY(window.scrollY));
                    
                    if(Math.abs(window.scrollY - this.initialScollY) > 400 && !this.props.acceptCookies) {
                        this.props.dispatch(acceptCookies());
                    }
                });            
                this.scrollTick=true;
            }
            
          });
    }
}

function mapStateToProps(state) {
    return {
        stickFooter: state.stickFooter,
        acceptCookies: state.acceptCookies
    }
}

export default connect(mapStateToProps)(Layout);

export const MaxWidth = styled.div`
    max-width: 1440px;
    margin: auto;
`

export const LimitedWidth = styled.div`
    max-width: 1368px;
    margin: auto;

    @media (max-width: 480px) {
        max-width: 100vw;
        overflow: hidden;
    }
`

const Root = styled(MaxWidth)`
    position: relative;
`

const Content = styled(LimitedWidth)`
    position: relative;
    z-index: 10;
`
const StyledCookies=styled(Cookies)`
    z-index: 100;
`

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }            

    html {
        font-size: 16px;   
        font-display: swap; 
        
    }

    @media (max-width: 480px) {
        html {
            font-size: 4.3vw;
        }    
    }

    @media (min-width: 481px) and (max-width: 1368px) {
        html {
            font-size: 1.145vw;
        }    
    }

    p, h1, h2, h3, figure, dt, dl, dd, body {
        margin: 0;
    }

    body {
        font-size: 0;
        font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Helvetica Neue", Arial, sans-serif, 
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";                
    }
`
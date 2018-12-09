import Logo from "../components/logos/magesuite";
import Link from 'next/link'
import { colors, mediaQueries, distances, rem } from "../components/styles";
import { Component } from 'react';
import Router from 'next/router'
import {connect} from 'react-redux';
import {acceptCookies} from '../data/store'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }        
    }

    render() { 
        
        return (
            <div className="nav">
                <div className="logo"><Logo/></div>
                <nav>
                    <ul className="menu">
                        <li><Link href=""><a>Why MageSuite?</a></Link></li>
                        <li><Link href=""><a>Features</a></Link></li>
                        <li><Link href=""><a>Made with</a></Link></li>
                        <li><Link href=""><a>What you get?</a></Link></li>
                        <li><Link href=""><a>Cloud</a></Link></li>
                    </ul>
                </nav>
                <div className="demo">
                </div>
                
                <style jsx>{`
                    .nav {
                        display: flex;
                        align-items: center;
                        box-shadow: 0 0 1rem -0.1rem gray;
                    }
                    .logo {
                        padding: ${rem(20)} ${rem(30)};
                        flex: 0 0 ${rem(250)};
                    }
                    .demo {
                        flex: 0 0 ${rem(250)};
                    }
                    nav {
                        flex: 1 0;
                        text-align: center;
                    }
                    .menu {
                        display: inline-flex;
                        list-style: none;
                        padding: 0;
                        margin: 0;

                        
                    }
                    .menu li {
                        font-size: ${rem(14)};
                        font-weight: 400;
                        text-transform: uppercase;
                        display: block;
                    }

                    .menu a {
                        padding: ${rem(30)} ${rem(20)};
                        text-decoration: none;
                        color: ${colors.b}
                    }

                  
                `}</style>
            </div>
        )
    }

}

export default connect()(Nav);
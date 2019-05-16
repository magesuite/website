import Logo from "../components/logos/magesuite";
import Link from 'next/link'
import { colors, mediaQueries, distances, rem } from "../components/styles";
import { Component } from 'react';
import {connect} from 'react-redux';
import {acceptCookies} from '../data/store'
import styled from 'styled-components';

class Navigations extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }        
    }

    render() { 
        return (
            <Bar>
                <BarInner>
                    <StyledLogo/>
                    <NavContainer>
                        <Nav>
                            <NavItem><Link href="/#why"><NavLink href="">Why MageSuite?</NavLink></Link></NavItem>
                            {/* <li><Link href=""><a>Features</a></Link></li> */}
                            {/* <li><Link href=""><a>Made with</a></Link></li> */}
                            <NavItem><NavLink href="https://github.com/magesuite/">GitHub</NavLink></NavItem>
                            {/* <li><Link href=""><a>Cloud</a></Link></li> */}
                        </Nav>
                    </NavContainer>
                    <DemoContainer/>
                </BarInner>
            </Bar>
        )
    }

}

export default connect()(Navigations);

const Bar = styled.div`
    box-shadow: 0 0 1rem -0.1rem gray;
`

const BarInner = styled.div`
    display: flex;
    align-items: center;
`

const StyledLogo = styled(Logo)`
    padding: ${rem(20)} ${rem(30)};
    flex: 0 0 ${rem(250)};
    
`

const NavContainer = styled.nav`
    flex: 1 0;
    text-align: center;
`

const Nav = styled.ul`
    display: inline-flex;
    list-style: none;
    padding: 0;
    margin: 0;
`

const NavItem = styled.li`
    font-size: ${rem(14)};
    font-weight: 700;
    text-transform: uppercase;
    display: block;
`
const DemoContainer = styled.div`
    flex: 0 0 ${rem(250)};
`

const NavLink = styled.a`
    padding: ${rem(30)} ${rem(20)};
    text-decoration: none;
    color: ${colors.b}
`

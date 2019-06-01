import { Component } from 'react';
import {connect} from 'react-redux';
import { colors, mediaQueries } from './styles';
import { acceptCookies } from '../data/store';
import styled from 'styled-components';

class Cookies extends Component {
    render() {
        return !this.props.acceptCookies && (            
            <Wrapper className={this.props.className}>
                <Accept onClick={e=>{ this.props.dispatch(acceptCookies()) }}>
                    Our website uses cookies. By continuing to use our website, you consent to the use of tracking cookies.
                </Accept>
                {/* <More>
                    <Link2 href="/datenschutz" text="Mehr erfahren" light noMargin/>
                </More> */}
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        acceptCookies: state.acceptCookies
    }
}

export default connect(mapStateToProps)(Cookies);

const Wrapper = styled.div`
    position: fixed;
    bottom: 1rem;                        
    right: 1rem;
    width: 22rem;
    background: ${colors.d};
    padding: 1rem;
    transition: opacity 0.3s ease;
    font-size: 1rem;
    color: ${colors.l2};

    @media ${mediaQueries.mobile} {
        width: auto;
        left: 1rem;
        right: 1rem;
        bottom: auto;
        top: 5rem;
    }
`
const Accept = styled.div`
    cursor: pointer;
`

const More = styled.div`
    margin-top: 1rem;
`
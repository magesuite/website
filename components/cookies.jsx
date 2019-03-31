import { Component } from 'react';
import {connect} from 'react-redux';
import { colors, mediaQueries } from './styles';
import { acceptCookies } from '../data/store';

class Cookies extends Component {
    render() {
        return !this.props.acceptCookies && (            
            <div className="cookies-info">
                <div className="accept" onClick={e=>{ this.props.dispatch(acceptCookies()) }}>
                    Our website uses cookies. By continuing to use our website, you consent to the use of tracking cookies.
                </div>
                {/* <div className="more">
                    <Link2 href="/datenschutz" text="Mehr erfahren" light noMargin/>
                </div> */}
                <style jsx>{`

                    .cookies-info {
                        position: fixed;
                        bottom: 1rem;                        
                        right: 1rem;
                        width: 22rem;
                        background: ${colors.d};
                        padding: 1rem;
                        transition: opacity 0.3s ease;
                        font-size: 1rem;
                        color: ${colors.l2};;
                    }

                    @media ${mediaQueries.mobile} {
                        .cookies-info {
                            width: auto;
                            left: 1rem;
                            right: 1rem;
                            bottom: auto;
                            top: 5rem;
                        }
                    }
                    .more, .howto {
                        margin-top: 1rem;
                    }
                    .accept {                        
                        cursor: pointer;
                    }


                
                `}</style>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        acceptCookies: state.acceptCookies
    }
}

export default connect(mapStateToProps)(Cookies);
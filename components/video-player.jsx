import { Component } from 'react';
import {connect} from 'react-redux';
import { stopVideo } from '../data/store';
import VimeoPlayer from 'react-player/lib/players/Vimeo';
import { colors, mediaQueries } from './styles';
import styled from 'styled-components';

class VideoPlayer extends Component {
    render() {
        if (!this.props.video) {
            return ''
        } 
        return (
            <figure>
                <Background onClick={()=>this.props.dispatch(stopVideo())}>                
                </Background>
                <Wrapper>
                    <AspectRatio>
                        <VimeoPlayer url={this.props.video} width='100%' height="100%" className="player-inner" playing/>        
                    </AspectRatio>
                </Wrapper>
            </figure>
        )
    }
}

function mapStateToProps (state) {
    return {
        video: state.video
    }
}
  

export default connect(mapStateToProps)(VideoPlayer);

const Background=styled.div`
    position: fixed;
    top: 0;
    left: 0;                    
    width: 100%;
    height: 100vh;
    background: ${colors.d};
    opacity: 0.9;
    backdrop-filter: blur(5px);
    z-index: 100;
    cursor: not-allowed;
`
const Wrapper=styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80%;
    max-height: 98vh;
    max-width: 1368px;
    transform: translate(-50%, -50%);                        
    z-index: 120;
    @media ${mediaQueries.mobile} {
        width: 100%;
    }

`
const AspectRatio=styled.div`
    width: 100%;
    padding-top: 56.25%; 
    .player-inner {
        position: absolute;
        top: 0;
        left: 0;
    }
`
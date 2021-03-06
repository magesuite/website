import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import styled from 'styled-components';
import { mediaQueries, colors, rem } from "../components/styles";
import { MaxWidth } from "../components/layout";
import Play from "../components/icons/icon-play";
import { Component } from 'react';
import {connect} from 'react-redux';
import { playVideo as playVideoAction } from '../data/store';
class Hero extends Component {
    render() { 
        return (
        <Section as="section">
            <Video loop muted ref="video">
                <source src="/static/video/hero-video.mp4" type="video/mp4" />
            </Video>
            <Slogan>
                <Headline as="p" light centered>Open Source CMS for Magento 2</Headline>
                <Paragraph centered light>
                Content Constructor is a CMS module within MageSuite and a free and Open Source alternative to Magento PageBuilder. Check out the demo video.
                </Paragraph>
                <PlayButton onClick={e => this.playVideo()}/>
            </Slogan>
        </Section>
        )
    }
    playVideo() {
        this.props.dispatch(playVideoAction("https://vimeo.com/229095695"));
    }
    componentDidMount() {
        let mql = window.matchMedia('(min-width: 500px)');
        if(mql.matches) {
            this.refs.video.play();
        }
    }
}

export default connect()(Hero);

const Slogan = styled.div`
    @media ${mediaQueries.tabletUp} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const Video = styled.video`
    width: 100%;
    @media ${mediaQueries.mobile} {
        display: none;
    }
`

const Section = styled(MaxWidth)`
    position: relative;
    background-color: ${colors.bl};
    @media ${mediaQueries.mobile} {
        min-height: calc(100vh - ${rem(96)});
        padding: 2rem;
    }
`

const PlayButton = styled(Play)`
    margin: 0 auto;
    display: block;
    cursor: pointer;
    margin-top: 1rem;
    @media ${mediaQueries.mobile} {
        transform: scale(0.7);
    }
`
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import styled from 'styled-components';
import { mediaQueries } from "../components/styles";
import { MaxWidth } from "../components/layout";

export default () => (
    <Section>
        <Video autoplay="true" loop muted>
            <source src="/static/video/hero-video.mp4" type="video/mp4" />
        </Video>
        <Slogan>
            <Headline as="p" light centered>Open Source CMS for Magento 2</Headline>
            <Paragraph centered distance light>
            Content Constructor is a CMS module within MageSuite and a free and Open Source alternative to Magento PageBuilder. Check out the demo video.
            </Paragraph>
        </Slogan>
    </Section>
)

const Slogan = styled(MaxWidth)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Video = styled.video`
    width: 100%;
    @media ${mediaQueries.mobile} {
        display: none;
    }
`

const Section = styled.section`
    position: relative;
    @media ${mediaQueries.mobile} {
        height: 100vh;
    }
`

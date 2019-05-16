import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import styled from 'styled-components';

export default () => (
    <Section className="max-width">
        <Video autoplay="true" loop muted>
            <source src="/static/video/hero-video.mp4" type="video/mp4" />
        </Video>
        <Slogan>
            <Headline HtmlTag="p" light centered>Open Source CMS for Magento 2</Headline>
            <Paragraph centered distance light>
            Content Constructor is a CMS module within MageSuite and a free and Open Source alternative to Magento PageBuilder. Check out the demo video.
            </Paragraph>
        </Slogan>
    </Section>
)

const Slogan = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Video = styled.video`
    width: 100%;
`

const Section = styled.section`
    position: relative;
`

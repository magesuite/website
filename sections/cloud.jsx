import PictureText from '../components/picture-text';
import { rem, colors, mediaQueries } from "../components/styles";
import PictureVectorpng from "../components/picture-vectorpng";
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import Button from "../components/button";
import MagesuiteCloud from '../components/logos/magesuite-cloud';
import styled from 'styled-components';

export default () => (
    <Article className="limited-width">
        <CloudLogo>
            <MagesuiteCloud/>
        </CloudLogo>
        <Paragraph size={10} distance light centered>
            Our Magento SLA keeps your Magento Commerce and Magento Open Source always up to date. We do this in the cloud with all your customizations and connections. 
        </Paragraph>
        <Button as="a" href="https://www.creativestyle.de/magento-cloud/">Learn more</Button>
    </Article>
)

const Article = styled.article`
    position: relative;
    background-color: ${colors.bl};
    background-image: url('/static/pictures/bg-cloud-large.jpg');  
    background-size: cover;    
    padding: ${rem(80)} ${rem(100)};
    text-align: center;
    @media ${mediaQueries.mobile} {
        padding: ${rem(40)} ${rem(20)} ;
    }
`

const CloudLogo = styled.figure`
    width: ${rem(500)};
    margin: 0 auto ${rem(40)};
    @media ${mediaQueries.mobile} {
        width: 100%;
    }
`

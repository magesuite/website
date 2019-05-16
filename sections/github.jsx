import BannerBox from "../components/banner-box";
import Paragraph from "../components/paragraph";
import Headline from "../components/headline";
import Button from "../components/button";
import { colors, rem } from "../components/styles";
import styled from 'styled-components';

export default () => (
    <BannerBox image="bg-1">
        <BannerBoxInner className="inner">
            <Col0 className="col-0">            
                <GithubLogo viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
                </GithubLogo>
            </Col0>
            <Col1 className="col-1">
                <Headline HtmlTag="h2" size={20}>MageSuite on GitHub</Headline>
                <Paragraph size={20}>
                    This project is maintained and updated permanently. Checkout the newest version on GitHub. Contributors are welcome.
                </Paragraph>
            </Col1>
            <Col2 className="col-2">
                <Paragraph size={20} distance>
                    MageSuite is released under the Open Source License v. 3.0 (OSL-3.0). You can download it for free on GitHub. 
                </Paragraph>
                <Button text="Download" HtmlTag="a" href="https://github.com/magesuite/magesuite"/>
            </Col2>
        </BannerBoxInner>
    </BannerBox>
);

const BannerBoxInner = styled.div`
    background: ${colors.w};
    display: flex;
`

const Col0 = styled.div`
    padding: ${rem(40)};
    display: flex;
    flex: 0 0;
`

const Col1 = styled.div`
    padding: ${rem(40)} ${rem(80)} ${rem(40)} 0;
    flex: 1 1;
`

const Col2 = styled.div`
    background: ${colors.l};
    padding: ${rem(40)} ${rem(80)};
    position: relative;
    flex: 1 1;

    &::after {
        content: '';
        position: absolute;
        top: calc(50% - 2rem);
        left: 0;
        border-left: 2rem solid white;
        border-top: 2rem solid transparent;
        border-bottom: 2rem solid transparent;
    }
`

const GithubLogo = styled.svg`
    width: ${rem(200)};
`

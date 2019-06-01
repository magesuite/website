import { rem, mediaQueries } from "./styles";
import styled from 'styled-components';

export default ({children, picture, hide=false}) => (
    <Section hide={hide}>
        <Figure>
            {picture}
        </Figure>
        <Content>
            {children}
        </Content>
    </Section>
)

const Section = styled.section`
    display: ${p => p.hide ? "none" : "flex"};
    @media ${mediaQueries.mobile} {
        flex-direction: column;
    }
`
const Figure = styled.figure`
    text-align: left;
    @media ${mediaQueries.mobile} {
        flex: 1 1;
    }
    @media ${mediaQueries.tabletUp} {
        width: 60%;
        flex: 0 0 60%;
    }
`
const Content = styled.div`
    
    @media ${mediaQueries.mobile} {
        flex: 1 1;
    }
    @media ${mediaQueries.tabletUp} {
        width: 40%;
        flex: 0 0 40%;
        padding-top: ${rem(74)};
    }
`
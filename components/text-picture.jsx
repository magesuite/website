import { rem, mediaQueries } from "./styles";
import styled from 'styled-components';

export default ({children, picture, className, hide=false}) => (
    <Section hide={hide} className={className}>
        <Content>
            {children}
        </Content>
        <Figure>
            {picture}
        </Figure>
    </Section>
)

const Section = styled.section`
    display: ${p => p.hide ? "none" : "flex"};
    @media ${mediaQueries.mobile} {
        flex-direction: column;
    }
    @media ${mediaQueries.tabletUp} {
                     
    }
`
const Figure = styled.figure`
    @media ${mediaQueries.mobile} {
        
    }
    @media ${mediaQueries.tabletUp} {
        width: 60%;
        flex: 0 0 60%;
        text-align: right;                 
    }
`
const Content = styled.div`
    @media ${mediaQueries.mobile} {
        
    }
    @media ${mediaQueries.tabletUp} {
        width: 40%;
        flex: 0 0 40%;
        padding-top: ${rem(74)};                 
    }
`

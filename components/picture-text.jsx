import { rem } from "./styles";
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
`
const Figure = styled.figure`
    width: 60%;
    flex: 0 0 60%;
    text-align: left;
`
const Content = styled.div`
    width: 40%;
    flex: 0 0 40%;
    padding-top: ${rem(74)};
`
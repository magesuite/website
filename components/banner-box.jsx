import { rem, mediaQueries } from "./styles";
import {MaxWidth} from './layout'
import styled from 'styled-components';

export default ({image, children}) => (
    <Section as="section" image={image}>
        <Inner>
        { children }
        </Inner>
    </Section>
)

const Section = styled(MaxWidth)`
    position: relative;
    background-image: url('/static/pictures/${p => p.image}-large.jpg');  
    background-size: cover;    
    padding: 3rem;  
    margin-bottom: ${rem(40)};  
    @media ${mediaQueries.mobile} {
        padding: ${rem(20)};
    }      
`
const Inner= styled.div`
    background: white;
`
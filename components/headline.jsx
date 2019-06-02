import { rem, colors, mediaQueries } from "./styles";
import styled from 'styled-components';
import {centeredMix} from './paragraph';

export default styled.h2`
    @media ${mediaQueries.mobile} {
        font-size: ${props => props.size == 20 ? rem(30): rem(46)};                        
    }
    @media ${mediaQueries.tabletUp} {
        font-size: ${props => props.size == 20 ? rem(36): rem(64)};                    
    }
    display: block;                                       
    color: ${props => props.light ? colors.w : colors.d};
    margin-bottom: ${rem(26)};                
    max-width: 50rem; 
    font-weight: ${props => props.notbold ? 400 : 700};
    ${centeredMix};
    
`

import { rem, colors } from "./styles";
import styled from 'styled-components';

export const centeredMix=({centered}) => {
    if(centered) {
        return `
            margin-left: auto;
            margin-right: auto;
            text-align: center;        `
    }
}

export default styled.p`
    font-size: ${props => props.size == 20 ? rem(18) : rem(20)};
    max-width: 50rem;
    color: ${props => props.light ? colors.w : colors.d};
    line-height: 160%;
    font-weight: 300;
    ${centeredMix};
    margin-bottom: ${props => props.distance ? rem(props.size == 20 ? 50 : 74) : 0};
`
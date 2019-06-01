import { colors, rem } from './styles';
import styled from 'styled-components';

export default ({text, icon, id, active, clickedHandler}) => {
    let wrapperClasses = [];
    if(active) {
        wrapperClasses.push('-active');
    }
    return (    
        <Link className={wrapperClasses.join(' ')} onClick={(e) => clickedHandler(id)}>
            <IconWrapper>{icon}</IconWrapper>
            <Caption>{text}</Caption>
        </Link>
    )
}

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    color: ${colors.l2};
    fill: ${colors.l};
    padding: 0 1rem ${rem(30)};
    border-bottom: 1px solid ${colors.l};  
    cursor: pointer;  
    transition: border-color 150ms ease-in;

    &:hover, .-active {
        color: ${colors.d};
        fill: ${colors.p};  
        border-bottom: 1px solid ${colors.p};   
        transition: fill 150ms ease-in;
    }
`

const Caption = styled.div`
    font-size: ${rem(14)};
    text-transform: uppercase; 
    margin: ${rem(16)} 0 0;
    text-align: center;
    line-height: 130%;
    transition: color 150ms ease-in;
`

const IconWrapper = styled.div`
    width: ${rem(56)};
    height: ${rem(70)};
`
import { colors, mediaQueries, rem } from '../components/styles';
import MageSuiteLogo from '../components/logos/magesuite-white';
import styled from 'styled-components';

export default (props) => (
    <Footer className={props.className}>
        <Inner>
            <Area1>
                <LinksList>
                    <ListItem><Link href="https://demo.magesuite.io/">Visit demo store</Link></ListItem>
                    <ListItem><Link href="https://github.com/magesuite/">MageSuite on GitHub</Link></ListItem>
                </LinksList>
            </Area1>
            <Area2>
                <StyledLogo/>
            </Area2>
        </Inner>
    </Footer>
)

const Footer = styled.footer`
    background: ${colors.d};
`
const Inner = styled.div`
    display: flex;
    @media ${mediaQueries.mobile} {
        flex-direction: column;
        padding: ${rem(20)};
    }
    @media ${mediaQueries.tabletUp} {
        padding: ${rem(40)} ${rem(100)};
    }
`

const Area1 = styled.div`
    flex: 1 1;
`
const Area2 = styled.div`
    flex: 1 1;
    text-align: right;
`
const LinksList=styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    @media ${mediaQueries.mobile} {
        flex-direction: column;
    }
`
const ListItem=styled.li`
    margin-right: 2rem;
`
const Link=styled.a`
    color: ${colors.l2};
    font-size: 1rem;
    text-decoration: none;
    @media ${mediaQueries.mobile} {
        margin-bottom: 1rem;
        display: block;
    }
`
const StyledLogo=styled(MageSuiteLogo)`
    opacity: 0.5;
    width: 10rem;
    display: inline-block;
    @media ${mediaQueries.mobile} {
        margin: 0 auto;
        display: block;
        margin-top: 1rem;
    }
`
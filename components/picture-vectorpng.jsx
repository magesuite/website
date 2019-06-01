import styled from 'styled-components';
import { mediaQueries } from './styles';
export default ({image, alt, title = alt, className, widthDesktop='100%', marginDesktop=0}) => {
    if ( title == 'none' ) title='';
    return (
        <Picture widthDesktop={widthDesktop} marginDesktop={marginDesktop} className={className}>
            <source type="image/webp" srcSet={`/static/pictures/${image}-large.webp`} media="(min-width: 600px)"/>
            <source type="image/webp" srcSet={`/static/pictures/${image}-small.webp`} />
            <source srcSet={`/static/pictures/${image}.png`} />
            <Image src={`/static/pictures/${image}.png`} alt={alt} title={title}/>
        </Picture>
    )
}

const Picture = styled.picture`
    display: inline-block;
    @media ${mediaQueries.tabletUp} {
        width: ${p => p.widthDesktop};
        margin: ${p => p.marginDesktop};
    }
`
const Image = styled.img`
    width: 100%;
`
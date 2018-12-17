export default ({image, alt, title = alt, widthDesktop='100%', marginDesktop=0}) => {
    if ( title == 'none' ) title='';
    return (
        <picture>
            <source type="image/webp" srcSet={`/static/pictures/${image}-large.webp`} media="(min-width: 600px)"/>
            <source type="image/webp" srcSet={`/static/pictures/${image}-small.webp`} />
            <source srcSet={`/static/pictures/${image}.png`} />
            <img src={`/static/pictures/${image}.png`} alt={alt} title={title}/>
            <style jsx>{`
                    img {
                        width: 100%;
                    }
                    picture {
                        display: inline-block;
                        width: ${widthDesktop};
                        margin: ${marginDesktop};
                    }
                `}</style>
        </picture>
    )
}
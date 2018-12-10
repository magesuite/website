export default ({image, alt, title = alt, widthDesktop='100%', marginDesktop=0}) => {
    if ( title == 'none' ) title='';
    return (
        <picture>
            <source type="image/webp" srcSet={`/static/pictures/${image}-large.webp`} media="(min-width: 600px)"/>
            <source type="image/webp" srcSet={`/static/pictures/${image}-small.webp, /static/pictures/${image}-large.webp 2x`} />
            <source srcSet={`/static/pictures/${image}-large.png`} media="(min-width: 600px)"/>
            <source srcSet={`/static/pictures/${image}-small.png, /static/pictures/${image}-large.png 2x`} />
            <img src={`/static/pictures/${image}-large.png`} alt={alt} title={title}/>
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
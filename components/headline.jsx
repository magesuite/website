import { rem, colors } from "./styles";
export default ({HtmlTag, children, size, centered}) => {
    let fontSize;
    let classes = [ 'headline' ];
    if(centered) {
        classes.push('-centered');
    }
    switch(Number(size)) {
        case 20:
            fontSize = 40;
            break;
        case 10:
        default: 
            fontSize = 64;

    }
    return (
        <HtmlTag className={classes.join(' ')}>{children}
            <style jsx>{`
                .headline {
                    font-size: ${rem(fontSize)};                    
                    display: block;                                       
                    color: ${colors.d};
                    margin-bottom: ${rem(26)};                
                    max-width: 50rem; 
                }
                .-centered {                    
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }
            `}</style>
        </HtmlTag>
    )
}
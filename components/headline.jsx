import { rem, colors } from "./styles";
export default ({HtmlTag, children, size, centered, bold=true, light=false}) => {
    let fontSize;
    let classes = [ 'headline' ];
    if(centered) {
        classes.push('-centered');
    }
    let fontWeight = bold ? 700 : 400;
    let color = light ? colors.w : colors.d;

    switch(Number(size)) {
        case 20:
            fontSize = 36;
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
                    color: ${color};
                    margin-bottom: ${rem(26)};                
                    max-width: 50rem; 
                    font-weight: ${fontWeight};
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
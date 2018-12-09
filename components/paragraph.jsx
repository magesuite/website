import { rem, colors } from "./styles";
export default ({children, size, centered}) => {
    let fontSize;
    let classes = [ 'p' ];
    if(centered) {
        classes.push('-centered');
    }
    switch(Number(size)) {
        case 20:
            fontSize = 20;
            break;
        case 10:
        default: 
            fontSize = 24;

    }
    return (
        <p className={classes.join(' ')}>{children}
            <style jsx>{`
                .p {
                    font-size: ${rem(fontSize)};
                    max-width: 50rem;
                    color: ${colors.g};
                    line-height: 140%;
                    margin-bottom: ${rem(80)};
                }
                .-centered {                    
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }
            `}</style>
        </p>
    )
}
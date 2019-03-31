import { rem, colors } from "./styles";
export default ({children, size, centered, distance, light=false}) => {
    let fontSize;
    let color = light ? colors.w : colors.d;
    let distanceSize;
    let classes = [ 'p' ];
    if(centered) {
        classes.push('-centered');
    }

    if(distance) {
        classes.push('-with-distance');
    }
    switch(Number(size)) {
        case 20:
            fontSize = 18;
            distanceSize = 50;
            break;
        case 10:
        default: 
            fontSize = 20;
            distanceSize = 74;

    }
    return (
        <p className={classes.join(' ')}>{children}
            <style jsx>{`
                .p {
                    font-size: ${rem(fontSize)};
                    max-width: 50rem;
                    color: ${color};
                    line-height: 160%;
                    font-weight: 300;
                }
                .-centered {                    
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }

                .-with-distance {
                    margin-bottom: ${rem(distanceSize)};
                }
            `}</style>
        </p>
    )
}
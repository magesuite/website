import { rem, colors } from "./styles";
export default ({size, children, text}) => {
    let classes = [ 'button' ];
    return (
        <div className={classes.join(' ')}>
            <div className="caption">{text}</div>
            <div className="icon"></div>
            <style jsx>{`
                .button {
                    color: ${colors.w};
                    background: ${colors.p};                    
                    border: none;
                    display: inline-flex;
                    padding: 0;                    
                    overflow: hidden;
                }
                .caption {
                    flex: 1 1 1rem;
                    padding: 1rem 3rem 1rem 2rem;
                    font-weight: 700;
                    font-size: ${rem(28)};
                    line-height: 100%;
                    
                }
                .icon {                    
                    background: ${colors.p2};
                    flex: 0 0 4rem;
                    position: relative;
                    width: 4rem;
                }
                .icon:before {
                    content: '';
                    position: absolute;
                    right: 4rem;
                    bottom: 0;
                    border-right: 2rem solid ${colors.p2};
                    border-top: 4rem solid transparent;
                    
                }

                
            `}</style>
        </div>
    )
}
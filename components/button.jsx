import { rem, colors } from "./styles";
export default ({size, children, text, href, HtmlTag='button'}) => {
    let classes = [ 'button' ];
    
    return (
        <HtmlTag className={classes.join(' ')} href={href}>
            <label className="caption">{text}</label>
            <i className="icon">
                <svg viewBox="0 0 12 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 11.621l-6.9 6.9-2.121-2.122 6.9-6.899-6.9-6.9L2.5.48l9.02 9.02-2.12 2.121z" fill="#FFF" fillRule="evenodd"/>
                </svg>
            </i>
            <style jsx>{`
                .button {
                    color: ${colors.w};
                    background: ${colors.p};                    
                    border: none;
                    display: inline-flex;
                    padding: 0;                    
                    overflow: visible;
                    height: ${rem(64)};
                    font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI",
                            "Roboto", "Helvetica Neue", Arial, sans-serif, 
                            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";                
                    font-size: 0;
                    font-weight: 700;
                    text-decoration: none;
                    
                }
                .caption {
                    flex: 1 1 1rem;
                    padding: 0 3rem 0 2rem;
                    font-weight: 700;
                    font-size: ${rem(24)};
                    line-height: 100%;
                    align-self: center;
                    display: block;
                    ${HtmlTag == 'a' && 'cursor: pointer'} ;
                    
                }
                .icon {                    
                    background: ${colors.p2};
                    flex: 0 0 3rem;
                    position: relative;
                    width: 3rem;
                    display: flex;
                    height: ${rem(64)};   
                    
                }
                .icon svg {
                    width: 1rem;
                    margin-left: 0.5rem;
                }
                .icon:before {
                    content: '';
                    position: absolute;
                    right: 3rem;
                    bottom: 0;
                    border-right: 2rem solid ${colors.p2};
                    border-top: 4rem solid transparent;
                    
                }

                
            `}</style>
        </HtmlTag>
    )
}
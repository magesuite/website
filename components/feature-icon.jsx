import { colors, rem } from './styles';
export default ({text, icon, id, active, clickedHandler}) => {
    let wrapperClasses = ['wrapper'];
    if(active) {
        wrapperClasses.push('-active');
    }
    return (    
        <a className={wrapperClasses.join(' ')} onClick={(e) => clickedHandler(id)}>
            <div className="icon">{icon}</div>
            <div className="caption">{text}</div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                }

                .caption {
                    font-size: ${rem(14)};
                    text-transform: uppercase; 
                    margin: ${rem(16)} 0 0;
                    text-align: center;
                    line-height: 130%;
                    transition: color 150ms ease-in;

                }

                a {
                    color: ${colors.l2};
                    fill: ${colors.l};
                    display: block;
                    padding: 0 1rem ${rem(30)};
                    border-bottom: 1px solid ${colors.l};  
                    cursor: pointer;  
                    transition: border-color 150ms ease-in;     
                }

                a:hover, .-active {
                    color: ${colors.d};
                    fill: ${colors.p};  
                    border-bottom: 1px solid ${colors.p};   
                    transition: fill 150ms ease-in;      
                }

                .icon {
                    width: ${rem(56)};
                    height: ${rem(70)};
                }
                
            `}</style>
        </a>
    )
}

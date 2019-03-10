import { rem } from "./styles";

export default ({children, picture, hide=false}) => (
    <section className={hide ? '--hidden' : '' }>
        <figure>
            {picture}
        </figure>
        <div className="content">
            {children}
        </div>        
        <style jsx>{`
            section {
                display: flex;
            }
            .--hidden {
                display: none;
            }
            .content {
                width: 40%;
                flex: 0 0 40%;
                padding-top: ${rem(74)};
            }        
            figure {
                width: 60%;
                flex: 0 0 60%;
                text-align: left;
                
            }        
        `}</style>            
    </section>
)
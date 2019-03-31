import { rem } from "./styles";

export default ({children, picture, hide=false}) => (
    <section className={hide ? '--hidden' : '' }>
        <div className="content">
            {children}
        </div>        
        <figure>
            {picture}
        </figure>
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
                height: 34rem;
                text-align: right;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 1rem;
            }        
        `}</style>            
    </section>
)
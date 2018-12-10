import { rem } from "./styles";

export default ({children, picture}) => (
    <section>
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
            .content {
                width: 40%;
                flex: 0 0 40%;
            }        
            figure {
                width: 60%;
                flex: 0 0 60%;
                text-align: right;
                
            }        
        `}</style>            
    </section>
)
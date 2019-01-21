import { rem } from "./styles";

export default ({image, children}) => (
    <section className="max-width">
        <div>
        { children }
        </div>
        <style jsx>{`
            section {
                position: relative;
                background-image: url('/static/pictures/${image}-large.jpg');  
                background-size: cover;    
                padding: 3rem;  
                margin-bottom: ${rem(40)};        
            }
            div {
                background: white;
            }
            `}</style>
    </section>
)
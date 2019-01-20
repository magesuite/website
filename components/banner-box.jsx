export default ({image, children}) => (
    <section>
        <div className="max-width">
        { children }
        </div>
        <style jsx>{`
            section {
                position: relative;
                background-image: url('/static/pictures/${image}-large.jpg');  
                background-size: cover;    
                padding: 3rem;          
            }
            div {
                background: white;
            }
            `}</style>
    </section>
)
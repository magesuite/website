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
                flex: 1 1;
            }        
            figure {
                flex: 0 0 60%;
                padding-left: 10rem;
            }        
        `}</style>            
    </section>
)
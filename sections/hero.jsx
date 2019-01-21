import Headline from "../components/headline";
import Paragraph from "../components/paragraph";

export default () => (
    <section className="max-width">
        <video autoplay="true" loop muted>
            <source src="/static/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="slogan">
            <Headline HtmlTag="p" light centered>Open Source CMS for Magento 2</Headline>
            <Paragraph centered distance light>
            Content Constructor is a CMS module within MageSuite and a free and Open Source alternative to Magento PageBuilder. Check out the demo video.
            </Paragraph>
        </div>
        <style jsx>{`
            video {
                width: 100%;
                height: 100%;
            }

            section {
                position: relative;
                width: 100%;
                overflow: hidden;
            }

            .slogan {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            @supports (object-fit: cover) {
                video {
                    object-fit: cover;
                }
                section {
                    height: 100vh;
                }
            }
            
            `}</style>
    </section>
)
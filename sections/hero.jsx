import Headline from "../components/headline";
import Paragraph from "../components/paragraph";

export default () => (
    <section>
        <video autoplay="true" loop muted>
            <source src="/static/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="slogan">
            <Headline HtmlTag="p" light centered>MageSuite is easy!</Headline>
            <Paragraph centered distance light>
                MageSuite is a collection of OpenSource modules 
                adding valuable features and enhancements that 
                are missing in your native Magento 2 Open Source shop.
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
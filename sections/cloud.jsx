import PictureText from '../components/picture-text';
import { rem, colors } from "../components/styles";
import PictureVectorpng from "../components/picture-vectorpng";
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import Button from "../components/button";
import MagesuiteCloud from '../components/logos/magesuite-cloud';
export default () => (
    <article className="limited-width">
        <div className="logo-cloud">
            <MagesuiteCloud/>
        </div>
        <Paragraph size={10} distance light centered>
            MageSuite is released under the Open Source License v. 3.0 (OSL-3.0). You can download it for free on GitHub. 
        </Paragraph>
        <Button text="Learn more" HtmlTag="a" href="https://www.creativestyle.de/magento-cloud/"/>
        
        <style jsx>{`
            article {
                position: relative;
                background-image: url('/static/pictures/bg-cloud-large.jpg');  
                background-size: cover;    
                padding: 3rem;  
                padding: ${rem(80)} ${rem(100)} ;
                text-align: center;
            }

            .logo-cloud {
                width: ${rem(500)};
                margin: 0 auto ${rem(40)};
                
            }

        `}</style>
    </article>
)
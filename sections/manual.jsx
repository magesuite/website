import PictureText from '../components/picture-text';
import { rem, colors } from "../components/styles";
import PictureVectorpng from "../components/picture-vectorpng";
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import Button from "../components/button";

export default () => (
    <article className="limited-width">
        <PictureText picture={(
                    <PictureVectorpng image="g-manual" widthDesktop="70%" marginDesktop="0"/>
                )}>
            <Headline HtmlTag="h3" size="20">User Manual</Headline>
            <Paragraph size="20" distance>
            The user manual explains all current features of the MageSuite. 
            It includes the functionalities of the MageSuite CMS "Content 
            Constructor" and its components as well as numerous marketing 
            and UX extensions for Magento 2.<br/>Download the user manual for 
            free and learn how you can now use Magento 2 for content commerce.
            </Paragraph>
            <Button text="Download" href="http://bit.ly/2RY1pu0" HtmlTag="a"/>
        </PictureText>

        <style jsx>{`
            article {
                padding: 0 ${rem(100)} ${rem(80)};
            }

        `}</style>
    </article>
)
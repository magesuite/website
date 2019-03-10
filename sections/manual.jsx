import PictureText from '../components/picture-text';
import { rem, colors } from "../components/styles";
import PictureVectorpng from "../components/picture-vectorpng";
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import Button from "../components/button";

export default () => (
    <article>
        <PictureText picture={(
                    <PictureVectorpng image="g-manual" widthDesktop="80%" marginDesktop="0"/>
                )}>
            <Headline HtmlTag="h3" size="20">User Manual</Headline>
            <Paragraph size="20" distance>
                The MageSuite Content Constructor is an enhancement of the Magento CMS giving you the possibility to build up any CMS page by combining numerous types of components within a few clicks and with no need to develop separate templates. In addition to that, it allows you to use these components also on your category page and product detail page. The Content Constructor is a free and Open Source alternative to the Magento 2 PageBuilder.
            </Paragraph>
            <Button text="Download" href="http://manual" HtmlTag="a"/>
        </PictureText>

        <style jsx>{`
            article {
                padding: ${rem(80)} ${rem(100)};
            }

        `}</style>
    </article>
)
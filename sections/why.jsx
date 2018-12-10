import { rem, colors } from "../components/styles";
import FeaturesTabs from "../components/features-tabs";
import TextPicture from "../components/text-picture";
import PictureVectorpng from "../components/picture-vectorpng";
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import Button from "../components/button";

export default props => (
    <article>
        <Headline HtmlTag="h2" centered>Why MageSuite is so good?</Headline>
        
        <Paragraph centered>
            Proident aliquip est aute id velit est consectetur laboris culpa ipsum. Mollit Lorem quis voluptate laboris consectetur tempor occaecat id veniam commodo excepteur dolor magna. Ex laborum dolor non occaecat enim culpa culpa culpa ex amet excepteur deserunt nulla consequat. Lorem dolor consequat do nulla est ad esse mollit fugiat nostrud ipsum. Culpa voluptate est deserunt et magna aliquip pariatur magna magna. Magna sint laboris labore eiusmod officia sit incididunt excepteur velit.
        </Paragraph>
        <FeaturesTabs/>
        <TextPicture picture={(
            <PictureVectorpng image="g-feature-cms" widthDesktop="70%" marginDesktop="1rem"/>
        )}>
            <Headline HtmlTag="h3" size="20">Why MageSuite is so good?</Headline>
            <Paragraph size="20">
                Veniam est Lorem eu cupidatat minim ea cupidatat eu non. Ex tempor laborum laboris amet fugiat adipisicing nulla cillum ad cupidatat et exercitation. Elit quis ex cillum sunt esse qui ex. Velit dolor anim excepteur consequat aute enim. Dolore aliquip non consequat anim. Qui proident quis pariatur exercitation amet duis in.
            </Paragraph>
            <Button text="alabama"/>
        </TextPicture>
        
        <style jsx>{`
            article {
                padding: ${rem(70)} ${rem(80)};
            }
        `}</style>

    </article>
);
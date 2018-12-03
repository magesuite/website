import { rem, colors } from "../components/styles";
import FeaturesTabs from "../components/features-tabs";

export default props => (
    <article>
        <h2 className="headline">Why MageSuite is so good?</h2>
        <p>
            Proident aliquip est aute id velit est consectetur laboris culpa ipsum. Mollit Lorem quis voluptate laboris consectetur tempor occaecat id veniam commodo excepteur dolor magna. Ex laborum dolor non occaecat enim culpa culpa culpa ex amet excepteur deserunt nulla consequat. Lorem dolor consequat do nulla est ad esse mollit fugiat nostrud ipsum. Culpa voluptate est deserunt et magna aliquip pariatur magna magna. Magna sint laboris labore eiusmod officia sit incididunt excepteur velit.
        </p>
        <FeaturesTabs/>
        
        <style jsx>{`
            .headline {
                font-size: ${rem(64)};
                text-align: center;
                display: block;
                width: 50rem;
                margin: auto;
                color: ${colors.d};
                margin-bottom: ${rem(26)};
                
            }

            p {
                font-size: ${rem(24)};
                width: 50rem;
                color: ${colors.g};
                margin: auto;
                text-align: center;
                line-height: 140%;
                margin-bottom: ${rem(80)};
            }

            article {
                padding: ${rem(70)};
            }

        `}</style>
    </article>
);
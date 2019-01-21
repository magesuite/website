import { colors, distances, mediaQueries, rem } from '../components/styles';
import MageSuiteLogo from '../components/logos/magesuite-white';

export default (props) => (
    <div className="outer">
        <div className="inner max-width">
            <div className="col-1">
                <ul>
                    <li>
                        <a href="https://demo.magesuite.io/">Visit demo store</a>
                    </li>
                    <li>
                        <a href="https://github.com/magesuite/">MageSuite on GitHub</a>
                    </li>
                </ul>
            
            </div>
            <div className="col-2">
                <div className="magesuite"><MageSuiteLogo/></div>
            </div>
        </div>
        <style jsx>{`
            .outer {
                background: ${colors.d};
            }
            .magesuite {
                opacity: 0.5;
                width: 10rem;
                display: inline-block;
            }
            .inner {
                display: flex;
                padding: ${rem(40)} ${rem(100)};
            }
            .col-1 {
                flex: 1 1;
            }

            .col-2 {
                flex: 1 1;
                text-align: right;
            }

            a {
                color: ${colors.l2};
                font-size: 1rem;
                text-decoration: none;
            }
            ul {
                display: flex;
                margin: 0;
                padding: 0;
            }
            li {
                margin-right: 2rem;
            }
        `}</style>
    </div>
)

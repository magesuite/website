import Link from 'next/link';
import { colors, rem } from './styles';
export default ({text, icon}) => (    
    <a className="wrapper">
        <div className="icon">{icon}</div>
        <h5>{text}</h5>

        <style jsx>{`
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            h5 {
                font-size: ${rem(14)};
                text-transform: uppercase; 
                margin: ${rem(20)} 0 0;

            }

            a {
                color: ${colors.l2};
                fill: ${colors.l};
                display: block;
                padding: ${rem(30)};
                border-bottom: 1px solid ${colors.l};         
            }

            a:hover {
                color: ${colors.d};
                fill: ${colors.p};  
                border-bottom: 1px solid ${colors.p};         
            }

            .icon {
                width: ${rem(56)};
                height: ${rem(70)};
            }
            
        `}</style>
    </a>
)

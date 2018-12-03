import Link from 'next/link';
import FeatureIcon from "./feature-icon";
import IconPerformance from "./icons/icon-performance";
import IconSecurity from './icons/icon-security';
import IconDesign from './icons/icon-design';
import IconUx from './icons/icon-ux';
import IconCert from './icons/icon-cert';

export default props => (
    <ul className="wrapper">
        <li>
            <FeatureIcon text="High Performance" icon={
                <IconPerformance/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="High level security" icon={
                <IconSecurity/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="Individual design" icon={
                <IconDesign/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="Usability" icon={
                <IconUx/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="Developers" icon={
                <IconCert/>
            }/>            
        </li> 
        <style jsx>{`
            .wrapper {
                display: flex;
                list-style: none;
                margin: 0;
            }

            li {
                flex: 1 1 20%;
            }
            `}</style>
    </ul>
)
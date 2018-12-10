import Link from 'next/link';
import FeatureIcon from "./feature-icon";
import IconPerformance from "./icons/icon-performance";
import IconSecurity from './icons/icon-security';
import IconDesign from './icons/icon-design';
import IconNews from './icons/icon-news';
import IconCert from './icons/icon-cert';

export default props => (
    <ul className="wrapper">
        <li>
            <FeatureIcon text="Content Constructor" icon={
                <IconPerformance/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="High Performance" icon={
                <IconPerformance/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="Security and&nbsp;GDPR" icon={
                <IconSecurity/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="Search Engine" icon={
                <IconCert/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="Marketing" icon={
                <IconNews/>
            }/>            
        </li> 
        <li>
            <FeatureIcon text="UX" icon={
                <IconDesign/>
            }/>            
        </li> 
        <style jsx>{`
            .wrapper {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            li {
                flex: 1 1 16%;
            }
            `}</style>
    </ul>
)
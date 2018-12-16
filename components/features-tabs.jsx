import Link from 'next/link';
import FeatureIcon from "./feature-icon";
import IconPerformance from "./icons/icon-performance";
import IconSecurity from './icons/icon-security';
import IconDesign from './icons/icon-design';
import IconNews from './icons/icon-news';
import IconCms from './icons/icon-cms';
import IconSearch from './icons/icon-search';

export default ({tabClicked, activeTab}) => (
    <ul className="wrapper">
        <li>
            <FeatureIcon text="Content Constructor" icon={
                <IconCms/>
            } id="cms" clickedHandler={tabClicked} active={activeTab == 'cms'}/>            
        </li> 
        <li>
            <FeatureIcon text="High Performance" icon={
                <IconPerformance/>
            } id="perf" clickedHandler={tabClicked}  active={activeTab == 'perf'}/>            
        </li> 
        <li>
            <FeatureIcon text="Security and&nbsp;GDPR" icon={
                <IconSecurity/>
            } id="security" clickedHandler={tabClicked} active={activeTab == 'security'}/>            
        </li> 
        <li>
            <FeatureIcon text="Search Engine" icon={
                <IconSearch/>
            } id="search" clickedHandler={tabClicked} active={activeTab == 'search'}/>            
        </li> 
        <li>
            <FeatureIcon text="Marketing" icon={
                <IconNews/>
            } id="marketing" clickedHandler={tabClicked} active={activeTab == 'marketing'}/>            
        </li> 
        <li>
            <FeatureIcon text="UX" icon={
                <IconDesign/>
            } id="ux" clickedHandler={tabClicked} active={activeTab == 'ux'}/>            
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
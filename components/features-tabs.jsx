import Link from 'next/link';
import FeatureIcon from "./feature-icon";
import IconPerformance from "./icons/icon-performance";
import IconSecurity from './icons/icon-security';
import IconDesign from './icons/icon-design';
import IconNews from './icons/icon-news';
import IconCms from './icons/icon-cms';
import IconSearch from './icons/icon-search';
import styled from 'styled-components';

export default ({tabClicked, activeTab}) => (
    <Tabs>
        <Tab>
            <FeatureIcon text="Content Constructor" icon={
                <IconCms/>
            } id="cms" clickedHandler={tabClicked} active={activeTab == 'cms'}/>            
        </Tab> 
        <Tab>
            <FeatureIcon text="High Performance" icon={
                <IconPerformance/>
            } id="perf" clickedHandler={tabClicked}  active={activeTab == 'perf'}/>            
        </Tab> 
        <Tab>
            <FeatureIcon text="Security and&nbsp;GDPR" icon={
                <IconSecurity/>
            } id="security" clickedHandler={tabClicked} active={activeTab == 'security'}/>            
        </Tab> 
        <Tab>
            <FeatureIcon text="Search Engine" icon={
                <IconSearch/>
            } id="search" clickedHandler={tabClicked} active={activeTab == 'search'}/>            
        </Tab> 
        <Tab>
            <FeatureIcon text="Marketing" icon={
                <IconNews/>
            } id="marketing" clickedHandler={tabClicked} active={activeTab == 'marketing'}/>            
        </Tab> 
        <Tab>
            <FeatureIcon text="UX" icon={
                <IconDesign/>
            } id="ux" clickedHandler={tabClicked} active={activeTab == 'ux'}/>            
        </Tab> 
    </Tabs>
)

const Tabs=styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`

const Tab=styled.li`
    flex: 1 1 16%;  
`
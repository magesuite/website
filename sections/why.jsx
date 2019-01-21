import { rem, colors } from "../components/styles";
import FeaturesTabs from "../components/features-tabs";
import TextPicture from "../components/text-picture";
import PictureVectorpng from "../components/picture-vectorpng";
import Headline from "../components/headline";
import Paragraph from "../components/paragraph";
import Button from "../components/button";
import { Component } from 'react';

export default class Why extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'cms'
        }
    }
    render() {

        return (
            <article className="limited-width" id="why">
                <Headline HtmlTag="h2" centered>What is MageSuite?</Headline>
                
                <Paragraph centered distance>
                MageSuite is a collection of OpenSource modules adding valuable features and enhancements that are missing in your native Magento 2 Open Source shop.
                </Paragraph>
                <FeaturesTabs tabClicked={this.tabClicked.bind(this)} activeTab={this.state.tab}/>
                
                <TextPicture picture={(
                    <PictureVectorpng image="g-feature-cms" widthDesktop="60%" marginDesktop="2rem 9rem 0 0"/>
                )} hide={this.state.tab != 'cms'}>
                    <Headline HtmlTag="h3" size="20">Content Constructor</Headline>
                    <Paragraph size="20" distance>
                        The MageSuite Content Constructor is an enhancement of the Magento CMS giving you the possibility to build up any CMS page by combining numerous types of components within a few clicks and with no need to develop separate templates. In addition to that, it allows you to use these components also on your category page and product detail page. The Content Constructor is a free and Open Source alternative to the Magento 2 PageBuilder.
                    </Paragraph>
                    {/* <Button text="Find out more"/> */}
                </TextPicture>
                <TextPicture picture={(
                    <PictureVectorpng image="g-feature-performance" widthDesktop="80%" marginDesktop="2rem 1rem 0 0"/>
                )} hide={this.state.tab != 'perf'}>
                    <Headline HtmlTag="h3" size="20">High Performance</Headline>
                    <Paragraph size="20" distance>
                        To boost loading and rendering times of your Magento webshop, MageSuite provides a couple of performance improvements in the frontend and backend. Furthermore, the Cache Warmer rebuilds your Varnish cache for the most important Magento pages after having flushed the cache. The MageSuite Cloud makes your Magento Open Source even ready for AWS. It increases the availability of your webshop in traffic peaks by providing features like horizontal auto-scaling.
                    </Paragraph>
                </TextPicture>
                <TextPicture picture={(
                    <PictureVectorpng image="g-feature-security" widthDesktop="50%" marginDesktop="2rem 11rem 0 0"/>
                )} hide={this.state.tab != 'security'}>
                    <Headline HtmlTag="h3" size="20">Security &amp; GDPR</Headline>
                    <Paragraph size="20" distance>
                        To maximize the security of personal data, MageSuite provides a module, which helps you to meet the requirements of the General Data Protection Regulation (GDPR / DSGVO). It restricts access to customer data and anonymizes personal information in your Magento admin panel so that users without suitable rights for processing data cannot see it.
                    </Paragraph>
                    
                </TextPicture>
                <TextPicture picture={(
                    <PictureVectorpng image="g-feature-search" widthDesktop="60%" marginDesktop="2rem 9rem 0 0"/>
                )} hide={this.state.tab != 'search'}>
                    <Headline HtmlTag="h3" size="20">Search Engine</Headline>
                    <Paragraph size="20" distance>
                        MageSuite integrates the elasticsearch engine by using the OpenSource elasticsuite extension and providing you with a comprehensive feature set for your Magento search such as advanced auto-suggest, improved category filters, optimizing the search result relevance and many more. In addition to that MageSuite enhances the search UX, allows also horizontal layered navigation filters and integrates elasticsuite with the Content Constructor components.
                    </Paragraph>
                    
                </TextPicture>
                <TextPicture picture={(
                    <PictureVectorpng image="g-feature-marketing" widthDesktop="60%" marginDesktop="2rem 9rem 0 0"/>
                )} hide={this.state.tab != 'marketing'}>
                    <Headline HtmlTag="h3" size="20">Marketing</Headline>
                    <Paragraph size="20" distance>
                        To increase your sales and conversion rate, MageSuite provides you with many marketing features such as Daily Deals, Positive Indicators, Image Teasers inside the product grid, a simple blog functionality, product gifts, brand management, SEO improvements, identification and display of bestsellers and many more. Many of those have been integrated with the Content Constructor, and that allows you to create various marketing campaign landing pages.
                    </Paragraph>
                    
                </TextPicture>
                <TextPicture picture={(
                    <PictureVectorpng image="g-feature-ux" widthDesktop="80%" marginDesktop="2rem 2rem 0 0"/>
                )} hide={this.state.tab != 'ux'}>
                    <Headline HtmlTag="h3" size="20">User Experience</Headline>
                    <Paragraph size="20" distance>
                        MageSuite improves the user experience for customers and administrators.   Beside smaller UX enhancements in the search, layered navigation filters, checkout, content management and mobile optimizations there are also brand new features such a the Product Finder. It allows you to define a product questionnaire within the Content Constructor. By that, you can consult your customers at any place of your Magento webshop which product fits best according to their requirements.
                    </Paragraph>
                    
                </TextPicture>
                
                <style jsx>{`
                    article {
                        padding: ${rem(80)} ${rem(100)};
                    }
                `}</style>

            </article>
        )
    }
    tabClicked(id) {
        this.setState({
            tab: id
        })
    }
}

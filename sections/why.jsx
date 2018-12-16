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
            <article>
                <Headline HtmlTag="h2" centered>Why MageSuite is so good?</Headline>
                
                <Paragraph centered distance>
                    Proident aliquip est aute id velit est consectetur laboris culpa ipsum. Mollit Lorem quis voluptate laboris consectetur tempor occaecat id veniam commodo excepteur dolor magna. Ex laborum dolor non occaecat enim culpa culpa culpa ex amet excepteur deserunt nulla consequat. Lorem dolor consequat do nulla est ad esse mollit fugiat nostrud ipsum. Culpa voluptate est deserunt et magna aliquip pariatur magna magna. Magna sint laboris labore eiusmod officia sit incididunt excepteur velit.
                </Paragraph>
                <FeaturesTabs tabClicked={this.tabClicked.bind(this)} activeTab={this.state.tab}/>
                
                { (this.state.tab == 'cms') && (
                    <TextPicture picture={(
                        <PictureVectorpng image="g-feature-cms" widthDesktop="70%" marginDesktop="1rem"/>
                    )}>
                        <Headline HtmlTag="h3" size="20">Content constructor</Headline>
                        <Paragraph size="20" distance>
                            Veniam est Lorem eu cupidatat minim ea cupidatat eu non. Ex tempor laborum laboris amet fugiat adipisicing nulla cillum ad cupidatat et exercitation. Elit quis ex cillum sunt esse qui ex. Velit dolor anim excepteur consequat aute enim. Dolore aliquip non consequat anim. Qui proident quis pariatur exercitation amet duis in.
                        </Paragraph>
                        <Button text="Find out more"/>
                    </TextPicture>
                )}
                { (this.state.tab == 'perf') && (
                    <TextPicture picture={(
                        <PictureVectorpng image="g-feature-cms" widthDesktop="70%" marginDesktop="1rem"/>
                    )}>
                        <Headline HtmlTag="h3" size="20">Performance</Headline>
                        <Paragraph size="20" distance>
                            Velit proident consectetur minim commodo et ullamco qui velit nisi sit et excepteur ex. Magna anim sint veniam ad eiusmod aliqua aliqua ullamco adipisicing aliquip culpa ea non. Commodo eiusmod dolor fugiat exercitation irure cillum ex ex nostrud deserunt cillum pariatur in qui. Esse ex fugiat esse ipsum veniam officia cillum ipsum deserunt duis veniam nostrud. Ad deserunt non velit aliqua ipsum culpa minim.
                        </Paragraph>
                    </TextPicture>
                )}
                { (this.state.tab == 'security') && (
                    <TextPicture picture={(
                        <PictureVectorpng image="g-feature-cms" widthDesktop="70%" marginDesktop="1rem"/>
                    )}>
                        <Headline HtmlTag="h3" size="20">Security</Headline>
                        <Paragraph size="20" distance>
                        Elit sint tempor et consectetur est. Sit veniam ut quis do irure quis do reprehenderit elit aliqua amet id. In officia reprehenderit dolor qui enim laborum id nulla Lorem sint. Duis do do sint fugiat consectetur aliquip dolor qui ut non. Deserunt labore consequat voluptate do fugiat labore incididunt consequat. Ex deserunt consequat nostrud excepteur incididunt duis nisi.
                        </Paragraph>
                        
                    </TextPicture>
                )}
                { (this.state.tab == 'search') && (
                    <TextPicture picture={(
                        <PictureVectorpng image="g-feature-marketing" widthDesktop="70%" marginDesktop="1rem"/>
                    )}>
                        <Headline HtmlTag="h3" size="20">Search</Headline>
                        <Paragraph size="20" distance>
                        Ipsum tempor esse excepteur est anim laboris labore occaecat ex magna esse deserunt. Lorem in aliqua eu proident. Laboris duis laborum est consequat id culpa anim ipsum ea minim veniam. Sint voluptate consectetur cupidatat aliqua ex. Eu aliqua deserunt commodo duis sunt officia ea adipisicing.
                        </Paragraph>
                        
                    </TextPicture>
                )}
                
                <style jsx>{`
                    article {
                        padding: ${rem(74)} ${rem(80)};
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

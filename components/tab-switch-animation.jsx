import { Component } from 'react';
import {rem} from "./styles";

export default class TabSwitchAnimation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: props.children,
            next: null,
            visible: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this.startTransition(nextProps.children);
        }
    }

    startTransition(next) {
        this.next = next;

        this.setState({
            visible: false
        });

        setTimeout(() => this.midTransition(), 100);
    }

    midTransition() {
        this.setState({
            current: this.next
        });

        this.next = null;

        /* Give it some time to load */
        setTimeout(() => this.endTransition(), 100);
    }

    endTransition() {
        this.setState({
            visible: true
        });
    }

    className() {
        return ('switcher' + (this.state.visible ? ' switcher--visible' : ' switcher--hidden'));
    }

    render() {
        return (
            <div className={this.className()} >
                <div className="switcher__inner">
                    {this.state.current}
                </div>
                <style jsx>{`
                    .switcher {
                        overflow: hidden;
                        width: 100%;
                        height: 100%;

                        position: relative;
                    }

                    .switcher::after {
                        content: ' ';
                        position: absolute;
                        width: 2rem;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
                    }

                    .switcher__inner {
                        transition: .1s ease-in;
                        width: 100%;
                        height: 100%;
                    }


                    .switcher--visible .switcher__inner {
                        opacity: 1;
                        transform: translate(0, 0);
                    }

                    .switcher--hidden .switcher__inner{
                        opacity: 0;
                        transform: translate(100%, 0);
                    }

                `}</style>
            </div>
        );
    }
}

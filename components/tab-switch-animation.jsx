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

        setTimeout(() => this.midTransition(), 75);
    }

    midTransition() {
        this.setState({
            current: this.next
        });

        this.next = null;

        /* Give it some time to load */
        setTimeout(() => this.endTransition(), 75);
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

                    .switcher__inner {
                        transition: .075s ease-in;
                        width: 100%;
                        height: 100%;
                    }

                    .switcher--visible .switcher__inner {
                        opacity: 1;
                    }

                    .switcher--hidden .switcher__inner{
                        opacity: 0;
                    }

                `}</style>
            </div>
        );
    }
}

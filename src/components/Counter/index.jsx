import {Component, Fragment} from "react";
import moment from "moment";


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            time: moment().format("hh:mm:ss")
        }
        console.log("constructor(props)")
    }

    increase() {
        this.setState({
            counter: ++this.state.counter,
            time: moment().format("hh:mm:ss"),
        });
    }

    componentDidMount() {
        console.log("componentDidMount()");
        this.setState({
            counter: 10
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate()");

        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        console.log("snapshot", snapshot);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount()")
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch()")
        //TODO explore more on this. Usages and practical scenarios
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate()")
        return true;
    }

    render() {
        return (
            <Fragment>
                <h2>Value is {this.state.counter}</h2>
                <h3>Current time is {this.state.time}</h3>

                <button onClick={() => this.increase()}>Click me!</button>
            </Fragment>
        )
    }
}

export default Counter;
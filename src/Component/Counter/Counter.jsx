import "./counter.css"
import {Component} from "react"

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    render(){
        return (
            <div className="counterContainer">
                <h1>{this.state.count}</h1>
                <div className="buttonContainer">
                <button onClick={() => {
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>INCREMENT</button>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count - 1
                    })
                }}>DECREMENT</button>
                <button onClick={() => {
                    this.setState({
                        count:0
                    })
                }}>RESET</button>
                </div>
            </div>
        )
    }
}


export default Counter;


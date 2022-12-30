import { Component } from "react";
class Timer extends Component {
constructor(){
    super();
    this.state={
        timer:0,
        intervall: null,

    };
}

componentDidMount(){
    this.setState({
        intervall:setInterval(()=>this.setState({timer:this.state.timer+1}),
        1000)

    }
    )
}


    render (){
let Timer=this.state.timer;
        return (<div>
            <h4>The Timer has mounted since  {Timer}s</h4>
        </div>

        )
    }
}

export default Timer;
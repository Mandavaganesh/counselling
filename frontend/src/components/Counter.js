import React, { Component } from 'react'

class Counter extends Component {
    constructor()
    {
        super()
        this.state ={
            count : 0
        }
    }
    increment()
    {
        //this.setState(
        //{
          //  count : this.state.count+1
        //}, ()=>console.log("callback="+ this.state.count))
        //console.log(this.state.count)
        this.setState((prevstate)=>({
            count: prevstate.count+1
        }))
    }
    decrement()
    {
        //this.setState(
        //{
          //  count : this.state.count+1
        //}, ()=>console.log("callback="+ this.state.count))
        //console.log(this.state.count)
        this.setState((prevstate)=>({
            count: prevstate.count-1
        }))
    }
  
  render() 
  {
    return (
      <div><center>
         <h1>Count:{this.state.count}</h1>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>  decrement</button>
            </center>
      </div>
    )
  }
}

export default Counter
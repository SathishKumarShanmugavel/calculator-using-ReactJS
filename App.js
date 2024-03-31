import React from  'react';
import './App.css'; 
class calculator extends React.Component{

  constructor(props){
    super(props);
    this.state={
      displayValue:""
    }
  }

  handleButton=(value)=>{
    if(value==="="){
      this.calculateResult();
    }
    else if(value==="C"){
      this.clearDisplay();
    }
    else{
      this.setState((preState)=>({
        displayValue:preState.displayValue+ value,
      }))
    }
  }

  calculateResult=()=>{
    try{
      const result=eval(this.state.displayValue);
      this.setState({displayValue:result});
    }
    catch{
      this.setState({displayValue:Error});
    }
}

clearDisplay=()=>{
  this.setState({displayValue:""})
}

  render(){
    return<>
    
    <div className="calculator">
      <h1>CALCULATOR</h1>

      <div className="displayValue">{this.state.displayValue}</div>
        <div className="buttons">

          <button onClick={()=>this.handleButton("7")}>7</button>
          <button onClick={()=>this.handleButton("8")}>8</button>
          <button onClick={()=>this.handleButton("9")}>9</button>
          <button onClick={()=>this.handleButton("/")} className='symbol'>/</button>
    
          <button onClick={()=>this.handleButton("4")}>4</button>
          <button onClick={()=>this.handleButton("5")}>5</button>
          <button onClick={()=>this.handleButton("6")}>6</button>
          <button onClick={()=>this.handleButton("*")} className='symbol'>*</button>

          <button onClick={()=>this.handleButton("1")}>1</button>
          <button onClick={()=>this.handleButton("2")}>2</button>
          <button onClick={()=>this.handleButton("3")}>3</button>
          <button onClick={()=>this.handleButton("-")} className='symbol'>-</button>

          <button onClick={()=>this.handleButton("0")}>0</button>
          <button onClick={()=>this.handleButton(".")}>.</button>
          <button onClick={()=>this.handleButton("C")} className='clearButton'>C</button>
          <button onClick={()=>this.handleButton("+")} className='symbol'>+</button>

          <button onClick={()=>this.handleButton("=")} className='equals'>=</button>

        </div>

    

    </div>
    
    
    </>
  }
}


export default calculator;

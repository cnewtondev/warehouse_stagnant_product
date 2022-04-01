import React, { Component } from 'react';
import master from './masterDataParser'


class App extends Component {
  state = {
    masterArr: [],
    masterObj: {},
    final: {}
   }

  componentWillMount(){
    this.setState({masterArr: master})
  }

  componentDidMount(){
    var total = 0;
    for(let i = 0; i < this.state.masterArr.length; i++){
      total += this.state.masterArr[i].timeLag
    }
    var avg = total / this.state.masterArr.length
    var intValue = parseInt(Math.floor(avg))
    console.log(this.state.masterArr)
    console.log("int: " + intValue)
    this.myFunction(intValue);
  }


  myFunction(avgLag){
    for(let x = 0; x < this.state.masterArr.length; x++){
      let variable = this.state.masterArr[x].variant
      if(!(variable in this.state.masterObj)){
        this.state.masterObj[variable] = 0
      }else if(variable in this.state.masterObj && this.state.masterArr[x].timeLag > avgLag){
        this.state.masterObj[variable] += 1
      }
    }
    console.log("masterObj: " + JSON.stringify(this.state.masterObj))
  }

  yourFunction(){
    return JSON.stringify(this.state.masterObj)
  }


  render() { 
    return (
      <div>
        
      </div>
    );
  }
}
 
export default App;

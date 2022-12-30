import './App.css';
import { Component } from 'react';
import Profile from './Components/Profile';
import Timer from './Components/Timer';
class App extends Component{
constructor(){
  super();
  this.state={
    fullName:"Hana Achour",
  show: false,
  };
}
Showprofile=()=>{
  this.setState({
    show: !this.state.show,
  });
};
render(){
  let fullName=this.state.fullName;
console.log(this.state.show);
 
  return (
  <div className='App'> 
   <h1>{fullName}</h1>
  <button onClick={this.Showprofile}>
    {this.state.show?"Hide Profile" : "Show Profile"}</button>
  {this.state.show===true && <Profile/>}
<Timer/>
    </div>
  );
  }
}



export default App;

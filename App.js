import React from 'react';
import UserOutPut from './UserOutput/useroutput'
import Userinput from './UserInput/userinput';
class App extends React.Component {
  
   state=
   {
     username:"",
   }
   handleUserName=(e)=>
   {
     this.setState({username: e.target.value})
   }
  render() {
    const style=
    {
      border: '2px solid blue ' 
    };
    return (
      <div className="App">
     <UserOutPut username={this.state.username}></UserOutPut>
     <Userinput click={this.handleUserName} ></Userinput>
     <button style={style} onClick={this.handleUserName}>add</button>
      </div>
    )
  }
}

export default App;

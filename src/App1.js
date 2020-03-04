import React from 'react';
import Valid from './Validation/validation'
import Char from './CharComponent/charcomponent'
class App extends React.Component {
    state = {
        input: ""
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }
    handelDelete=(index)=>
    {
let arr=this.state.input.split('');
arr.splice(index,1);
this.setState({input: arr.join('')})
    }
    render() {
        const array = this.state.input.split('').map((ch, index) => {
            return <Char
                character={ch}
                click={()=>{this.handelDelete(index)}}
            />;
        });



        return (
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <p>In App Component: {this.state.input.length}</p>
                <Valid length={this.state.input.length}></Valid>
                {array}
            </div>
        )
    }

}

export default App;

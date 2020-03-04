import React,{ Component } from "react";

class Userinput extends Component{
    render()
    {
        return(

         <input type="text"  onChange={this.props.click}    />
        )
    }
}
export default Userinput;
import React,{ Component } from "react";

class Useroutput extends Component{
    render()
    {
        return(
            <div>  
            
        <h2>{this.props.username}</h2>        
             <p>first paragraph</p>

            <p>second paragraph</p>
            
            </div>
        )
    }
}
export default Useroutput;
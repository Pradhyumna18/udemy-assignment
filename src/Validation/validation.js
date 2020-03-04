import React,{ Component } from "react";

class Valid extends Component{
    render()
    {
        if(this.props.length>5)
        {
        
        return(
            <div>
        <p>In validation component: {this.props.length}</p>
        <p>Too long</p>
            </div>
        )
        }
        if(this.props.length<5)
        {
        
        return(
            <div>
        <p>In validation component: {this.props.length}</p>
        <p>Too short</p>
            </div>
        )
        }
        else
        {
        
        return(
            <div>
        <p>In validation component: {this.props.length}</p>
        <p>perfect length</p>
            </div>
        )
        }

    }
}
export default Valid;
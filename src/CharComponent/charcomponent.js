import React, { Component } from "react"

class Char extends Component {

    render() {
        const style = {
            display: 'inline-block',
            padding: '16px',
            textalign: "center",
            margin: "16px",
            border: "1px solid black"
        }
        return (
            <div style={style} onClick={this.props.click}>
                {this.props.character}
            </div>
        )
    }
}
export default Char;
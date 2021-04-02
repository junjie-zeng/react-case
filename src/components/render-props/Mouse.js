


import React from 'react'

class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(ev){
        this.setState({
            x:ev.clientX,
            y:ev.clientY
        })
    }


    render(){
        return(

            <div style = {{height:'100vh',border:'solid 1px gray'}} onMouseMove = {this.handleMouseMove}>
                {/* <h1>移动鼠标！</h1>
                <p>当前的鼠标位置是 ({this.state.x},{this.state.y})</p> */}
                {this.props.render(this.state)}
            </div>
        )
    }


}


export default Mouse
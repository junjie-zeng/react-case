import React, { Component } from 'react'

export default class a extends Component {
    state = {
        name:'lhaha'
    }
    render() {
        // console.log('render props a ...',this.props)
        return (
            <div className = "a">
                <h4>我是组件A</h4>
                {/* {this.props.children} */}
                {this.props.render(this.state)}
            </div>
        )
    }
}

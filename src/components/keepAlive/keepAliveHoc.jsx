
import React, { Component } from 'react'
// 该组件未高阶组件

const keepAliveHoc = (Comp) => {

    let cache = {};

    return class Alive extends React.Component {

        componentDidMount() {
            const state = this.comp.state;
            this.comp.setState({ ...state, ...cache });
        }

        componentWillUnmount() {
            const state = this.comp.state;
            cache = { ...state };
        }

        render() {
            return (
                <Comp ref={comp => this.comp = comp} {...this.props} />
            )
        }
    }
}

export default keepAliveHoc
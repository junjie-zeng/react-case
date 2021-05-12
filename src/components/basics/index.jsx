import React, { Component } from 'react'
import SetStateDemo from './setState'
import RefDemo from './ref'
import ContextDemo from './context'
import PureComponentDemo from './pureComponet'
export default class index extends Component {
    render() {
        return (
            <div style={{padding:'20px'}}>
                <SetStateDemo/>
                <hr />
                <RefDemo/>
                <hr />
                <ContextDemo/>
                <hr />
                <PureComponentDemo/>
            </div>
        )
    }
}

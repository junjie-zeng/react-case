import React, { Component } from 'react'
import SetState from './setState'
import Ref from './ref'
export default class index extends Component {
    render() {
        return (
            <div style={{padding:'20px'}}>
                <SetState/>
                <hr />
                <Ref/>
            </div>
        )
    }
}

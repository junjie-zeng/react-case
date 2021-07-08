import React, { Component } from 'react'
import Dome1  from './basic/dome1'
import Dome2  from './basic/dome2'
import Dome3  from './basic/dome3'
import Dome4  from './basic/dome4'
import Dome5  from './basic/dome5'
import Dome6  from './basic/dome6'

export default class index extends Component {
    render() {
        return (
            <div>
                <h3>Tips</h3>
                <hr />
                <Dome1/>
                <hr />
                <Dome6/>
                <hr />
                <Dome2/>
                <hr />
                <Dome3/>
                <hr />
                <Dome4/>
                <hr />
                <Dome5/>
            </div>
        )
    }
}

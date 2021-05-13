import React, { Component } from 'react'
// setState
import SetStateDemo from './setState'
// Ref
import RefDemo from './ref'
// 上下文
import ContextDemo from './context'
// pureComponent
import PureComponentDemo from './pureComponet'
// render props
import RenderPropsDemo from './renderProps'
// 错误边界
import ErrBoundaryDemo from './errBoundary'


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
                <hr />
                <RenderPropsDemo/>
                <hr />
                {
                    <ErrBoundaryDemo/>
                }
            </div>
        )
    }
}

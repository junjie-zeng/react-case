import React, { Component } from 'react'
import A from './a'
export default class index extends Component {
    state = {
        hasError: false
    }

    /*
        注：错误边界，开发版只会暂时性的提示，提示后依然会报错，毕竟这中问题要在开发时解决
                    正式版会正常提示
    */


    // 一旦组件报错，就会触发
    static getDerivedStateFromError(error) {
        console.log(error)

        return {
            hasError: true
        }
    }

    componentDidCatch(error,info){
        // 统计页面中的错误发送到后台
        console.log('error ...',error)
        console.log('info ...',info)

    }

    render() {
        const { hasError } = this.state
        return (
            <div>
                <h4>错误边界</h4>
                
                {hasError ? <h5>网络繁忙</h5>:<A />}
            </div>
        )
    }
}

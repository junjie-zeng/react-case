import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import mobxState from './index.state.js'
import Lei from './Lei'
import HanShu from './Hanshu'
import HanShu2 from './Hanshu/index2'
import ZhiJieSY from './ZhiJieSY'



// 路径配置测试
// import {test} from '@config/tools.js'
// test()

class index extends Component {
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <Lei mobxState={mobxState}/>
                <hr />
                <ZhiJieSY/>
                <hr />
                <HanShu/> 
                <hr />
                <HanShu2/> 
            </div>
        )
    }
}
export default index
import React, { Component } from 'react'
import { Provider,observer } from 'mobx-react'
import mobxState from './index.state.js'
import Lei from './Lei'
import HanShu from './Hanshu'





// import {test} from '@config/tools.js'
// test()
class index extends Component {
    render() {
        return (
            // <Provider mobxState={mobxState}>
            //     <div style={{ padding: '20px' }}>
            //         {/* <Lei {...mobxState} />
            //         <HanShu {...mobxState} /> */}
            //         <Lei />
            //         {/* <HanShu /> */}
                   
            //     </div>
            // </Provider>


            <Lei mobxState={mobxState}/>

        )
    }
}
export default index
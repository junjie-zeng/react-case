

import ListViewDemo from './listViewDemo'
import UseReducerDome from './useReducerDome/index'
import Tab from './tab'
import ToastTest from './toastTest'




const Index = () => {
    const _style = { position: 'fixed', top: '0', 'zIndex': 1, width: '100%', height: '100%', background: 'white'}
    return (
        <div style={_style}>
            {/* <Tab/> */}

            {/* 自定义useRedurce */}
            <UseReducerDome />

            <ToastTest/>

            {/* <ListViewDemo/> */}
        </div>
    )
}

export default Index
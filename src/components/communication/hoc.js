
import React from 'react'
/*

    高阶组件就是编写一个函数，然后传入一个组件，在函数中在编写一个函数并扩展传入的组件，最后返回新的组件，这就是高阶组件
    它的目的就是为了让代码得到更多的复用
*/

class A extends React.Component {
    render() {
        return (
            <div>
                <h1>您可以享受的${this.props.VIP}的特权...</h1>
            </div>
        )
    }
}


class B extends React.Component {
    render() {
        return (
            <div>
                <h1>您当前VIP等级为${this.props.VIP},升级立刻...</h1>
            </div>
        )
    }
}

function Wrap(WrapComponent) {
    class newComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                VIP: ''
            }

        }

        componentWillMount() {
            let vip = localStorage.getItem('vip') || 0
            this.setState({
                VIP: vip
            })
        }

        render() {
            return (
                <WrapComponent VIP={this.state.VIP} />
            )
        }
    }
    return newComponent
}




// 使用


A = Wrap(A)
B = Wrap(B)
// 假装下面是导入在使用
// export default A
// export default B

// import A from 'A'
// import B from 'B'




class Hoc extends React.Component {


    render() {
        
        return (
            <div style={{ padding: '10px' }}>
                <A />
                <B />
            </div>
        )
    }
}


export default Hoc
import React, { Component ,PureComponent} from 'react'

/**
 * 
 *  父子组件
 *      1. setState更新父组件的状态，子组件也会重新渲染
 *          解决：使用 shouldComponentUpdate 进行浅比较，该方法不适用于多个属性的情况
 *               使用 PureComponent
 * 
 */



class Parent extends PureComponent {
    state = { carName: "奔驰c36", stus: ['小张', '小李', '小王'] }


    changeCar = ()=>{
        // 晃一下
        this.setState({})
        // 更新
        // this.setState({carName:'迈巴赫'})

        // 不要直接去修改state的值，而是产生新的state（PureComponent重写了shouldComponentUpdate()，只有state或props数据有变化才返回true）
        // const obj = this.state
        // obj.carName = '迈巴赫'
        // console.log(obj === this.state);
        // this.setState(obj)
    }

    addStu = ()=>{
		/* const {stus} = this.state
		stus.unshift('小刘')
		this.setState({stus}) */

		const {stus} = this.state
		this.setState({stus:['小刘',...stus]})
	} 

    render() {
        console.log('parent render ...')
        const { carName } = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                {this.state.stus}&nbsp;
                <span>我的车名字是：{carName}</span><br />
                <button name = "huananche" onClick={this.changeCar}>点我换车</button>
                <button name = "tianjia" onClick={this.addStu}>添加</button>

                <Child carName="奥拓" />
            </div>
        )
    }
}


class Child extends PureComponent {
    render() {
        console.log('child render ...')
        return (
            <div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
			</div>
        )
    }
}





export default Parent

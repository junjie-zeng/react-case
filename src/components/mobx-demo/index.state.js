/** 
    mobx

    参考：https://www.cnblogs.com/xiaozhumaopao/p/14421721.html
    参考：https://developer.51cto.com/art/202101/642827.htm
    付费课程：https://www.qiuzhi99.com/playlists/react-mobx.html
    新老版本写法对比：https://blog.csdn.net/daoke_li/article/details/109527333

    1. api
        @observable 定义可观察的数据
        computed 将多个可观察数据组合成一个
        autorun 自动追踪所引用的观察数据，并在数据变化时重新触发
        when 提供了条件执行逻辑，autorun的变种
        reaction 分离观察数据声明
        action 修改状态的行为
        action.bound 可以绑定 this 到当前的 class 上

        设置严格模式 configure({ enforceActions: "observed" });

    2. 使用 mobx-react 中的 Provider 将 stores 中的值传递到组件中去，避免在跟组件中使用 props 传递
        1. 如果使用Provider则需要在使用store的组件中通过inject(‘store数据’)来进行消费，否则props中获取的是undefiend

    3. store更新但是UI没有更新
        原因是mobx 6.x版本不是使用@observable，改成使用makeAutoObservable或者makeObservable
        （项目使用的是5.9.4，当前版本为6.3.0）
 */

import {observable, action, makeAutoObservable, computed } from "mobx";
import { nanoid } from 'nanoid'

// 6.x 之前写法（在当前6.x版本是用不了的）
class oldMobxState {
    @observable todos = [
        { id: '001', name: '吃饭', done: true },
        { id: '002', name: '睡觉', done: true },
        { id: '003', name: '打代码', done: false },
    ]

    @computed get todosLength() {
        return this.todos.length
    }

    // 添加
    @action addTodo = () => {
        this.todos.push({ id: nanoid(), name: `new_${Date.now()}`, done: false })
    }

    //  删除
    @action deleteTod = (index) => {
        this.todos.splice(index, 1)
    }
}


// 6.x 写法
class newMobxState {
    constructor() {
        makeAutoObservable(this)
    }

    time = '2021'
    todos = [
        { id: '001', name: '吃饭', done: true },
        { id: '002', name: '睡觉', done: true },
        { id: '003', name: '打代码', done: false },
    ]

    get todosLength() {
        return this.todos.length
    }

    // 添加
    addTodo = () => {
        this.todos.push({ id: nanoid(), name: `new_${Date.now()}`, done: false })
    }

    //  删除
    deleteTod = (index) => {
        this.todos.splice(index, 1)
    }

    // 清空
    claerTodo = ()=>{
        this.todos = []
    }

    // 更新某个数据的名称
    updateTodoName = (index,name)=>{
        this.todos[index] = {...this.todos[index],name}
    }
}


// export default new oldMobxState()
export default new newMobxState()
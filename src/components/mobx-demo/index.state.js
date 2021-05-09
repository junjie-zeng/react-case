/** 
 
        mobx


    @observable 定义可观察的数据

    computed 将多个可观察数据组合成一个
    autorun 自动追踪所引用的观察数据，并在数据变化时重新触发
    when 提供了条件执行逻辑，autorun的变种
    reaction 分离观察数据声明
    action 修改状态的行为
 */

import { decorate, observable ,action,makeAutoObservable} from "mobx";
import {nanoid} from 'nanoid'


class MobxStateDemo {
    constructor(){
        makeAutoObservable(this)
    }
    @observable time = '2021'
    @observable todos = [
        { id: '001', name: '吃饭', done: true },
        { id: '002', name: '睡觉', done: true },
        { id: '003', name: '打代码', done: false },
    ]
    // 添加
    @action addTodo = ()=>{
        this.todos.push({ id: nanoid(), name: `new_${Date.now()}`, done: false })
    }
}




export default  new MobxStateDemo()
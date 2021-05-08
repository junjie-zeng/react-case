/** 
 
        mobx

 */

import { decorate, observable } from "mobx";


class MobxDemoStore{
    // @observable time = '2019'
    // @observable todos = []
    time = '2019'
    todos = []
}

// decorate(MobxDemoStore,{
//     time: observable,
//     todos: observable
// })

const store = new MobxDemoStore()
export default store
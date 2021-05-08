
import {observable} from 'mobx'

class TotoStore{
    @observable todoList=[
        {id:0,name:'哈哈',done:false}
    ]
}

export default new TotoStore()
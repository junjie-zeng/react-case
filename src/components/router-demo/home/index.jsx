import React, { Component } from 'react'
import { Switch, Route ,Link} from 'react-router-dom'
import Detail from './detail'

export default class index extends Component {

    state = {
        list1:[
            {id:1,title:'中国'},
            {id:2,title:'平安'},
        ],
        list2:[
            {id:3,title:'上海'},
            {id:4,title:'湖南'},
        ]
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <h5>param传参</h5>
                    {
                        // param 传参
                        this.state.list1.map((item)=>(
                            <li key = {item.id}><Link to={`/appRoute/home/detail/${item.id}/${item.title}`}>{item.title}</Link></li>
                        ))
                    }
                    {/* <h5>search(query) 传参</h5>
                    {
                        // search(query) 传参
                        this.state.list2.map(item=>(
                            <li key = {item.id}><Link to={`/appRoute/home/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link></li>
                        ))
                    } */}
                </ul>
                
                <hr />
                <Route path = "/appRoute/home/detail/:id/:title" component = {Detail}/>
                {/* <Route path = "/appRoute/home/detail" component = {Detail}/> */}
            </div>
        )
    }
}

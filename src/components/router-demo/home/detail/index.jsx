import React, { Component } from 'react'
import qs from 'querystring'

export default class index extends Component {

    state = {
        data:[
            {id:1,content:'我爱中国'},
            {id:2,content:'我爱平安'},
            {id:3,content:'我爱上海'},
            {id:4,content:'我爱湖南'},
        ]
    }

    render() {
       
        // 获取param参数
        const {match:{params:{id,title}}} = this.props  // 连续结构赋值
        

        // 获取search 参数
        // const {location:{search}} = this.props
        // const {id,title} = qs.parse(search.slice(1))
        

        const detailObj = this.state.data.find(item=>item.id == id)
        // console.log(detailObj)

        return (
            <div>
                <h4>详情</h4>
                <ul>
                    <li>id：{id}</li>
                    <li>name：{title}</li>
                    <li>content：{detailObj.content}</li>
                </ul>
            </div>
        )
    }
}

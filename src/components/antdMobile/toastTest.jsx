
import React, { useState } from 'react'
import { Toast } from 'antd-mobile'


const Index = () => {
    const [isShow, setIsShow] = useState(false)

    const Message = ()=>{
        return (
            <div style = {{width:'100%',height:'100%'}}>
               <img src="https://m.reg.163.com/aqPub/images/password-4251375d.png" alt="" />
            </div>
        )
    }

    const handleClickMe = () => {
        Toast.info(<Message/>,1)
    }


    return (
        <>
            <h5>Toast</h5>
            <button onClick={handleClickMe}>点我</button>
        </>
    )
}


export default Index
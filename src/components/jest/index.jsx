import React, { } from 'react'


export const Example = (props) => {

    const handleClcik = () => {
        if (props.onClick) { props.onClick() }
        console.log('点我了 ...')
    }


    return (
        <div>
            <p>hello</p>
            <button className="btn" onClick={handleClcik}>{props.text}</button>
        </div>
    )
}


// index
const Index = (props) => {

    return (
        <>
            <Example text='点我' />
        </>
    )
}

export default Index
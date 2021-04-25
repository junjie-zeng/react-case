import { Button } from 'antd';



function Btn() {

    const handleButtonClick = () => {
        console.log('按钮点击...')
    }

    return (
        <>
            <h4>按钮</h4>
            <Button type="primary" onClick={handleButtonClick}>Button</Button>
            <Button type="loading" size="small" onClick={handleButtonClick}>loading</Button>
            <Button type="primary" icon="search">search</Button>


        </>
    )
}

export default Btn
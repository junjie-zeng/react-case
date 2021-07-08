

import { Tabs, WhiteSpace, SearchBar, InputItem } from 'antd-mobile';
const handleScroll = (ev) => {
    console.log(ev)
}

const handleTouchEnd = (ev) => {
    console.log('end ..', ev)
}



const tabs = [
    { title: '1st Tab', height: 150, color: 'pink' },
    { title: '2nd Tab', height: 200, color: 'gray' },
    { title: '3rd Tab', height: 230, color: 'black' },
    { title: '4th Tab', height: 300, color: 'green' },
    { title: '5th Tab', height: 400, color: 'pink' }
];

const renderContent = tab =>
(<div style={{ height: tab.height, backgroundColor: tab.color }}>
    <p>Content of {tab.title}</p>
</div>);


const Tab = () => {
    return (
        <div >


            <div style={{ height: '300px' }}>
                <WhiteSpace />
                <Tabs

                    tabs={tabs}
                    usePaged={false}
                    // tabDirection="vertical"
                    // tabBarPosition="left"
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>

                    {renderContent}
                </Tabs>
                <WhiteSpace />
            </div>

            <div style={{ height: '300px', background: 'pink', overflowY: 'scroll' }} onScroll={handleScroll} onTouchEnd={handleTouchEnd}>
                {
                    tabs.map(item => (<div style={{ height: '100px' }}>{item.title}</div>))

                }
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
                <div style={{ height: '100px' }}>1</div>
            </div>



        </div>
    )
}

export default Tab
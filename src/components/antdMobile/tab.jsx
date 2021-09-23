
import React, { useState, useEffect, useRef } from 'react'
import { Tabs, } from 'antd-mobile';

// npm i rmc-tabs


function useCallbackState(state) {
    const cbRef = useRef();
    const [data, setData] = useState(state);

    useEffect(() => {
        cbRef.current && cbRef.current(data);
    }, [data]);

    return [data, function (val, callback) {
        cbRef.current = callback;
        setData(val);
    }];
}

// 统计div高度
function countLiHeight(items) {
    // 默认为0
    var wrapperTop = 0;
    var tops = []
    tops.push(wrapperTop)
    // 将类数组转换为数组
    Array.prototype.slice.call(items).forEach(li => {
        wrapperTop += li.clientHeight
        tops.push(wrapperTop)
    })

    return tops
}

const tabs = [
    { title: '1st', height: 150, color: 'pink' },
    { title: '2nd', height: 200, color: 'gray' },
    { title: '3rd', height: 230, color: 'black' },
    { title: '4th', height: 300, color: 'green' },
    { title: '5th', height: 400, color: 'pink' }
];



const Index = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsHei, setItemHei] = useCallbackState([])
    const tabWarpRef = useRef();

    useEffect(() => {
        // 获取子元素
        const items = tabWarpRef.current.getElementsByTagName('div')
        // 设置搜集到的高度
        setItemHei(countLiHeight(items), (list) => {
            console.log('list', list)
            tabWarpRef.current.addEventListener('scroll', function (e) {
                // 距离顶部的距离
                const y = e.target.scrollTop
                // 拿到当前下标
                const index = list.findIndex((top, index) => {
                    // console.log(top,index)
                    // 当前滚动位置的坐标（y） >= 当前top 并且 当前滚动位置的坐标（y） < 下一个top
                    return y >= top && y < list[index + 1]
                });

                console.log(index,y)
                // 注：有问题，当盒子高度不够时，点击tab也会触发滚动，CurrentIndex会被重新设置
                setCurrentIndex(index)
            })
        })
    }, [])

  

    const onTabClick = (tab, index) => {
        // 当前元素的高度（该高度也就是距离顶部的距离）
        const Y = itemsHei[index]
        console.log('onTabClick', index, tab)
        // 设置滚动条Y轴的距离
        tabWarpRef.current.scrollTo(0, Y)
        // tabWarpRef.current.getElementsByTagName('div')[index].scrollIntoView()
        setCurrentIndex(index)
    }

    const handleChange = (tab, index) => {
        // console.log('onChange', index, tab);
        setCurrentIndex(index)
    }

    return (
        <>
            <div style={{ width: '100%' }}>
                <Tabs tabs={tabs}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} activeTab={currentIndex} />}
                    onChange={handleChange}
                    onTabClick={onTabClick}
                >
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab 1
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab 2
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab 3
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab 4
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab 5
                    </div> */}
                </Tabs>
            </div>
            <div className="tab_warp" ref={tabWarpRef}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </>
    )
}

export default Index
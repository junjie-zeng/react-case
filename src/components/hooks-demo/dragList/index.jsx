

import { useState, useEffect } from 'react'
import useDraggable from './useDraggable'
import './index.css'


/**
 * 
 * 
 *  拖拽源码 https://codesandbox.io/s/flamboyant-knuth-ytocc?file=/src/styles.css
 */

const list = [
    {
        background: 'pink',
        title: '粉色'
    },
    {
        background: 'gray',
        title: '灰色'
    },
    {
        background: '#dc4963',
        title: '玫红色'
    }
]


function cls(def, ...conditions) {
    const list = [def];
    conditions.forEach(cond => {
        if (cond[0]) {
            list.push(cond[1]);
        }
    });
    return list.join(" ");
}



function App() {

    return (
        <div className="dragListBox">
            <DraggableList list={list} />
        </div>
    )
}

// 根据list渲染整个拖拽组件
function DraggableList({ list }) {
    const { dragList, createDraggerProps, createDropperProps } = useDraggable(list);
    return dragList.map((item, i) => {
        // console.log("--------",item.type)
        if (item.type === "BAR") {
            return <Bar id={i} {...createDropperProps(i)} key={item.id} />;
        } else {
            return (
                <Draggable {...createDraggerProps(i, item.id)}>
                    <Card {...item.data} />
                </Draggable>
            );
        }
    });
}


// 可拖拽的
function Draggable({ children, eventHandlers, dragging, id }) {
    return (
        <div
            {...eventHandlers}
            draggable
            className={cls("draggable", [dragging === id, "dragging"])}
        >
            {children}
        </div>
    );
}

// 占用空闲区域
function Bar({ id, dragging, dragOver, eventHandlers }) {
    // console.log({ id, dragging, dragOver, eventHandlers })
    if (id === dragging + 1) {
        return null;
    }

    return (
        <div
            {...eventHandlers}
            className={cls("draggable--bar", [dragOver === id, "dragover"])}
        >
            <div
                className="inner"
                style={{
                    height: id === dragOver ? "80px" : "0px"
                }}
            />
        </div>
    );
}


// 卡片
function Card({ background, title }) {
    return (
        <div className="card" style={{ background }}>
            <div style={{ background: '#d2b1b7' }}></div>
            <span>{title}</span>
        </div>
    )
}

export default App
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as $ from 'jquery'

import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/resizable'
import 'jquery-ui/themes/base/resizable.css'
import './index.css'










let pageInfo = [
    {
        id: 0,
        type: 'button',
        _class: {},
        _style: { color: 'white', fontSize: 12, textAlgin: 'center', x: 300, y: 100, bgColor: 'goldenrod', bdColor: 'goldenrod', bdRadius: 10, bold: false, fontFamily: '', width: 100, height: 30 },
        _content: { text: 'hello word', link: 'http://www.baidu.com' }

    },
    {
        id: 1,
        type: 'button',
        _class: {},
        _style: { color: 'white', fontSize: 12, textAlgin: 'center', x: 300, y: 200, bgColor: '#3d9be9', bdColor: '#3d9be9', bdRadius: 10, bold: false, fontFamily: '', width: 100, height: 30 },
        _content: { text: 'hello word', link: 'http://www.baidu.com' }

    },
]








class Editor extends React.Component {
    constructor(props) {
        super()
        this.state = {
            pageInfo: pageInfo,
            showModal: false
        }
    }


    componentDidMount() {

        // 拖拽
        $('.drag-ele').draggable({
            containment: "parent",
            stop: (ev, ui) => {
                let $target = $(ev.target)
                let index = $target.attr('data-index')
                let { top, left } = ui.position
                let pageInfo = this.state.pageInfo
                pageInfo[index]._style.x = left
                pageInfo[index]._style.y = top

                this.setState({
                    pageInfo
                })

                console.log('update after ...', JSON.stringify(this.state.pageInfo))
            }
        })

        // 缩放
        $('.drag-ele').resizable({
            resize: (ev, ui) => {
                let $target = $(ev.target)
                let { width, height } = ui.size
                let index = $target.attr('data-index')
                let pageInfo = this.state.pageInfo
                pageInfo[index]._style.width = width
                pageInfo[index]._style.height = height
                console.log(ui)
                this.setState({
                    pageInfo
                })
            },
            stop: (ev, ui) => {
                console.log(ui)

            }
        })
        // console.log($('.drag-ele').resizable)
    }


    render() {
        const { pageInfo } = this.state
        return (
            <div className="editor-box">
                <div className="editor-box-element"></div>
                <div className="editor-box-content">
                    {
                        pageInfo.map((ele, index) => (
                            ele.type == 'button' ?
                                <div className="drag-ele ele-button" data-index={index} key={ele.id} style={{
                                    left: ele._style.x,
                                    top: ele._style.y,
                                    width: `${ele._style.width}px`,
                                    height: `${ele._style.height}px`,
                                    lineHeight: `${ele._style.height}px`,
                                }}>
                                    <a className="btn" style={{
                                        background: ele._style.bgColor,
                                        borderColor: ele._style.bdColor,
                                        borderRadius: `${ele._style.bdRadius}px`,
                                        textAlign: ele._style.textAlgin,
                                        fontSize: `${ele._style.fontSize}px`,
                                        color: ele._style.color

                                    }}>{ele._content.text}</a>
                                </div>
                                :
                                ''
                        ))
                    }

                </div>
                <div className="setting-box-element">

                </div>
                <div className="global-operation">
                    <button onClick={this.getData}>get data</button>
                </div>
                <Button onClick={this.open}>打开模态框</Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>标题</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        body 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>取消</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }

    getData = () => {
        console.log('update after ...', this.state.pageInfo)
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }
}

export default Editor
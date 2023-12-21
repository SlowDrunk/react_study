// 父子组件通信
import React, { Component } from 'react'

function ChildComponent(props: any) {
    return (
        <div>
            <button onClick={() => {
                props.event()
            }}>修改父组件信息</button>
        </div>
    )
}


export default class FtoC extends Component {
    state = {
        message: '我是父组件',
        isShowChild: true
    }
    changeMessage = () => {
        this.setState({
            message: '子组件通知了，我就变了'
        })
    }
    render() {
        return (
            <div>
                <ChildComponent event={this.changeMessage}></ChildComponent>
                {this.state.message}
            </div>
        )
    }
}

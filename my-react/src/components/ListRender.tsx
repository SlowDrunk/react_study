import React, { Component } from 'react'

// 状态
interface StateI {
    list: any[]
}


export default class ListRender extends Component<{}, StateI> {
    constructor(props: any) {
        super(props)
        this.state = {
            list: [{ id: 1, name: '张三' }, { id: 2, name: '李四' }]
        }
    }
    addListItem = () => {
        this.setState({
            list: [...this.state.list, { id: 3, name: '王五' }]
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addListItem()}>添加一个王五</button>
                <ul>
                    {
                        this.state.list.map((item: any, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

import React, { Component } from "react";

// 组件状态数据
interface IState {
    name: string;
    age: number;
}


export default class BindEvent extends Component<{}, IState> {
    private inputRef: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.state = {
            name: "张三",
            age: 18
        };
        this.inputRef = React.createRef();
    }
    // 需要绑定的事件
    handleClick = (e: React.MouseEvent) => {
        if (this.inputRef.current) {
            this.setState({
                name: this.inputRef.current.value
            })
            this.inputRef.current.value = ""
        }
    }
    // change事件
    handleChange = (e: any) => {
        if (! /^[0-9]+$/.test(String(e.target.value))) {
            e.target.value = ''
            this.setState({
                age: 0
            })
            return
        } else {
            this.setState({
                age: e.target.value ? e.target.value : ''
            })
        }
    }
    render(): React.ReactNode {
        return (
            <div>
                <div className="flex flex-col gap-2">
                    <div>
                        <span>姓名:</span>
                        <span>{this.state.name}</span>
                    </div>
                    <div>
                        <span>年龄:</span>
                        <span>{this.state.age}</span>
                    </div>
                </div>
                <div className="mt-[12px]">
                    <label htmlFor="testInput">输入姓名</label>
                    <input ref={this.inputRef} id="testInput" type="text" />
                    <button className="flex px-5 py-2 bg-gray-500 rounded-sm" onClick={(e) => this.handleClick(e)}>点击我</button>
                </div>
                <div className="mt-[12px]">
                    <label htmlFor="testAge">输入年龄</label>
                    <input id="testAge" type="text" onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        )
    }
}
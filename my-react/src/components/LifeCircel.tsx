import React, { Component } from 'react'

export default class LifeCircel extends Component {
    state = {
        count: 0
    }
    // 初始化阶段
    /**
     * 组件将要挂载
     * 该阶段无法获取到dom，此阶段可以做一些请求，状态修改等操作
     */
    componentWillMount(): void {
        // 这是旧版本写法
        console.log('组件将要挂载')
    }
    /**
     * 组件已经挂载
     * 该阶段组件已经挂载完毕，可以获取真是dom
     * 在该阶段可以发送请求、开启定时器，订阅函数等操作
     */
    componentDidMount(): void {
        console.log('组件挂载完成')
    }
    // 运行中阶段
    // componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    //     console.log('组件修改了属性')
    // }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('组件是否需要更新', nextProps, nextState, nextContext)
        return true
        // return false 不更新
    }
    /**
     *componentWillUpdate 父组件修改组件属性触发
    */
    componentWillUpdate(): void {
        console.log('组件将要更新')
    }
    /**
     * 组件更新完成后
     */
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('组件更新完成')
    }

    render() {
        console.log('正在渲染')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>点击加一</button>
            </div>
        )
    }
}



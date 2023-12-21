import React, { Component } from 'react'
interface listItemI {
    id: number
    text: string
}
interface StateI {
    list: listItemI[],
    currentText: string
}
export default class Tabs extends Component<{}, StateI> {
    constructor(props: any) {
        super(props)
        this.state = {
            list: [
                { id: 1, text: '电影' },
                { id: 2, text: '资讯' },
                { id: 3, text: '我的' },
            ],
            currentText: '电影'
        }
    }
    // 切换tab
    changeTab = (text: string) => {
        this.setState({
            currentText: text
        })
    }
    render() {
        const listDom = this.state.list.map(item => {
            return (
                <div className={'w-full flex flex-row justify-around text-center cursor-pointer' + (this.state.currentText === item.text ? ' text-[#fff000] border-b-2 border-blue-100' : '')} key={item.id} onClick={() => this.changeTab(item.text)} >
                    {item.text}
                </div >
            )
        })
        return (
            <div className='flex flex-col gap-3 w-[400px] mt-[200px] transition-all duration-300 ease-linear'>
                <div className='text-[18px] font-semibold w-full' style={{ display: this.state.currentText === '电影' ? 'block' : 'none' }}>电影院</div>
                <div className='text-[18px] font-semibold w-full' style={{ display: this.state.currentText === '资讯' ? 'block' : 'none' }}> 咨询中心</div >
                <div className='text-[18px] font-semibold w-full' style={{ display: this.state.currentText === '我的' ? 'block' : 'none' }}> 个人中心</div >
                <div className='w-full flex flex-row mx-auto ' >
                    {listDom}
                </div>
            </div >)
    }
}

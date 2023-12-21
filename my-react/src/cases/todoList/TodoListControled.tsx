import React, { Component } from 'react'

interface ListItemI {
    id: number;
    text: string;
    completed: boolean;
    editable: boolean;
}

interface StateI {
    list: ListItemI[];
    inputValue: string;
}
export default class TodoListControled extends Component<{}, StateI> {

    constructor(props: any) {
        super(props)
        this.state = {
            list: [],
            inputValue: ''
        }

    }
    // 添加事件项
    addListItem() {
        if (this.state.inputValue) {
            const text = this.state.inputValue;
            // 可以写一个自增的函数用作id   
            const newListItem = { id: Date.now(), text, completed: false, editable: false };
            this.setState({
                list: [...this.state.list, newListItem]
            })
            this.setState({
                inputValue: ''
            })
        }
    }
    // 删除事件项
    deleteListItem(id: number) {
        // 删除方式一：通过filter，缺点是耗费性能
        // this.setState({
        //     list: this.state.list.filter(item => item.id !== id)
        // })
        // 删除方法二：通过查找index，使用slice，这个index可以通过map的第二个参数传进来
        const index = this.state.list.findIndex(item => item.id === id);
        const newList = [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)];
        this.setState({
            list: newList
        })

    }
    // 点击完成事件项
    completeListItem(id: number) {
        this.setState({
            list: this.state.list.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
        })
    }
    // 切换表单编辑状态
    switchEditListItem(item: ListItemI) {
        this.setState(prevState => ({
            list: prevState.list.map(i => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        editable: !i.editable
                    };
                }
                return i;
            })
        }));
    }
    // 修改事件项
    editListItem(e: React.ChangeEvent<HTMLInputElement>, item: ListItemI) {
        const newValue = e.target.value;
        this.setState(prevState => ({
            list: prevState.list.map(i => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        text: newValue
                    };
                }
                return i;
            })
        }));
    }
    render() {
        // 无数据的空状态
        const tempy = <div className='w-full h-[80px] bg-gray-200 flex justify-center items-center'>
            暂无数据
        </div>
        // 列表渲染
        const listDom = this.state.list.map(item => {
            return <li key={item.id} className='h-[40px] bg-[#ccc] border-[1px] rounded-md my-2 flex flex-row items-center justify-around px-2'>
                <input className='mr-4' type="checkbox" checked={item.completed} onChange={(e) => {
                    this.completeListItem(item.id)
                }} />
                {
                    item.editable ? <input type="text" value={item.text}
                        onChange={(e) => {
                            this.editListItem(e, item)
                        }} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                this.switchEditListItem(item)
                            }
                        }} />
                        : <span className='text-[16px] text-[#333] flex-1'>{item.text}</span>
                }
                <span className='text-[16px] text-[#333] mr-4'>{item.completed ? '😆' : '😔'}</span>
                <button className='bg-[#ff6d9c] h-[20px] mr-4 text-[#ffffff] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => this.deleteListItem(item.id)}>删除</button>
                <button className='bg-[#fcfcfc] h-[20px] text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => this.switchEditListItem(item)}>修改</button>
            </li>
        })
        return (
            <div className='mx-auto mt-[200px] w-[800px] px-4 py-4 flex flex-col gap-3'>
                <div className='flex flex-row w-full justify-between gap-5'>
                    <input className='border flex-1' type="text" value={this.state.inputValue} onChange={(e) => {
                        this.setState({
                            inputValue: e.target.value
                        })
                    }} onKeyDown={
                        (e) => {
                            if (e.key === 'Enter') {
                                this.addListItem()
                            }
                        }
                    } />
                    <button className='bg-[#fcfcfc] h-[20px] text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => this.addListItem()}>添加</button>
                </div>
                <ul className='w-full'>
                    {/* 条件渲染，如果list没有数据就显示暂无数据 */}
                    {this.state.list.length > 0 ? listDom : tempy}
                </ul>
                <div className='text-[#333]'>
                    <span>已完成/{this.state.list.filter(item => item.completed === true).length}</span>
                    <span>未完成/{this.state.list.filter(item => item.completed === false).length}</span>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

interface ListItemI {
    id: number;
    text: string;
    completed: boolean;
}

interface StateI {
    list: ListItemI[];
}
export default class TodoList extends Component<{}, StateI> {
    private inputRef: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props)
        this.state = {
            list: []
        }
        this.inputRef = React.createRef();
    }
    // 添加事件项
    addListItem() {
        if (this.inputRef.current?.value) {
            const text = this.inputRef.current.value;
            // 可以写一个自增的函数用作id   
            const newListItem = { id: Date.now(), text, completed: false };
            this.setState({
                list: [...this.state.list, newListItem]
            })
            this.inputRef.current.value = '';
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
    render() {
        // 无数据的空状态
        const tempy = <div className='w-full h-[80px] bg-gray-200 flex justify-center items-center'>
            暂无数据
        </div>
        // 列表渲染
        const listDom = this.state.list.map(item => {
            return <li key={item.id} className='h-[40px] bg-[#ccc] border-[1px] rounded-md my-2 flex flex-row items-center justify-around px-2'>
                <span className='text-[16px] text-[#333] flex-1'>{item.text}</span>
                <span className='text-[16px] text-[#333] mr-4'>{item.completed ? '😆' : '😔'}</span>
                <button className='bg-[#ff6d9c] h-[20px] mr-4 text-[#ffffff] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => this.deleteListItem(item.id)}>删除</button>
                <button className='bg-[#fcfcfc] h-[20px] text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => this.completeListItem(item.id)}>处理</button>
            </li>
        })
        return (
            <div className='mx-auto mt-[200px] w-[800px] px-4 py-4 flex flex-col gap-3'>
                <div className='flex flex-row w-full justify-between gap-5'>
                    <input ref={this.inputRef} className='border flex-1' type="text" />
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

import React, { useState } from 'react'

interface ListItemI {
    id: number;
    text: string;
    completed: boolean;
    editable: boolean;
}

type ListItemDomProps = ListItemI & {
    completeListItem: (id: number) => void;
    deleteListItem: (id: number) => void;
    editListItem: (e: React.ChangeEvent<HTMLInputElement>, item: ListItemI) => void;
    switchEditListItem: (item: ListItemI) => void;
}

function ListItemDom(props: ListItemDomProps) {
    const { completeListItem, deleteListItem, editListItem, switchEditListItem } = props;
    return (
        <li key={props.id} className='h-[40px] bg-[#ccc] border-[1px] rounded-md my-2 flex flex-row items-center justify-around px-2'>
            <input className='mr-4' type="checkbox" checked={props.completed} onChange={(e) => {
                completeListItem(props.id)
            }} />
            {
                props.editable ? <input type="text" value={props.text}
                    onChange={(e) => {
                        editListItem(e, props)
                    }} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            switchEditListItem(props)
                        }
                    }} />
                    : <span className='text-[16px] text-[#333] flex-1'>{props.text}</span>
            }
            <span className='text-[16px] text-[#333] mr-4'>{props.completed ? '😆' : '😔'}</span>
            <button className='bg-[#ff6d9c] h-[20px] mr-4 text-[#ffffff] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => deleteListItem(props.id)}>删除</button>
            <button className='bg-[#fcfcfc] h-[20px] text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => switchEditListItem(props)}>修改</button>
        </li>
    )
}

export default function TodoListFunCom() {
    const [dataList, setDataList] = useState<ListItemI[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    // 添加事件项
    const addListItem = () => {
        if (inputValue) {
            const newListItem = [...dataList, { id: Date.now(), text: inputValue, completed: false, editable: false }]
            setDataList(newListItem)
            setInputValue('')
        }
    }
    // 删除事件项
    const deleteListItem = (id: number) => {
        const index = dataList.findIndex(item => item.id === id);
        const newList = [...dataList.slice(0, index), ...dataList.slice(index + 1)];
        setDataList(newList)
    }
    // 点击完成事件项
    const completeListItem = (id: number) => {
        setDataList(dataList.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
    }
    // 切换表单编辑状态
    const switchEditListItem = (item: ListItemI) => {
        const index = dataList.indexOf(item)
        const newList = dataList.map((ele, i) => {
            if (i === index) {
                return { ...ele, editable: !ele.editable }
            } else {
                return ele
            }
        })
        setDataList(newList)
    }
    // 修改事件项
    const editListItem = (e: React.ChangeEvent<HTMLInputElement>, item: ListItemI) => {
        setInputValue(e.target.value)
        const index = dataList.indexOf(item)
        const newList = dataList.map((ele, i) => {
            if (i === index) {
                return { ...ele, text: inputValue, editable: !ele.editable }
            } else {
                return ele
            }
        })
        setDataList(newList)
    }

    // 无数据的空状态
    const tempy = <div className='w-full h-[80px] bg-gray-200 flex justify-center items-center'>
        暂无数据
    </div>
    // 列表渲染
    const listDom = dataList.map((item, index) => {
        return <ListItemDom key={item.id} deleteListItem={deleteListItem} editListItem={editListItem} switchEditListItem={switchEditListItem} completeListItem={completeListItem} {...item}></ListItemDom>
    })
    return (
        <div className='mx-auto mt-[200px] w-[800px] px-4 py-4 flex flex-col gap-3'>
            <div className='flex flex-row w-full justify-between gap-5'>
                <input className='border flex-1' type="text" value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }} onKeyDown={
                    (e) => { if (e.key === 'Enter') { addListItem() } }
                } />
                <button className='bg-[#fcfcfc] h-[20px] text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => addListItem()}>添加</button>
            </div>
            <ul className='w-full'>
                {/* 条件渲染，如果list没有数据就显示暂无数据 */}
                {dataList.length > 0 ? listDom : tempy}
            </ul>
            <div className='text-[#333]'>
                <span>已完成/{dataList.filter(item => item.completed === true).length}</span>
                <span>未完成/{dataList.filter(item => item.completed === false).length}</span>
            </div>
        </div>
    )
}


import React, { useContext, useReducer } from 'react'

interface ListItemI {
    id: number;
    text: string;
    completed: boolean;
    editable: boolean;
}

interface InitValueI {
    dataList: ListItemI[] | null;
    inputValue: string;
}

function ListItemDom(props: ListItemI) {
    const context: any = useContext(globalContext)
    const { dispatch } = context
    return (
        <li key={props.id} className='h-[40px] bg-[#ccc] border-[1px] rounded-md my-2 flex flex-row items-center justify-around px-2'>
            <input className='mr-4' type="checkbox" checked={props.completed} onChange={(e) => {
                dispatch({
                    type: 'completeListItem',
                    id: props.id
                })
            }} />
            {
                props.editable ? <input type="text" value={props.text}
                    onChange={(e) => {
                        dispatch({
                            type: 'editListItem',
                            value: e.target.value,
                            id: props.id
                        })

                    }} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            dispatch({
                                type: 'switchEditListItem',
                                id: props.id
                            })
                        }
                    }} />
                    : <span className='text-[16px] text-[#333] flex-1'>{props.text}</span>
            }
            <span className='text-[16px] text-[#333] mr-4'>{props.completed ? '😆' : '😔'}</span>
            <button className='bg-[#fcfcfc] h-[20px] mr-4 text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => {
                dispatch({
                    type: 'switchEditListItem',
                    id: props.id
                })
            }}>{props.editable ? '确认修改' : '修改'}</button>
            <button className='bg-[#ff6d9c] h-[20px]  text-[#ffffff] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => {
                dispatch({
                    type: 'deleteListItem',
                    id: props.id
                })
            }}>删除</button>

        </li>
    )
}

// 定义一个全局的状态
const initralValue: InitValueI = {
    dataList: [],
    inputValue: '',
}
// 对状态进行处理
const reducer = (preState: InitValueI, action: any): InitValueI => {

    const newState = { ...preState }
    if (!newState.dataList) return newState
    let index = 0
    switch (action.type) {
        case 'addListItem':
            return {
                dataList: [...newState.dataList, { id: Date.now(), text: newState.inputValue, completed: false, editable: false }],
                inputValue: '',
            }
        case 'deleteListItem':
            index = newState.dataList.findIndex(item => item.id === action.id);
            return {
                dataList: [...newState.dataList.slice(0, index), ...newState.dataList.slice(index + 1)],
                inputValue: '',
            }
        case 'completeListItem':
            return {
                dataList: newState.dataList.map(item => item.id === action.id ? { ...item, completed: !item.completed } : item),
                inputValue: '',
            }
        case 'switchEditListItem':
            index = newState.dataList.findIndex(item => item.id === action.id);
            return {
                dataList: newState.dataList.map((ele, i) => {
                    if (i === index) {
                        return { ...ele, editable: !ele.editable }
                    } else {
                        return ele
                    }
                }),
                inputValue: '',
            }
        case 'editListItem':
            index = newState.dataList.findIndex(item => item.id === action.id);
            return {
                dataList: newState.dataList.map((ele, i) => {
                    if (i === index) {
                        return { ...ele, text: action.value, editable: true }
                    } else {
                        return ele
                    }
                }),
                inputValue: '',
            }
        case 'changeInputValue':
            return {
                dataList: newState.dataList,
                inputValue: action.value,
            }
        default:
            return newState
    }
}
// 创建一个Provider,用于分发state和dispatch
const globalContext = React.createContext({})

export default function TodoListFunCom() {
    // 使用useReducer将状态集中管理,reducer函数没人看不懂吧,有的话留言或者私信.
    const [state, dispatch] = useReducer<React.Reducer<InitValueI, any>>(reducer, initralValue);

    // 无数据的空状态
    const tempy = <div className='w-full h-[80px] bg-gray-200 flex justify-center items-center'>
        暂无数据
    </div>
    // 列表渲染
    const listDom = state.dataList!.map((item, index) => {
        return <ListItemDom key={item.id} id={item.id} text={item.text} editable={item.editable} completed={item.completed}></ListItemDom>
    })
    return (
        <div className='mx-auto mt-[200px] w-[800px] px-4 py-4 flex flex-col gap-3'>
            <globalContext.Provider value={
                {
                    state, dispatch
                }
            }>
                <div className='flex flex-row w-full justify-between gap-5'>
                    <input className='border flex-1' type="text" value={state.inputValue} onChange={(e) => {
                        dispatch({
                            type: 'changeInputValue',
                            value: e.target.value
                        })
                    }} onKeyDown={
                        (e) => {
                            if (e.key === 'Enter') {
                                dispatch({
                                    type: 'addListItem'
                                })
                            }
                        }
                    } />
                    <button className='bg-[#fcfcfc] h-[20px] text-[#666] border px-5 py-3 rounded-sm flex items-center justify-center' onClick={() => dispatch({
                        type: 'addListItem'
                    })}>添加</button>
                </div>
                <ul className='w-full'>
                    {state.dataList ? listDom : tempy}
                </ul>
                <div className='text-[#333]'>
                    <span>已完成/{state.dataList!.filter(item => item.completed === true).length}</span>
                    <span>未完成/{state.dataList!.filter(item => item.completed === false).length}</span>
                </div>
            </globalContext.Provider>

        </div >
    )
}


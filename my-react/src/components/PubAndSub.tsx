import React, { Component, createContext, useContext } from 'react'
// 创建一个上下文
const context = createContext({})

export default class PubAndSub extends Component {

    render() {
        return (
            <context.Provider value={{
                data: 'myData',
                list: [1, 2, 3, 4, 5, 6],
            }}>
                <ChildCom>
                    <div>
                        插槽！
                    </div>
                    <div>
                        插槽2！
                    </div>
                    <div>
                        插槽3！
                    </div>
                </ChildCom>
            </context.Provider>
        )
    }
}

function ChildCom({ children }: any) {
    // 获取上下文内容
    const otherData: any = useContext(context)
    return (
        <div className='flex flex-row'>
            <span>{otherData.data}</span>
            <ul>
                {
                    otherData.list.map((item: any, index: any) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            {children}
        </div>
    )
}


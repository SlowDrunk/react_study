import React, { useEffect, useState } from 'react'

export default function UseEffectTest() {
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        // 副作用操作
        console.log("useEffect");
        document.title = `点击了${count}次`;
        return () => {
            // 清除副作用操作
            console.log("useEffect清除");
        }
    }, [count])
    // 相当于生命周期销毁前
    useEffect(() => {
        return () => {
            console.log("函数被销毁了");
        }
    }, [])
    return (
        <div>
            <span>
                {count}
            </span>
            <button onClick={() => {
                setCount(count + 1)
            }}>add</button>
        </div>
    )
}



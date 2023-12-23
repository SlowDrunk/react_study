import React, { Component, useState } from 'react'

export default function FunctionComUseState() {
    const [state, setState] = useState({
        data: 'hello',
        id: 1
    });

    return (
        <div>
            <span>{state.id} {state.data}</span>
            <button onClick={() => {
                setState({
                    data:'',
                    id: state.id += 1
                })
            }}>点击加一</button>
        </div>
    )
}


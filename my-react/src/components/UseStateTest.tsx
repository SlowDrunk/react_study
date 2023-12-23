import React, { Component } from 'react'

interface StateI {
    count: number
}

export default class StateTest extends Component<{}, StateI> {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
        }
    }
    addStateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={() => this.addStateCount()}>点击加一</button>
            </div>
        )
    }
}

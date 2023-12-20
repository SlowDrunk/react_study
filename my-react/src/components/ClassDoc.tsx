import React, { Component } from 'react';

interface ClassDocState {
    data: string
    domArr: any[];
}

class ClassDoc extends Component<{}, ClassDocState> {

    private classDocRef: React.RefObject<ClassDoc> = React.createRef();

    constructor(props: any) {
        super(props);
        this.state = {
            data: 'ClassDoc',
            domArr: [{
                id: 1,
                name: 'Test1'
            }, {
                id: 2,
                name: 'Test2'
            }, {
                id: 3,
                name: 'Test3'
            }]
        };
        this.classDocRef = React.createRef();
    }
    testFnA() {
        const changeArr = [...this.state.domArr, { id: 4, name: 'Test4' }]
        this.setState({
            domArr: changeArr
        })
        console.log("This is ClassDoc FnA");
    }

    testFnB() {
        this.setState({
            data: 'LALALALA'
        })
        console.log("This is ClassDoc FnB");
    }
    // 组件挂载后执行该函数
    componentDidMount(): void {
        console.log("ClassDoc componentDidMount", this.classDocRef);
    }

    render() {
        return (
            <div>
                {this.state.data}
                <ul>
                    {
                        this.state.domArr.map(item => {
                            return <li key={item.id} onClick={() => { this.testFnA() }}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ClassDoc;

import React, { Component } from 'react'
import InputCom from './InputCom'

export default class TestLoginForm extends Component {
    state = {
        userName: '',
        password: ''
    }
    props: Readonly<any | null> = {};
    loginFn() {
        console.log('loginFn', this.props)
        console.log(`用户名${this.state.userName},密码${this.state.password}`)
        localStorage.setItem('userName', this.state.userName)
        localStorage.setItem('password', this.state.password)
        if (this.props.history) {
            this.props.history.push('/home')
        }
    }
    resetForm() {
        this.setState({
            userName: '',
            password: ''
        })
        localStorage.removeItem('userName')
        localStorage.removeItem('password')
    }
    render() {
        return (
            <div className='w-[400px] bg-red-300 rounded-xl flex flex-col justify-center px-8 py-10 mt-[200px] mx-auto'>
                <div className='w-full text-center mb-10 text-[20px] font-semibold'>登录表单</div>
                <div>
                    <InputCom label='用户名' type='text' placeholder='请输入用户名' value={this.state.userName} changeValue={(value: string) => {
                        this.setState({
                            userName: value
                        })
                    }}></InputCom>
                    <InputCom label='密码' type='password' placeholder='请输入密码' value={this.state.password} changeValue={(value: string) => {
                        this.setState({
                            password: value
                        })
                    }}></InputCom>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <button className='bg-[#1677ff] h-[20px] mr-4 text-[#ffffff]  px-5 py-3 rounded-xl flex items-center justify-center' onClick={() => this.loginFn()}>
                        登录
                    </button>
                    <button className='bg-[#1677ff] h-[20px] mr-4 text-[#ffffff]  px-5 py-3 rounded-xl flex items-center justify-center' onClick={() => this.resetForm()}>重置</button>
                </div>
            </div>
        )
    }
}

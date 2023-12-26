/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react'
// 引入对应的Reducer
import { setUsername, setPassword, resetUser } from '@/redux/reducers/UserReducer'
// 在类组件中使用这个方式将组件和方法连接起来
import { connect } from 'react-redux'
import InputCom from './InputCom'

class TestLoginForm extends Component {
    props: any
    state = {
        userName: '',
        password: ''
    }
    loginFn() {
        localStorage.setItem('username', this.props.username)
        localStorage.setItem('password', this.props.password)

    }
  render() {
      const { username, password } = this.props as any
      return (
          <div className='w-[400px] bg-red-300 rounded-xl flex flex-col justify-center px-8 py-10 mt-[200px] mx-auto'>
                <div className='w-full text-center mb-10 text-[20px] font-semibold'>登录表单</div>
                <div>
                    store数据：
                    <div>用户名：{username}</div>
                    <div>
                        密码：{password}
                    </div>
                </div>
                <div>
                    <InputCom label='用户名' type='text' placeholder='请输入用户名' value={username} changeValue={(value: string) => {
                        this.props.setUsername(value)
                    }}></InputCom>
                    <InputCom label='密码' type='password' placeholder='请输入密码' value={password} changeValue={(value: string) => {
                        this.props.setPassword(value)
                    }}></InputCom>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <button className='bg-[#1677ff] h-[20px] mr-4 text-[#ffffff]  px-5 py-3 rounded-xl flex items-center justify-center' onClick={() => this.loginFn()}>
                        登录
                    </button>
                    <button className='bg-[#1677ff] h-[20px] mr-4 text-[#ffffff]  px-5 py-3 rounded-xl flex items-center justify-center' onClick={() => this.props.resetUser()}>重置</button>
                </div>
            </div>
        )
    }
}
// mapStateToProps 将 Redux store 的状态映射到组件的属性
const mapStateToProps = (state: any) => {
    return {
        username: state.user.username,
        password: state.user.password,
    };
};

// mapDispatchToProps 将 dispatch 函数映射到组件的属性
const mapDispatchToProps = {
    setUsername,
    setPassword,
    resetUser
};
export default connect(mapStateToProps, mapDispatchToProps)(TestLoginForm);
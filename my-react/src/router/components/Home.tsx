import React from 'react'
import { Route, useHistory, withRouter } from 'react-router-dom'


function Page1(props: any) {
  console.log(props)
  return (
    <div>HomePagePage1</div>
  )
}

function Page2(props: any) {
  console.log('page2', props)
  return (
    <div>HomePagePage2</div>
  )
}
/**
 * 三种传参方式
 * params：携带在路径中，刷新后不会丢失数据
 * query:路径中不显示，刷新后丢失参数
 * state：存储在内存中，刷新后丢失数据
 */

function Home(props: any) {
  const history = props.history
  const curPath = window.location.pathname

  return (
    <div>
      <div className='text-[24px] font-semibold'>HomePage</div>
      <div className='flex flex-row justify-around w-full'>
        {/* 编程式导航 */}
        <span className='text-[16px] font-semibold' style={{ color: curPath && curPath.includes('page1') ? '#fff000' : '#000' }} onClick={() => history.push('/home/page1/12')}>页面一</span>
        <span className='text-[16px] font-semibold' style={{ color: curPath && curPath.includes('page2') ? '#fff000' : '#000' }} onClick={() => history.push({ pathname: `/home/page2`, query: { data: 13 } })}>页面二</span>
      </div>
      <Route path='/home/page1/:data' component={Page1} exact></Route>
      <Route path='/home/page2/' component={Page2} exact></Route>
    </div>
  )
}
// 注意：在V6版本中已经取消了该函数，请使用useParams useNavigate代替
export default withRouter(Home)

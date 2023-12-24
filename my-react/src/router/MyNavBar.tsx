import React from 'react'
import { NavLink } from 'react-router-dom'
const currentRouterPath = [
    {
        path: '/home',
        name: '首页',
    },
    {
        path: '/about',
        name: '关于',
    }
    // '/home/page1',
    // '/home/page1',
    // '/about/page1',
    // '/about/page1',
]
// 声明式导航
export default function MyNavBar() {
    return (
        <div className='flex flex-row items-center justify-around w-full mb-[40px]'>
            {
                currentRouterPath.map((item, index) => {
                    return <NavLink to={item.path} title={item.name} key={item.path} className='text-[18px] font-semibold' activeClassName='text-[red]'>{item.name}</NavLink>
                })
            }
        </div>
    )
}

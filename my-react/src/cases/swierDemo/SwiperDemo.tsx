import React, { Component, ReactPropTypes } from 'react'
import Swiper from 'swiper'
import 'swiper/css'
// 同步数据
// export default class SwiperDemo extends Component {
//     state = {
//         dataList: [
//             {
//                 id: '1',
//                 url: 'https://pic.maizuo.com/usr/movie/5c537234c5cf4569d6e557ad6ecdc781.jpg',
//                 name: 'swiper1',
//             },
//             {
//                 id: '2',
//                 url: 'https://pic.maizuo.com/usr/movie/df2ef31107176c729265490cfffaf859.jpg',
//                 name: 'swiper2',
//             },
//             {
//                 id: '3',
//                 url: 'https://pic.maizuo.com/usr/movie/7c6fc744ab6efc08696fd1a8db5ede3b.jpg',
//                 name: 'swiper3',
//             },
//             {
//                 id: '4',
//                 url: 'https://pic.maizuo.com/usr/movie/b5ef931e6d7f3419dbc2e196afaf1fc7.jpg',
//                 name: 'swiper4',
//             },
//             {
//                 id: '5',
//                 url: 'https://pic.maizuo.com/usr/movie/b1f1bbe99a744a02f34bf1ec902bfc1f.jpg',
//                 name: 'swiper5',
//             }
//         ],
//         MySwiper: null
//     }
//     // 组件挂载完成时初始化swiper
//     componentDidMount() {
//         const mySwiper = new Swiper('.swiper', {
//             loop: true,
//             autoplay: {
//                 delay: 2000,
//                 stopOnLastSlide: false,
//                 disableOnInteraction: false,
//             },
//         })
//         this.setState({ MySwiper: mySwiper })
//     }
//     render() {
//         const swiperList = this.state.dataList.map(item => {
//             return (
//                 <div className="swiper-slide w-full h-full" key={item.id}>
//                     <img className='w-full h-full' src={item.url} alt="图片加载失败" />
//                 </div>
//             )
//         })
//         return (
//             <div className='mx-auto mt-[200px] h-[600px] w-[1200px]'>
//                 <div className="swiper w-full h-full">
//                     <div className="swiper-wrapper">
//                         {swiperList}
//                     </div>
//                     {/* <div className="swiper-pagination"></div>
//                     <div className="swiper-button-prev"></div>
//                     <div className="swiper-button-next"></div>
//                     <div className="swiper-scrollbar"></div> */}
//                 </div>
//             </div>
//         )
//     }
// }
// 异步数据
// export default class SwiperDemo extends Component {
//     state = {
//         dataList: [],
//         MySwiper: null
//     }
//     // 组件挂载完成时初始化swiper
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 dataList: [
//                     {
//                         id: '1',
//                         url: 'https://pic.maizuo.com/usr/movie/5c537234c5cf4569d6e557ad6ecdc781.jpg',
//                         name: 'swiper1',
//                     },
//                     {
//                         id: '2',
//                         url: 'https://pic.maizuo.com/usr/movie/df2ef31107176c729265490cfffaf859.jpg',
//                         name: 'swiper2',
//                     },
//                     {
//                         id: '3',
//                         url: 'https://pic.maizuo.com/usr/movie/7c6fc744ab6efc08696fd1a8db5ede3b.jpg',
//                         name: 'swiper3',
//                     },
//                     {
//                         id: '4',
//                         url: 'https://pic.maizuo.com/usr/movie/b5ef931e6d7f3419dbc2e196afaf1fc7.jpg',
//                         name: 'swiper4',
//                     },
//                     {
//                         id: '5',
//                         url: 'https://pic.maizuo.com/usr/movie/b1f1bbe99a744a02f34bf1ec902bfc1f.jpg',
//                         name: 'swiper5',
//                     }
//                 ]
//             })

//         }, 1000)
//     }
//     // 需要等到dataList有值的时候初始化swiper实例
//     componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
//         new Swiper('.swiper', {
//             loop: true,
//             slidesPerView: 1,
//         })
//     }
//     render() {
//         const swiperList = this.state.dataList.length > 0 ? this.state.dataList.map((item: any) => {
//             return (
//                 <div className="swiper-slide w-full h-full" key={item.id}>
//                     <img className='w-full h-full' src={item.url} alt="图片加载失败" />
//                 </div>
//             )
//         }) : <div>无数据</div>
//         return (
//             <div className='mx-auto mt-[200px] h-[600px] w-[1200px]'>
//                 <div className="swiper w-full h-full">
//                     <div className="swiper-wrapper">
//                         {swiperList}
//                     </div>
//                     {/* <div className="swiper-pagination"></div>
//                     <div className="swiper-button-prev"></div>
//                     <div className="swiper-button-next"></div>
//                     <div className="swiper-scrollbar"></div> */}
//                 </div>
//             </div>
//         )
//     }
// }

class MySwiperItem extends Component {
    props: any
    render() {
        return (
            <div className="swiper-slide w-full h-full" >
                {this.props.children}
            </div>
        )
    }
}

class MySwiper extends Component {
    props: any
    componentDidUpdate() {
        new Swiper('.swiper', {
            loop: this.props.loop,
            slidesPerView: this.props.slidesPerView,
        })
    }
    render() {
        const { children } = this.props
        return (
            <div className="swiper w-full h-full">
                <div className="swiper-wrapper">
                    {children}
                </div>
            </div>
        )
    }
}

// 进行封装
export default class SwiperDemo extends Component {
    state = {
        dataList: [],
        MySwiper: null
    }
    // 组件挂载完成时初始化swiper
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                dataList: [
                    {
                        id: '1',
                        url: 'https://pic.maizuo.com/usr/movie/5c537234c5cf4569d6e557ad6ecdc781.jpg',
                        name: 'swiper1',
                    },
                    {
                        id: '2',
                        url: 'https://pic.maizuo.com/usr/movie/df2ef31107176c729265490cfffaf859.jpg',
                        name: 'swiper2',
                    },
                    {
                        id: '3',
                        url: 'https://pic.maizuo.com/usr/movie/7c6fc744ab6efc08696fd1a8db5ede3b.jpg',
                        name: 'swiper3',
                    },
                    {
                        id: '4',
                        url: 'https://pic.maizuo.com/usr/movie/b5ef931e6d7f3419dbc2e196afaf1fc7.jpg',
                        name: 'swiper4',
                    },
                    {
                        id: '5',
                        url: 'https://pic.maizuo.com/usr/movie/b1f1bbe99a744a02f34bf1ec902bfc1f.jpg',
                        name: 'swiper5',
                    }
                ]
            })

        }, 1000)
    }
    render() {
        const swiperList = this.state.dataList.length > 0 ? this.state.dataList.map((item: any) => {
            return (
                <MySwiperItem className="swiper-slide w-full h-full" key={item.id}>
                    <img className='w-full' src={item.url} alt="图片加载失败" />
                </MySwiperItem>
            )
        }) : <div>无数据</div>
        return (
            <div className='mx-auto mt-[200px] h-[600px] w-[1200px]'>
                <MySwiper loop={true} slidesPerView={1}>
                    {swiperList}
                </MySwiper>
            </div>
        )
    }
}
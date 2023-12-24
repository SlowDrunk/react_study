import { Route } from 'react-router-dom'


function Page1() {
    return (
        <div>AboutPagePage1</div>
    )
}

function Page2() {
    return (
        <div>AboutPagePage2</div>
    )
}


export default function About() {
    return (
        <div>
            <div className='text-[24px] font-semibold'>AboutPage</div>
            <Route path='/about/page1' component={Page1}></Route>
            <Route path='/about/page1' component={Page2}></Route>
        </div>
    )
}

// 函数式组件_无状态组件
export default function FunctionDoc () {
    // 函数式组件中方法
    const testFnA = ()=>{
        console.log('This is FunctionDoc testFnA')
    }
    return (
        <div>
            <h1 className="hover:text-[#cccccc] cursor-pointer" onClick={()=>testFnA()}>Function Doc</h1>
        </div>
    )
}
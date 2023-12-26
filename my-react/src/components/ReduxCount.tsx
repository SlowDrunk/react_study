import { incremented, decremented } from '@/redux/reducers/CountReducer'
import { useSelector, useDispatch } from 'react-redux'

export default function ReduxCount() {
    const dispatch = useDispatch()
    const storeValue = useSelector((state: any) => state.counter.value)
    return (
        <div className='flex flex-row items-center gap-3'>
            <button className='bg-[#1677ff] h-[40px] mr-4 text-[#ffffff]  px-5 py-3 rounded-xl flex items-center justify-center' onClick={() => dispatch(incremented())}>点击新增</button>
            <span>当前储存的数据:{storeValue}</span>
            <button className='bg-[#1677ff] h-[40px] mr-4 text-[#ffffff]  px-5 py-3 rounded-xl flex items-center justify-center' onClick={() => dispatch(decremented())}>点击减少</button>
        </div>
    )
}

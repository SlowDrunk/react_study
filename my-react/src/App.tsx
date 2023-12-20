
import ClassDoc from "@/components/ClassDoc.tsx";
import FunctionDoc from "@/components/FunctionDoc.tsx";


function App() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <h1 className="text-[18px] text-[#ff000]">这是类式组件</h1>
        <ClassDoc />
        <h1 className="text-[18px] text-[#ff000]">这是函数式组件</h1>
        <FunctionDoc />
      </div>
    </div>
  );
}

export default App;

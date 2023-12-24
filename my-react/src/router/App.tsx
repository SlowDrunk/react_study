import MyRouter from "./MyRouter";
import MyNavBar from "./MyNavBar";
function App() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col items-center w-[400px] h-[600px] bg-gray-200 rounded-xl mx-auto mt-4 p-[12px]">
                {/* <MyNavBar></MyNavBar> */}
                <MyRouter></MyRouter>
            </div>
        </div>
    );
}

export default App;

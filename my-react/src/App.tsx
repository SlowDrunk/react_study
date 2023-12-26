
// import BindEvent from "@/components/BindEvent";
// import ListRender from "@/components/ListRender";
// import TodoList from "@/cases/todoList/TodoList";
// import Tabs from "@/cases/Tabs/Tabs";
// import TodoListControled from "@/cases/todoList/TodoListControled.tsx";
// import FtoC from "./components/FtoC";
import TestLoginForm from "./components/TestLoginForm";
// import PubAndSub from "./components/PubAndSub";
// import LifeCircel from "./components/LifeCircel";
// import SwiperDemo from "@/cases/swierDemo/SwiperDemo";
// import FunctionComUseState from "./components/FunctionComUseState";
// import UseEffectTest from "@/components/UseEffectTest"
// import TodoListReducer from '@/cases/todoList/TodoListReducer'
import ReduxCount from '@/components/ReduxCount'
import { Provider } from 'react-redux'
import store from './redux';

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Provider store={store}>
          <ReduxCount></ReduxCount>
          <TestLoginForm></TestLoginForm>
        </Provider>
      </div>
    </div>
  );
}

export default App;

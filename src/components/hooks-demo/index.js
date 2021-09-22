import { Route, Link, Switch ,Redirect} from "react-router-dom"
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import Example7 from './Example7'
import Tips from './tips'
import DragList from './dragList'
// 验证案例
import Example  from "./example/index"

export default function Hooks() {
    return (
        <div>
            <ul className="left-slider">
                <li><Link to="/hooks/example1">useState</Link></li>
                <li><Link to="/hooks/example2">useEffect</Link></li>
                <li><Link to="/hooks/example3">createContext/useContext</Link></li>
                <li><Link to="/hooks/example4">useReducer</Link></li>
                <li><Link to="/hooks/example5">useMemo</Link></li>
                <li><Link to="/hooks/example6">useRef</Link></li>
                <li><Link to="/hooks/example7">自定义</Link></li>
                <li><Link to="/hooks/tips">Tips</Link></li>
                <li><Link to="/hooks/dragList">拖拽列表</Link></li>
                <li><Link to="/hooks/example">疑惑解</Link></li>
            </ul>
            <div className="right-content">
                <h3 className="right-title">HOOKS体验</h3>
                <div className="right-content-details">
                    <Switch>
                        <Route path="/hooks/example1" component={Example1}></Route>
                        <Route path="/hooks/example2" component={Example2}></Route>
                        <Route path="/hooks/example3" component={Example3}></Route>
                        <Route path="/hooks/example4" component={Example4}></Route>
                        <Route path="/hooks/example5" component={Example5}></Route>
                        <Route path="/hooks/example6" component={Example6}></Route>
                        <Route path="/hooks/example7" component={Example7}></Route>
                        <Route path="/hooks/tips" component={Tips}></Route>
                        <Route path="/hooks/dragList" component={DragList}></Route>
                        <Route path="/hooks/example" component={Example}></Route>
                        <Redirect to = "/hooks/dragList"/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
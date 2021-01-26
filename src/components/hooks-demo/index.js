import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
import Example6 from './Example6'
import Example7 from './Example7'


export default function Hooks() {
    return (
        <Router>
            <div>
                <ul className="left-slider">
                    <li><Link to = "/example1">useState</Link></li>
                    <li><Link to = "/example2">useEffect</Link></li>
                    <li><Link to = "/example3">createContext/useContext</Link></li>
                    <li><Link to = "/example4">useReducer</Link></li>
                    <li><Link to = "/example5">useMemo</Link></li>
                    <li><Link to = "/example6">useRef</Link></li>
                    <li><Link to = "/example7">自定义</Link></li>
                </ul>
                <div className="right-content">
                    <h3 className="right-title">HOOKS体验</h3>
                    <div className="right-content-details">
                        <Route path="/example1" component={Example1}></Route>
                        <Route path="/example2" component={Example2}></Route>
                        <Route path="/example3" component={Example3}></Route>
                        <Route path="/example4" component={Example4}></Route>
                        <Route path="/example5" component={Example5}></Route>
                        <Route path="/example6" component={Example6}></Route>
                        <Route path="/example7" component={Example7}></Route>
                    </div>
                </div>
            </div>
        </Router>
    )
}
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import Hooks from './components/hooks-demo/index'
import AppRoute from './components/router-demo/index'
import ContextTest from './components/communication/context'

function App() {
  return (
    <Router>
      <div >
        <div className="nav">
          <ul>
            <li>
              <Link to = "/">HOOKS</Link>
            </li>
            <li>
              <Link to = "/appRoute">Router</Link>
            </li>
            <li>
              <Link to = "/context">上下文</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route path="/" exact component={Hooks}></Route>
          <Route path="/appRoute/" component={AppRoute}></Route>
          <Route path="/context" component={ContextTest}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

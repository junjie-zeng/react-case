import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import Hooks from './components/hooks-demo/index'
import AppRoute from './components/router-demo/index'

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
          </ul>
        </div>
        <div className="content">
          <Route path="/" exact component={Hooks}></Route>
          <Route path="/appRoute/" component={AppRoute}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

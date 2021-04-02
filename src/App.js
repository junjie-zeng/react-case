import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import Hooks from './components/hooks-demo/index'
import AppRoute from './components/router-demo/index'
import ContextTest from './components/communication/context'
import Hoc from './components/communication/hoc'
import Editor from './components/editor/index'
import RenderProp from './components/render-props/index'

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
              <Link to = "/render_props">Render Props</Link>
            </li>
            <li>
              <Link to = "/appRoute">Router</Link>
            </li>
            <li>
              <Link to = "/context">上下文</Link>
            </li>
            <li>
              <Link to = "/hoc">Hoc</Link>
            </li>
            <li>
              <Link to = "/editor">编辑器案例</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route path="/" exact component={Hooks}></Route>
          <Route path="/appRoute/" component={AppRoute}></Route>
          <Route path="/context" component={ContextTest}></Route>
          <Route path="/hoc" component={Hoc}></Route>
          <Route path="/editor" component={Editor}></Route>
          <Route path="/render_props" component={RenderProp}></Route>

        </div>
      </div>
    </Router>
  );
}

export default App;

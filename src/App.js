import { BrowserRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AllLink from './components/allLink'
import Hooks from './components/hooks-demo/index'
import AppRoute from './components/router-demo/index'
import ContextTest from './components/communication/context'
import Hoc from './components/communication/hoc'
import Editor from './components/editor/index'
import RenderProp from './components/render-props/index'
import AntdTest from './components/antd/index'
import MobxDemo from './components/mobx-demo'
import TodoList from './components/todoList'
import Basics from './components/basics'
import RcForm from './components/rcForm'
import AntdMobile from './components/antdMobile'
import KeepAlive from "./components/keepAlive/index";



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
    <div >
      <div className="content">
        <Switch>
          <Route path="/allLink" component={AllLink}></Route>
          <Route path="/hooks" component={Hooks}></Route>
          <Route path="/appRoute" component={AppRoute}></Route>
          <Route path="/context" component={ContextTest}></Route>
          <Route path="/hoc" component={Hoc}></Route>
          <Route path="/editor" component={Editor}></Route>
          <Route path="/render_props" component={RenderProp}></Route>
          <Route path="/antd" component={AntdTest}></Route>
          <Route path="/antd_mobile" component={AntdMobile}></Route>
          <Route path="/mobx" component={MobxDemo}></Route>
          <Route path="/basics" component={Basics}></Route>
          <Route path="/RcForm" component={RcForm}></Route>
          {/* <Route path="/todolist" component={TodoList}></Route> */}
          <Route path="/todolist" render={(props) => (<TodoList {...props} />)}></Route>
          <Route path="/keepAlive" component={KeepAlive}></Route>
          
          <Redirect to="/allLink" />
        </Switch>
      </div>
    </div>

  );
}

export default App;

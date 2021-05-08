import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Provider } from 'mobx-react'

// import store from './store/index'

import Hooks from './components/hooks-demo/index'
import AppRoute from './components/router-demo/index'
import ContextTest from './components/communication/context'
import Hoc from './components/communication/hoc'
import Editor from './components/editor/index'
import RenderProp from './components/render-props/index'
import AntdTest from './components/antd/index'
import MobxDemo from './components/mobx-demo/Index'
import TodoList from './components/todoList'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const test = ['a',{b:'b'}]

function App() {
  return (
    // <Provider store = {store}>
      <Router>
        <div >

          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['9']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">HOOKS</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/render_props">Render Props</Link></Menu.Item>
              <Menu.Item key="3"> <Link to="/appRoute">Router</Link></Menu.Item>
              <Menu.Item key="4"> <Link to="/context">上下文</Link></Menu.Item>
              <Menu.Item key="5"> <Link to="/hoc">Hoc</Link></Menu.Item>
              <Menu.Item key="6"> <Link to="/editor">编辑器案例</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/antd">Antd</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/mobx">MobxDemo</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/todolist">TodoList</Link></Menu.Item>
              
            </Menu>
          </Header>

          <div className="content">
            <Route path="/" exact component={Hooks}></Route>
            <Route path="/appRoute/" component={AppRoute}></Route>
            <Route path="/context" component={ContextTest}></Route>
            <Route path="/hoc" component={Hoc}></Route>
            <Route path="/editor" component={Editor}></Route>
            <Route path="/render_props" component={RenderProp}></Route>
            <Route path="/antd" component={AntdTest}></Route>
            <Route path="/mobx" component={MobxDemo}></Route>
            {/* <Route {...test} path="/todolist" component={TodoList}></Route> */}
            <Route {...test}  path="/todolist" render={(props)=>(<TodoList {...props}/>)}></Route>
            
          </div>
        </div>
      </Router>
    // </Provider>
  );
}

export default App;

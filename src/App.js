import { BrowserRouter, HashRouter, Route, Link, Switch,Redirect } from "react-router-dom"


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
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
    <BrowserRouter>
      <div >
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['3']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/hooks">HOOKS</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/render_props">Render Props</Link></Menu.Item>
            <Menu.Item key="3"> <Link to="/appRoute">Router</Link></Menu.Item>
            <Menu.Item key="4"> <Link to="/context">上下文</Link></Menu.Item>
            <Menu.Item key="5"> <Link to="/hoc">Hoc</Link></Menu.Item>
            <Menu.Item key="6"> <Link to="/editor">编辑器案例</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/antd">Antd</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/mobx?id=8">MobxDemo</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/todolist">TodoList</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/basics">基础知识</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/rcform">RcForm</Link></Menu.Item>

            
          </Menu>
        </Header>

        <div className="content">
          <Switch>
            <Route path="/hooks" exact component={Hooks}></Route>
            <Route path="/appRoute" component={AppRoute}></Route>
            <Route path="/context" component={ContextTest}></Route>
            <Route path="/hoc" component={Hoc}></Route>
            <Route path="/editor" component={Editor}></Route>
            <Route path="/render_props" component={RenderProp}></Route>
            <Route path="/antd" component={AntdTest}></Route>
            <Route path="/mobx" component={MobxDemo}></Route>
            <Route path="/basics" component={Basics}></Route>
            <Route path="/RcForm" component={RcForm}></Route>
            {/* <Route path="/todolist" component={TodoList}></Route> */}
            <Route path="/todolist" render={(props) => (<TodoList {...props} />)}></Route>

            <Redirect to="/appRoute"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

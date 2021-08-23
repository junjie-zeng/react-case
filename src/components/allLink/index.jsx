import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from "react-router-dom"

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Index = () => {
    return (
        <>
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['12']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/hooks">HOOKS</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/render_props">Render Props</Link></Menu.Item>
                    <Menu.Item key="3"> <Link to="/appRoute">Router</Link></Menu.Item>
                    <Menu.Item key="4"> <Link to="/context">上下文</Link></Menu.Item>
                    <Menu.Item key="5"> <Link to="/hoc">Hoc</Link></Menu.Item>
                    <Menu.Item key="6"> <Link to="/editor">编辑器案例</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/antd">Antd</Link></Menu.Item>
                    <Menu.Item key="7.1"><Link to="/antd_mobile">Antd-mobile</Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/mobx?id=8">MobxDemo</Link></Menu.Item>
                    <Menu.Item key="9"><Link to="/todolist">TodoList</Link></Menu.Item>
                    <Menu.Item key="10"><Link to="/basics">基础知识</Link></Menu.Item>
                    <Menu.Item key="11"><Link to="/rcform">RcForm</Link></Menu.Item>
                    <Menu.Item key="12"><Link to="/keepAlive">keep-alive</Link></Menu.Item>
                </Menu>
            </Header>
        </>
    )
}


export default Index
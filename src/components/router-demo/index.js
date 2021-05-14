import { Redirect, Switch, Route, Link } from 'react-router-dom'

import Home from './home'
import Abort from './abort'

/*
    路由
*/

export default function AppRouter() {
    return (
        <div>
            <ul className="left-slider">
                <li><Link to="/appRoute/home">Home</Link></li>
                <li><Link to="/appRoute/abort">Abort</Link></li>
            </ul>
            <div className="right-content">
                <h3 className="right-title">路由体验</h3>
                <div className="right-content-details">
                    <Switch>
                        <Route path="/appRoute/home" component={Home}></Route>
                        <Route path="/appRoute/abort" component={Abort}></Route>

                        <Redirect to="/appRoute/home" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
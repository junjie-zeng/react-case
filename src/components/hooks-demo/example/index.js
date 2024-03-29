

import React, { useMemo } from 'react'
import { Route, Link, Switch, Redirect } from "react-router-dom"

import UseMemoTest from './useMemoTest'
import UseCallbackTest from './useCallbackTest'
import ComRenderTest from './comRenderTest'


const Index = () => {
    return (
        <>
            <div className='example_wrap'>
                <Link to="/hooks/example/d1">useMome测试</Link>
                <Link to="/hooks/example/d2">useCallback测试</Link>
                <Link to="/hooks/example/d3">嵌套组件测试</Link>

            </div>

            <hr />
            <Switch>
                <Route path="/hooks/example/d1" component={UseMemoTest}></Route>
                <Route path="/hooks/example/d2" component={UseCallbackTest}></Route>
                <Route path="/hooks/example/d3" component={ComRenderTest}></Route>
                <Redirect to="/hooks/example/d3" component={UseCallbackTest} />
            </Switch>

        </>
    )
}

export default Index
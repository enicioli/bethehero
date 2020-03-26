import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import IncidentList from './pages/IncidentList'
import IncidentForm from './pages/IncidentForm'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/incident" exact component={IncidentList}/>
                <Route path="/incident/form" exact component={IncidentForm}/>
            </Switch>
        </BrowserRouter>
    )
}

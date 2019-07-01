import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import PrivateRoute from './privateRoute' 
import Dashboard from './components/dashboard'
import Users from './components/Users'
import ImportCsv from './components/importCsv'
import importCsv from './components/importCsv';
 const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Login} />
            <PrivateRoute path='/dashboard' component = {Dashboard} />
            <PrivateRoute path='/users' component = {Users} />
            <PrivateRoute path='/imporcsv' component = {importCsv} />
        </Switch>
    )
}

export default Routes
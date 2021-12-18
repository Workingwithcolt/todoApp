import React from 'react';

import './App.css'

import Header from '../src/component/header/Header.component'

import {Route,Switch} from 'react-router-dom';

import Contact from '../src/component/Contact/Contact.component'

import Login from '../src/component/Login/login.coponent'

import HomePage from '../src/component/homepage/homepage.component'



class App extends React.Component{
constructor(){
  super()
}
  render(){
    return(
      <div>
        <Header/>
        <Switch>
        <Route exact path= '/' component = {HomePage}/>  
        <Route exact path="/login" component= {Login}/>
        <Route exact path ='/Contact' component ={Contact}/>
        </Switch>
      </div>
    )
}
}
export default App
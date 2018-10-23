import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Navbar from './components/Navbar';
import {projects as Projects}  from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import NavbarVideo from './components/NavbarVideo';
import Video from './components/Video';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
          <Route path='/video' component={NavbarVideo}/>
          <Route path='/' component={Navbar}/>
        </Switch>


        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route path='/video' component={Video}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route path='/' component={ErrorPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Homepage from './Pages/homepage.component';
import './App.css';

function Home() {
  return <h1>HOME</h1>
}

function About() {
  return <h1>ABOUT</h1>
}

function Topics() {
  return <h1>TOPICS</h1>
}

function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/topics'>Topics</Link>
      <Switch>
        <Route exact path='/'><Homepage/></Route>
        <Route exact path='/about'><About/></Route>
        <Route exact path='/topics'><Topics/></Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import { Router } from '@reach/router';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/articles/topic/:slug" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

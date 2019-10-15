import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import Article from './components/Article';
import ErrorHandler from './components/ErrorHandler';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main className="main">
          <Router primary={false}>
            <ArticleList path="/" />
            <ArticleList path="/articles/topic/:slug" />
            <Article path="/articles/:article_id" />
            <ErrorHandler default />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import Article from './components/Article';
import ErrorHandler from './components/ErrorHandler';
import Users from './components/Users';
import NavMenu from './components/NavMenu';

class App extends React.Component {
  state = {
    user: localStorage.getItem('user') || 'guest'
  };
  render() {
    return (
      <div className="App">
        <header className="TestHeader">
          <Header />
          <Users changeUser={this.changeUser} user={this.state.user} />
        </header>
        <main className="main">
          <NavMenu />
          <Router primary={false}>
            <ArticleList path="/" />
            <ArticleList path="/articles/topic/:slug" />
            <Article path="/articles/:article_id" user={this.state.user} />
            <ErrorHandler default />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }

  changeUser = user => {
    this.setState({ user });
    localStorage.setItem('user', user);
  };
}

export default App;

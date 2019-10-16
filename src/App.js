import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import Article from './components/Article';
import ErrorHandler from './components/ErrorHandler';
import Users from './components/Users';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  };
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Users changeUser={this.changeUser} user={this.state.user} />
        <main className="main">
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
  };
}

export default App;

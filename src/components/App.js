import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      }
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          My feed
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </div>
    );
  }
}

export default App;

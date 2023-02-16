import React, { Component } from 'react';
import giphy from 'giphy-api'
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedgifListId: "P2hdI6VaKlFhxncQG9"
    }

    this.search("puppy");
  }

  search = (query) => {
    giphy('mWN7pi9B7uusxW7IX6pYnp5jjAephEpY').search({
      q: query,
      rating: 'g',
      limit: 30
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedgifListId} />
        </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
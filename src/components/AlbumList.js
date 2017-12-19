import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// props is for parent to child communication
// state is for internal class management

export default class AlbumList extends Component {
    state = { albums: [] };

    // this would run the component is loaded.
    componentWillMount() {
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbum() {
      return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
      );
    }

    render() {
      return (
        <ScrollView>
          {this.renderAlbum()}
        </ScrollView>
      );
    }
}

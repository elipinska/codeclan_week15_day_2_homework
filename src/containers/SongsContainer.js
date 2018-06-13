import React, {Component} from 'react'
import SongTable from '../components/SongTable'

class SongsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
    .then(res => res.json())
    .then(songsData => this.setState({songs: songsData.feed.entry}))
    .catch(error => console.log('Error', error))
  }

  render() {

    return (

      <div>
        <h2>UK top 20 songs</h2>
        <SongTable songsData = {this.state.songs}/>
      </div>
    )
  }

}


export default SongsContainer;

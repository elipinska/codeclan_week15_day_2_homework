import React from 'react'
import SongRow from './SongRow'

const SongTable = (props) => {

  if (!props.songsData) return null

    const songs = props.songsData.map((song, index) => {
      return (
        <SongRow key={index} index={index} title={song['im:name']['label']} artist={song['im:artist']['label']}/> 
      )
    })

    return (
      <table>
        <thead>
          <th></th>
          <th>Title</th>
          <th>Artist</th>
        </thead>
        <tbody>
          {songs}
        </tbody>

      </table>
    )

}

export default SongTable;

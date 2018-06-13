import React from 'react'

const SongTable = (props) => {

  if (!props.songsData) return null

    const songs = props.songsData.map((song, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{song['im:name']['label']}</td>
          <td>{song['im:artist']['label']}</td>
        </tr>
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

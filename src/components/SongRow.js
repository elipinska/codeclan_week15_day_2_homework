import React from 'react'

const SongRow = (props) => {

  return (
    <tr>
      <td><img src={props.image}/></td>
      <td>{props.index + 1}</td>
      <td>{props.title}</td>
      <td>{props.artist}</td>
    </tr>
  )

}

export default SongRow;

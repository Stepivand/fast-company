import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  onDelete,
  qualities,
  bookmark,
  onToggleBookMark1,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Qualitie key={item._id} {...item} />
        ))}
      </td>

      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark
          bookmark={bookmark}
          _id={_id}
          onToggleBookMark2={onToggleBookMark1}
        />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  )
}

export default User

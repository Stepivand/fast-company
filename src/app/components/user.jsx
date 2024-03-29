import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'
import PropTypes from 'prop-types'

const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  onDelete,
  qualities,
  bookmark,
  onToggleBookMark
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie key={qual._id} {...qual} />
        ))}
      </td>

      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className='btn btn-danger'>
          delete
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  qualities: PropTypes.array.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onToggleBookMark: PropTypes.func.isRequired
}

export default User

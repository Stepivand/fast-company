import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return 'человек тусанет'
    if ([2, 3, 4].indexOf(number) >= 0) return 'человека тусанут'
    return 'человек тусанет'
  }

  return (
    <>
      <h1>
        <span
          className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}
        >
          {users.length > 0
            ? `${
                users.length + ' ' + renderPhrase(users.length)
              } с тобой сегодня`
            : 'Никто с тобой не тусанет'}
        </span>
      </h1>

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      className={'badge m-2 bg-' + item.color}
                      key={item._id}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Users

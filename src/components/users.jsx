import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import api from '../api' 

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
 
  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(user => user !== userId))
  }

  const getQquality = (user) => {
    let color = "badge bg-"
    return user.qualities.map((quality) => (
      <span className = {color + quality.color}>{quality.name}</span>
    ))
  }

  const renderPhrase = () => {
    return (
      users.length !== 0 && 
      users.map((user) => (

        <tr>
          <th>{ user.name }</th>
          <th>{getQquality(user)}</th>
          <th>{ user.profession.name }</th>
          <th>{ user.completedMeetings }</th>
          <th>{ user.rate }</th>
          <th>
            <button 
              className = "btn btn-danger btn-sm m-2"
              onClick = {() => handleDelete(user)}
            >
              delete
            </button>
          </th>
        </tr>   
      ))
    )        
  }

  if(users.length !== 0) {
    return (
      <>
        <h2>
          <span className = "badge bg-primary">{users.length} тусуются с тобой сегодня</span>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Професссия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderPhrase()}</tbody>
        </table>
      </>
    )
  }

  return (   
     <>
        <h2>
          <span className = "badge bg-danger">Никто с тобой не тусанет</span>
        </h2>
    </>
  )

}

export default Users
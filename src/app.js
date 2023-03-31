import React, { useState } from 'react'
import Users from './components/users'
import api from './api'
import SearchStatus from './components/searchStatus'

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (id) => {
    console.log(id)
    const newUsers = newUsers.map((item) =>
      item._id === id
        ? {
            ...item,
            bookmark: !item.bookmark,
          }
        : item
    )
    setUsers(newUsers)
  }

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </div>
  )
}

export default App

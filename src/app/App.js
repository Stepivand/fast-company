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
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id
          ? {
              ...user,
              bookmark: !user.bookmark
            }
          : user
      )
    )
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

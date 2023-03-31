import React from 'react'

const BookMark = ({ status, ...rest }) => {
  const getClasses = () => {
    let classes = 'bi bi-dice-1'
    return (classes += status ? '-fill' : '')
  }

  return <i className={getClasses()} {...rest}></i>
}

export default BookMark

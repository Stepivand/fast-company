import React from 'react'

const BookMark = (props) => {
  const handleClick = () => {
    props.onToggleBookMark2(props._id)
    console.log(props._id)
  }

  // Создание стиля
  const getClasses = () => {
    let classes = 'bi bi-dice-1'
    return (classes += props.bookmark ? '-fill' : '')
  }

  return <i className={getClasses()} onClick={handleClick}></i>
}

export default BookMark

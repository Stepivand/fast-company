import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  const getClasses = () => {
    let classes = 'bi bi-dice-1'
    return (classes += status ? '-fill' : '')
  }

  return <i className={getClasses()} {...rest}></i>
}

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
}

export default BookMark

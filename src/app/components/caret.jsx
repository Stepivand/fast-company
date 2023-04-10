import React from 'react'
import PropTypes from 'prop-types'

const Caret = ({ selectedSort }) => {
  const getClasses = () => {
    return 'bi-dice-1'
  }
  return <i className={'bi' + getClasses} onClick={() => getClasses()}></i>
}

Caret.propTypes = {
  // onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
  // columns: PropTypes.object.isRequired
}

export default Caret

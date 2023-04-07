import React from 'react'
import PropTypes from 'prop-types'

const Qualitie = ({ color, _id, name }) => {
  return (
    <span className={'badge m-2 bg-' + color} key={_id}>
      {name}
    </span>
  )
}

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Qualitie

import React from 'react'
import PropsTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({ columns, selectedSort, onSort, data, children }) => {
  return (
    <table className='table'>
      {children || (
        <>
          <TableHeader {...{ columns, selectedSort, onSort }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  )
}

Table.propTypes = {
  columns: PropsTypes.object,
  selectedSort: PropsTypes.object,
  onSort: PropsTypes.func,
  data: PropsTypes.array,
  children: PropsTypes.array
}

export default Table

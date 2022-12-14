
import React from 'react'
import '../index.css'

const Pagination = ({ usersPerPage, totalUsers, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
      {pageNumbers.map(number =>(
        <li key={number} className = 'item'>
          <a onClick ={() => paginate(number)} href='!#' className='link'>
            {number}
          </a>
        </li> 
      ))}
      </ul>
    </nav>
  )
}

export default Pagination
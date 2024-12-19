"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {

    const handleSearch = () =>{
        e.preventDefault();
    }

  return (
    <form className='flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
        <input type='text' placeholder='Search' className='flex-1 bg-transparent outline-none'/>
        <button className='cursor-pointer'>
            <FontAwesomeIcon icon={faMagnifyingGlass} width={16} height={16}/>
        </button>
    </form>
  )
}

export default SearchBar
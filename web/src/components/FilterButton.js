import React from 'react'

const FilterButton = ({ label, index }) => {
  const fillStyle = index < 2 ? 'bg-primary text-white' : 'text-primary'

  return (
    <button
      className={`${fillStyle} w-24 h-7 border border-primary text-sm font-barlow font-normal`}
    >
      {label}
    </button>
  )
}

export default FilterButton

import React from 'react'

const listbox = (categorizedData) => {
    console.log(categorizedData,'CategorizedData')
  return (
    
    <div className='listbox'>
        {Object.keys(categorizedData).map(category => (
        <div key={category} className='listbox'>
          <div className='title'>{category}</div>
           
          <ul className='unorderlist'>
            {categorizedData[category].map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          </div>
      ))}
      
      </div>
  )
}

export default listbox
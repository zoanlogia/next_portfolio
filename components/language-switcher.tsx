import React from 'react'

const LanguageSwitcher = () => {
  return (
    <div>
      <select className='fixed bottom-5 left-5 bg-white p-2 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-lg flex items-center justify-center shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'>
        <option value='fr'>French</option>
        <option value='en'>English</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
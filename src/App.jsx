import React from 'react'
import Radio from './compnents/Radio'

const App = () => {
  return (
    <div className='grid p-10'>
      <form>
      <label for="price" class="block text-sm/6 font-medium text-gray-900">Name</label>
      <input type="text" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder="Enter Name"></input>
        <h2>How satisfied are you with our products?</h2>
        <Radio/>
        <h2>How satisfied are you with our products?</h2>
        <h2>How satisfied are you with our products?</h2>
        <h2>How satisfied are you with our products?</h2>
      </form>
    </div>
  )
}

export default App
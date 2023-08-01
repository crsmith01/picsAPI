import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('') // initial value of term is an empty string
  
  const handleFormSubmit = (event) => {
    event.preventDefault()

    onSubmit(term)
    // // NEVER DO THIS - not good with React - React handles form elements differently
    // onSubmit(event.target.querySelector('input').value)  
  } 

  const handleChange = (event) => {
    setTerm(event.target.value.trim())
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input onChange={handleChange} value={term}/>
      </form>
    </div>
    )
  }
  
  export default SearchBar;
  
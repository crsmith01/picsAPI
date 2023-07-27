import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = (term) => {
    console.log('do a search with', term)
  }
  
  return (
    <SearchBar onSubmit={handleSubmit}/>
  )
}

export default App;

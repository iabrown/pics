import React from 'react';



const SearchBar = (props) => {

//State objects below
  const [imageSearch, setImageSearch] = React.useState(localStorage.getItem('imageSearch') || 'Look for an image to search...');


//Handler Callbacks below
  const handleSearch = (event) => {
    setImageSearch(event.target.value);
    localStorage.setItem('imageSearch', event.target.value);
  }





return (

  <div className="ui segment">

    <form className="ui form" onSubmit={props.onSubmit}>
      <div className="field">
        <label>Image Search</label>
        <input type="text" value={imageSearch} onChange={handleSearch}></input>
      </div>
    </form>

  </div>

);
}

export default SearchBar;

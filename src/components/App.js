import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


const App = () => {
  const [images:[], setImages] = React.useState(localStorage.getItem('images') || []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //Use the Axios API to 1- GET data information from the website using the parameter, header, and authorization and 2- handle the data that is returned from step 1 as a response.
    unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: localStorage.getItem('imageSearch')
      },

    }).then((response) => {
      /*console.log(response.data.results);*/
      setImages(response.data.results);
    })
  }

  return (
    <div className="ui container" style={{marginTop: `10px`}}>
      <SearchBar onSubmit={handleFormSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}


export default App;

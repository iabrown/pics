import React from 'react';
import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos' ,
  headers: {
    Authorization: 'Client-ID -Kkk8dli3ZNnZJsUxPAxkZaqLDPRSdiU7nwQUVEtZIA'
  }
});

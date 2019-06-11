import React from 'react';
import axios from 'axios';
import Search from './Search';

export default ({setSearchResults})=>{
  const [searchBar, setSearchBar] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchBar}&api_key=qHp5L0E0MfwK4yQwDbP21kZN3SnJrmQx`)
      .then(data=>{console.log(data);
        setSearchResults([...data.data.data])
    })
  }
  return <Search setSearchBar={setSearchBar} handleSubmit={handleSubmit} />
}
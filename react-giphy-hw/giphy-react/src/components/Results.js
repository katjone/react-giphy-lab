import React from 'react';

export default ({searchResults}) =>
  <>
    {searchResults.map((gif,key)=>
      <img key={key} src={gif.images.fixed_height_small.url} alt-text={gif.title} />
    )}
  </>
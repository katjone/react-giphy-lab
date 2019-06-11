import React from 'react';

export default ({setSearchBar, handleSubmit}) =>
  <form className="searchbar" onSubmit={handleSubmit}>
    <label>kind of gif?
      <input type="text" onChange={e => setSearchBar(e.target.value)} />
    </label>
    <button type="submit">go !</button>
  </form>


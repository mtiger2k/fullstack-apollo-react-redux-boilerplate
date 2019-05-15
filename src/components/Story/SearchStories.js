import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { doFetchStories } from '../../actions/story';
import Button from './Button';

const SearchStories = () => {
  
  const [query, setQuery] = useState('redux');

  const dispatch = useDispatch()
  const onFetchStories = useCallback(
    (query) => dispatch(doFetchStories(query)),
    [dispatch]
  )

  const onSubmit = (event) => {
    if (query) {
      onFetchStories(query)

      setQuery('');
    }
    event.preventDefault();
  }

  const onChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={onChange}
      />
      <Button type="submit">
        Search
      </Button>
    </form>
  );

}

export default SearchStories
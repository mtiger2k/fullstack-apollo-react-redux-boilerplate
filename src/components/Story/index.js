import React from 'react';
import './index.css';

import Stories from './Stories';
import SearchStories from './SearchStories';

const Story = () =>
  <div className="app">
    <div className="interactions">
      <SearchStories />
    </div>
    <Stories />
  </div>

export default Story;
import React from 'react';
import story from './story/index'
const Data = () => {
  console.log(story.getState())
  return (
    <div>
      {story.getState().input}
    </div>
  );
}

export default Data;

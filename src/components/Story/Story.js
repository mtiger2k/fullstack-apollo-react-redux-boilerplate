import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { doArchiveStory } from '../../actions/archive';
import { ButtonInline } from './Button';
import './Story.css';

const Story = ({ story, columns }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
  } = story;

  const dispatch = useDispatch()
  const onArchive = useCallback(
    () => dispatch(doArchiveStory(objectID)),
    [objectID, dispatch]
  )

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.comments.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.points.width }}>
        {points}
      </span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={onArchive}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
}

export default Story
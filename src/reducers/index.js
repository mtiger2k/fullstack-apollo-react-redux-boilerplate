import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import storyReducer from './story';
import archiveReducer from './archive';

const rootReducer = (history) => combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
  router: connectRouter(history)
})

export default rootReducer
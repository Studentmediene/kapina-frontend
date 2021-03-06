import { fromJS } from 'immutable';
import {
  LOAD_FRONT_PAGE_POSTS_PENDING,
  LOAD_FRONT_PAGE_POSTS_SUCCESS,
  LOAD_FRONT_PAGE_POSTS_FAILED,
  POSTS_PER_PAGE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  posts: [],
  highlightedPosts: [],
  newestEpisodes: [],
  postOffset: 0,
  hasLoaded: false,
});

function frontPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FRONT_PAGE_POSTS_PENDING:
      return state.set('loading', true).set('error', false);
    case LOAD_FRONT_PAGE_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .update('posts', posts => posts.push(...action.posts))
        .set('highlightedPosts', fromJS(action.highlightedPosts))
        .set('newestEpisodes', fromJS(action.newestEpisodes))
        .set('hasLoaded', true)
        .set('postOffset', state.get('postOffset') + POSTS_PER_PAGE);
    case LOAD_FRONT_PAGE_POSTS_FAILED:
      return state.set('loading', false).set('error', true);
    default:
      return state;
  }
}

export default frontPageReducer;

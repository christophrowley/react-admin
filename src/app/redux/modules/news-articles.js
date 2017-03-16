import { ajax } from 'rxjs/observable/dom/ajax';

const FETCH_ARTICLE = 'FETCH_ARTICLE';

const initialState = {

};

export newsArticlesEpic = action$ =>
  action$.typeOf(FETCH_ARTICLE)

export default reducer = (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ARTICLE': {
      return state;
    }
    default: return state;
  }
}

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import newsArticles, { newsArticlesEpic } from './news-articles';


export rootEpic = combineEpics(
  newsArticlesEpic
);

export rootReducer = combineReducers(
  newsArticles
);

import { getPrismicByUid } from '../../util/prismic';
import { reduxStore } from '../store';
import * as types from '../types';

export function getByUid(type, uid) {
  const prismic = getPrismicByUid(type, uid);

  if (prismic) {
    reduxStore.dispatch({ type: types.SET_PRISMIC, payload: prismic });
  }

  console.log('getByUid end');
}
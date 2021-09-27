import { getPrismicByUid } from './prismic';

test('prismic : get homepage', () => {
  expect(getPrismicByUid('page', 'homepage')).toBeTruthy();
});
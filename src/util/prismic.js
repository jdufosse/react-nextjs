import Prismic from '@prismicio/client'
import * as config from '../config';
//import { getByUid } from '../redux/actions/prismic_action';

const client = Prismic.client(config.api.prismic.endpoint, {});

const getPrismicByUid = async (type, uid) => {
  let result = undefined;
  await client.getByUID(type, uid).then((data) => {
    console.log('getByUid-getByUID : ', data);
    result = data;
  });
  return result;
}

export { getPrismicByUid };
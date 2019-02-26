import history from './history';
import client from '../api-client/client';

export const loadInfo = (id = sessionStorage.accountId) => {
  return async dispatch => {
    try {
      const info = await client.transport.get(`accounts/${ id }`);
      dispatch({ type: 'SET_INFO', payload: info.data });
    }
    catch (e) {
      console.log('err');
      history.push('/login');
      window.location.reload();
    }
  };
};

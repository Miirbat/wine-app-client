import history from './history';
import client from '../api-client/client';

const setSessionStorage = (account) => {
  sessionStorage.setItem('accountId', account.data.id);
};

const dispatchAction = (payload, dispatch) => {
  dispatch({ type: 'SET_ACCOUNT', payload: payload });
};

const setSessionStorageAndDispatchAction = (account, dispatch) => {
  setSessionStorage(account);
  dispatchAction(account, dispatch);
};

export const accountLogin = (input) => {
  return async dispatch => {
    try {
      const account = await client.transport.post('login', input);
      setSessionStorageAndDispatchAction(account, dispatch);
    }
    catch (e) {
      console.warn(e);
      history.push('/login');
      window.location.reload();
    }
  };
};

export const createAccount = (accountData) => {
  return async dispatch => {
    try {
      const account = await client.transport.post('accounts', { account: accountData });
      setSessionStorageAndDispatchAction(account, dispatch);
    }
    catch (e) {
      // console.log('404 ERROR LINE 39 IN CREATEACCOUNT');
      history.push('/logout');
      window.location.reload();
    }
  };
};

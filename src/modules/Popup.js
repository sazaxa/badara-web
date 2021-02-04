import { createAction, handleActions } from 'redux-actions';

const CHANGE_LOGIN_POPUP = 'popup/CHANGE_LOGIN_POPUP';

export const changeLoginPopup = createAction(
  CHANGE_LOGIN_POPUP,
  (loginPopup) => loginPopup,
);

const initialState = {
  loginPopup: false,
};

export default handleActions(
  {
    [CHANGE_LOGIN_POPUP]: (state, { payload: loginPopup }) => ({
      ...state,
      loginPopup,
    }),
  },
  initialState,
);

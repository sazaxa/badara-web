import { createAction, handleActions } from 'redux-actions';

const CHANGE_LOGIN_POPUP = 'popup/CHANGE_LOGIN_POPUP';
const CHANGE_DELETE_POPUP = 'popup/CHANGE_DELETE_POPUP';

export const changeLoginPopup = createAction(
  CHANGE_LOGIN_POPUP,
  (loginPopup) => loginPopup,
);

export const changeDeletePopup = createAction(
  CHANGE_DELETE_POPUP,
  (deletePopup) => deletePopup,
);

const initialState = {
  loginPopup: false,
  deletePopup: false,
};

export default handleActions(
  {
    [CHANGE_LOGIN_POPUP]: (state, { payload: loginPopup }) => ({
      ...state,
      loginPopup,
    }),
    [CHANGE_DELETE_POPUP]: (state, { payload: deletePopup }) => ({
      ...state,
      deletePopup,
    }),
  },
  initialState,
);

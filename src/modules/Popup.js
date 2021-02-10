import { createAction, handleActions } from 'redux-actions';

const CHANGE_LOGIN_POPUP = 'popup/CHANGE_LOGIN_POPUP';
const CHANGE_DELETE_POPUP = 'popup/CHANGE_DELETE_POPUP';
const CHANGE_UPDATE_POPUP = 'popup/CHANGE_UPDATE_POPUP';

export const changeLoginPopup = createAction(
  CHANGE_LOGIN_POPUP,
  (loginPopup) => loginPopup,
);

export const changeDeletePopup = createAction(
  CHANGE_DELETE_POPUP,
  (deletePopup) => deletePopup,
);

export const changeUpdatePopup = createAction(
  CHANGE_UPDATE_POPUP,
  (updatePopup) => updatePopup,
);

const initialState = {
  loginPopup: false,
  deletePopup: false,
  updatePopup: false,
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
    [CHANGE_UPDATE_POPUP]: (state, { payload: updatePopup }) => ({
      ...state,
      updatePopup,
    }),
  },
  initialState,
);

import { createAction, handleActions } from 'redux-actions';

const CHANGE_LOGIN_POPUP = 'popup/CHANGE_LOGIN_POPUP';

export const changeLoginPopup = createAction(
  CHANGE_LOGIN_POPUP,
  (open) => open,
);

const initialState = {
  open: false,
};

export default handleActions(
  {
    [CHANGE_LOGIN_POPUP]: (state, { payload: open }) => ({
      ...state,
      open,
    }),
  },
  initialState,
);

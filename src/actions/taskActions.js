import * as types from '../constants/actionTypes';

import dateHelper from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function saveNewTask(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_NEW_TASK,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}

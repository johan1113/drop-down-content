import * as types from '../../constants';

const actionUpdateState = (value) => ({
    type: types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE,
    payload: value,
});

export default actionUpdateState;
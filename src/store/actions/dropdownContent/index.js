import * as types from '../../constants';

export const dropDownContentOn = (value) => ({
    type: types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE_ON,
    payload: value,
});

export const dropDownContentOff = (value) => ({
    type: types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE_OFF,
    payload: value,
});


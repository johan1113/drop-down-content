import * as types from '../../constants';

export const updateTextValue = (value) => ({
    type: types.MODAL.ACTION_UPDATE_CONTENT,
    payload: value,
});
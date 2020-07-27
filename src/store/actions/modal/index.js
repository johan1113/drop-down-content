import * as types from '../../constants';

const actionUpdateContent = (value) => ({
    type: types.MODAL.ACTION_UPDATE_CONTENT,
    payload: value,
});

export default actionUpdateContent;
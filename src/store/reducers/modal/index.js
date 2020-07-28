import * as types from '../../constants';
const initialState = {
    inputValue: "You have not yet registered information in the Modal",
};

const modalReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.MODAL.ACTION_UPDATE_CONTENT:
            return {
                ...state,
                inputValue: payload,
            };
        default:
            return state;
    }
};

export default modalReducer;
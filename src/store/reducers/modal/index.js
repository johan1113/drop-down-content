import * as types from '../../constants';
const initialState = {
    modal: {
        inputValue: "",
    }
};

const modalReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.MODAL.ACTION_UPDATE_CONTENT:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    inputValue: payload.inputValue,
                }
            };
        default:
            return state;
    }
};

export default modalReducer;
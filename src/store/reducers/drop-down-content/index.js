import * as types from '../../constants';
const initialState = {
    dropDownContent: {
        on: false,
        type: "none",
        id: 0
    }
};

const dropDownContentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE:
            return {
                ...state,
                dropDownContent: {
                    ...state.dropDownContent,
                    on: payload.on,
                    type: payload.type,
                    id: payload.id,
                }
            };
        default:
            return state;
    }
};

export default dropDownContentReducer;
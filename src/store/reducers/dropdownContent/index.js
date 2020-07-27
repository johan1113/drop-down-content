import * as types from '../../constants';
const initialState = {
    on: false,
    type: "none",
    id: "none"
};

const dropDownContentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE:
            return {
                ...state,
                on: payload.on,
                type: payload.type,
                id: payload.id,
            };

        default:
            return state;
    }

    console.log("Hizo el Cambio del state");
    console.log(state);
};

export default dropDownContentReducer;
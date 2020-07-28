import * as types from '../../constants';
const initialState = {
    on: false,
    type: null,
    id: null
};

const dropDownContentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE_ON:
            return {
                ...state,
                on: true,
                type: payload.type,
                id: payload.id,
            };
        case types.DROP_DOWN_CONTENT.ACTION_UPDATE_STATE_OFF:
            return {
                ...state,
                on: false,
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
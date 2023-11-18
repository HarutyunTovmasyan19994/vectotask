import {ISBOOLEAN} from "../action/action";


const initialSate = {
    user:[],
    isBoolean: false
}


const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case ISBOOLEAN:
            return {...state, isBoolean: action.payload}
        default:
            return state
    }
}

export default reducer

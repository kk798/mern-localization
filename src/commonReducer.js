const commonReducer = (state = [], action) => {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {
                lang: action.payload
            }
        default:
            return state
    }
}

export default commonReducer;
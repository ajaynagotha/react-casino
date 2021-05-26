export const ActiveFilterReducer =  function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_FILTERS':
            return action.payload;
        default:
            return false
    }
}

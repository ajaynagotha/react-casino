export const ActiveSettings =  function (state = null, action) {
    switch (action.type) {
        case 'SETTINGS':
            return action.payload;
        default:
            return false
    }
}
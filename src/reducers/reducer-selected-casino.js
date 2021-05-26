export const SelectedCasino = function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_CASINO':
            return action.payload;
        default: 
            return false
    }
}
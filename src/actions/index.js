export const saveFilters = (filter) =>{
    return {
        type: "SELECTED_FILTERS",
        payload: filter
    }
}
export const saveCasino = (casino) =>{
    return {
        type: "SELECTED_CASINO",
        payload: casino
    }
}
export const saveSettings = (setting) =>{
    return {
        type: "SETTINGS",
        payload: setting
    }
}


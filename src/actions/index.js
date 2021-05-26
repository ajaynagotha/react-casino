export const saveFilters = (filter) =>{
    console.log("selected filters")
    return {
        type: "SELECTED_FILTERS",
        payload: filter
    }
}
export const saveCasino = (filter) =>{
    console.log("selected filters")
    return {
        type: "SELECTED_CASINO",
        payload: filter
    }
}


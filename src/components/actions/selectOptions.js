export const selectCategory = (id) => {
    return {
        type: 'SELECT_CATEGORY',
        id,
    }
}

export const selectDifficulty = (dif) => {
    return {
        type: 'SELECT_DIFFICULTY',
        dif,
    }
}
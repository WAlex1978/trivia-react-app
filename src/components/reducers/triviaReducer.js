import Categories from '../assets/Categories';

const initState = {
    categories: Categories,
    category: null,
    difficulty: 'easy',
}

const triviaReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state,
                category: action.id,
            }

        case 'SELECT_DIFFICULTY':
            return {
                ...state,
                difficulty: action.dif,
            }

        default:
            return state;
    }
}

export default triviaReducer;
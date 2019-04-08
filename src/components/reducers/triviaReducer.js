import Categories from '../assets/Categories';

const initState = {
    categories: Categories,
    category: 9,
    difficulty: '',
}

const triviaReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state,
                category: action.category,
            }

        default:
            return state;
    }
}

export default triviaReducer;
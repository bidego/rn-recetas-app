import { MEALS } from '../../data/dummy-data/';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updateFavMeals = [...state.favoriteMeals];
                updateFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updateFavMeals }
            } else {
                const meal = state.meals.find(meal=> meal.id=== action.mealId);
                const ret = { ...state, favoriteMeals: state.favoriteMeals.concat(meal)}
                console.log(ret);
                return ret;
            }
        default:
            return state;
    }
}
export default mealsReducer;
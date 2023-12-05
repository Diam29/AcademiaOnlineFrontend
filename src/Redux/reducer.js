import { FILTER_BY_CATEGORY, FILTER_BY_NAME, GET_SERVICES, GET_SERVICES_BY_CATEGORY, GET_SERVICES_BY_NAME } from "./actions";

const initialState = {
    allServices: [],
    servicesByName: [],
    servicesByCategory: [],
    // filterByName: '',
    // filterByCategory: ''
}


console.log('entre a reducer')
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case FILTER_BY_NAME:
        //     return { ...state, filterByName: action.payload }
        // case FILTER_BY_CATEGORY:
        //     return { ...state, filterByCategory: action.payload }
        case GET_SERVICES:
            return { ...state, allServices: action.payload };
        case GET_SERVICES_BY_NAME:
            console.log('soy reducer de servicesbyname', action.payload)
            return { ...state, servicesByName: action.payload }

        case GET_SERVICES_BY_CATEGORY:
            return { ...state, servicesByCategory: action.payload }
        default:
            return state;
    }

}


export default reducer;
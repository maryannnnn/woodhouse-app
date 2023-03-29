import {MENU_LIST_REQUEST, MENU_LIST_SUCCESS, MENU_LIST_FAIL} from '../constants/menuConstants'

const initialState = {
    menus: [],
    isLoadingMenu: false,
    errorMenu: ''
}

export const menuListReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_LIST_REQUEST:
            return {...state, isLoadingMunu: true }
        case MENU_LIST_SUCCESS:
            return {
              ...state,
              menus: action.payload,
              isLoadingMenu: false
            }
        case MENU_LIST_FAIL:
            return {...state, errorMenu: action.payload, isLoadingMenu: false}
        default:
            return state
    }
}
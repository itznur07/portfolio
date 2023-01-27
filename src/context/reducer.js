export const reducer = (state, action) => {
    switch (action.type) {
        case 'change_color':
            return{
                ...state,
                color: action.value
            }
        default:
            return state;
    }
}
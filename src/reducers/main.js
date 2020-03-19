const defaultState = {
    showHeader: false,
    scrollToBottom: false,
    showSideBar: false,
}

export default (state = defaultState, action) => {

    switch (action.type) {

        case "SHOW_HEADER":
    
            return {
                ...state,
                showHeader: true
            }
        
        case "HIDE_HEADER":

            return {
                ...state,
                showHeader: false
            }

        case "SCROLL_TO_BOTTOM":

            return {
                ...state, 
                scrollToBottom: true
            }

        case "RESET_SCROLL_TO_BOTTOM":

            return {
                ...state, 
                scrollToBottom: false
            }

        case "SHOW_SIDE_BAR":

            return {
                ...state,
                showSideBar: true,
            }

        case "HIDE_SIDE_BAR":

            return {
                ...state,
                showSideBar: false,
            }

        default:
            return state;
    }
    
}
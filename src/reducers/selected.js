const defaultState = {
    title: "",
    body: "",
    color: "",
    github: "",
    image: "",
    longBody: "",
    demo: "",
}

export default (state = defaultState, action) => {

    switch(action.type) {

        case "SET_SELECTED_ITEM":

            console.log("action", action.image);

            return {
                title: action.title,
                body: action.body,
                color: action.color, 
                github: action.github,
                image: action.image,
                longBody: action.longBody,
                demo: action.demo,
            }

        case "RESET_SELECTED_ITEM":

            return defaultState;

        default:

            return state
    }
}
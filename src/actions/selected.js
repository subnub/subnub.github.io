export const setSelectedItem = (title, body, color, github, image, longBody, demo) => ({
    type: "SET_SELECTED_ITEM",
    title,
    body,
    color,
    github,
    image,
    longBody,
    demo   
})

export const resetSelectedItem = () => ({
    type: "RESET_SELECTED_ITEM"
})
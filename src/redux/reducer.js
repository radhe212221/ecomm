const intialState = {
    products: [],
    tags: [],
    filters: [
        "id",
        "old",
        "new",
        "rating",
        "discount"
    ],
    users: [],
    cart: [],
    orders: [],
    loggedin: false,
    user: null,
    col: "id",
    order: true,
    tagname: "",//for left side men (2),
    search: "",
}
function reducer(state = intialState, action) {
    console.log("redux/reducer file", action.type, action?.payload)
    switch (action.type) {
        case "search": return { ...state, search: action.payload }
        case "col": return { ...state, col: action.payload, order: !state?.order }
        case "tagname": return { ...state, tagname: action.payload }
        case "products": return { ...state, products: action.payload }
        case "tags": return { ...state, tags: action.payload }
        default: return state
    }
}
export default reducer

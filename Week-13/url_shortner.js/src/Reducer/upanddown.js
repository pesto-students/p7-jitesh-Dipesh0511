const initialstate = 0;
const changeno = (state = initialstate, action) => {
    switch (action.type) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        default:
            return state;
    }
}
export default changeno;
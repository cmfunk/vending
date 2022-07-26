

const func = (sodas=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
        case 'SELECT':
            return sodas.map((soda) => soda._id === action.payload._id ? action.payload : soda);
        default:
            return sodas;
    }
}

export default func;
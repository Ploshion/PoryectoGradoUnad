export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload : product
    }
}


export const delCart = (product) => {
    return  {
        type: "DELITEM",
        payload : product
    }
}

export const addOne = (product) => {
    return {
        type: "ADD_ONE",
        payload: product
    }
}



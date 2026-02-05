<<<<<<< HEAD
import * as actionType from './actionType';

export const addIngridient = igType => {
    return {
        type: actionType.ADD_INGRIDIENT,
        payload:igType
    }
}


export const removeIngridient = igType => {
    return {
        type: actionType.REMOVE_INGRIDIENT,
        payload:igType
    }
}


export const updatePurchasable = () => {
    return {
        type: actionType.UPDATE_PURCHASABLE,
        
    }
=======
import * as actionType from './actionType';

export const addIngridient = igType => {
    return {
        type: actionType.ADD_INGRIDIENT,
        payload:igType
    }
}


export const removeIngridient = igType => {
    return {
        type: actionType.REMOVE_INGRIDIENT,
        payload:igType
    }
}


export const updatePurchasable = () => {
    return {
        type: actionType.UPDATE_PURCHASABLE,
        
    }
>>>>>>> f448bad4f036de52f959871a25d19a6ada588716
}
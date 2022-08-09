import axios from 'axios';

import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS } from '../constants/productConstants'



export const getProducts = (keyword = '',) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })
        // let link = ` http://content.guardianapis.com/search?api-key=test&show- fields=thumbnail,headline&page=1&page-size=10`

        let link = `http://content.guardianapis.com/search?api-key=test&q=modi&show-fields=thumbnail,headline&page=1&page-size=10`

        // if (keyword) {
        //     link = ` http://content.guardianapis.com/search?api-key=test&q=modi&show-fields=thumbnail,headline&show-tags=keyword&page=1&page-size=10`
        // }

        const { data } = await axios.get(link)
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data.response
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error
        })
    }
}







// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
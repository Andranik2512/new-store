export enum ProductActionTypes {
    GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST",
    GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL",
    GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCT_DETAILS_REQUEST",
    GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS",
    GET_PRODUCT_DETAILS_FAIL = "GET_PRODUCT_DETAILS_FAIL",
    GET_PRODUCT_DETAILS_RESET = "GET_PRODUCT_DETAILS_RESET",


}

interface ProductGetRequest {
    type: ProductActionTypes.GET_PRODUCTS_REQUEST;
    payload: any[];
}
interface ProductGetSuccess {
    type: ProductActionTypes.GET_PRODUCTS_SUCCESS;
    payload: string;
}
interface ProductGetFail {
    type: ProductActionTypes.GET_PRODUCTS_FAIL;
    payload?: string;
}

interface ProductGetDetalisRequest {
    type: ProductActionTypes.GET_PRODUCT_DETAILS_REQUEST;
    payload?: string;
}
interface ProductGetDetalisSuccess {
    type: ProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS;
    payload?: string;
}
interface ProductGetDetalisFail {
    type: ProductActionTypes.GET_PRODUCT_DETAILS_FAIL;
    payload?: string;
}
interface ProductGetDetalisReset {
    type: ProductActionTypes.GET_PRODUCT_DETAILS_RESET;
    payload?: string;
}

export type ProductAction = ProductGetRequest | ProductGetSuccess | ProductGetFail | ProductGetDetalisRequest 
| ProductGetDetalisSuccess | ProductGetDetalisFail | ProductGetDetalisReset
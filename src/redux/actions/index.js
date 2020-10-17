import {
  DELETE_PRODUCT,
  TANG_GIAM_SL,
  DETAIL_PRODUCT,
  ADD_PRODUCT,
} from "./../constants";

export const actDelete = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export const actTangGiamSL = (data) => {
  return {
    type: TANG_GIAM_SL,
    payload: data,
  };
};

export const actDetailProduct = (sp) => {
  return {
    type: DETAIL_PRODUCT,
    payload: sp,
  };
};

export const actAddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

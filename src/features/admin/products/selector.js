import { createSelector } from "@reduxjs/toolkit";

export const listProductsSelector = ({ productsManager }) => productsManager;
export const selectProductsSelector = ({ productsManager }) => productsManager.filters.categoryId;
export const searchProductsSelector = ({ productsManager }) => productsManager.filters.search;

export const listProductManagerSelector = createSelector(
  listProductsSelector,
  selectProductsSelector,
  searchProductsSelector,
  (list, categoryId, text) => {
    return list.products.filter((product) => {
        return (
            product.name.includes(text)
            &&
            (Number(categoryId) ? product.categoryId === Number(categoryId) : list.products) 
        )
    });
  }
);

export const productManagerSelector = ({productsManager}) => productsManager.product

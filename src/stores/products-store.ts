import { MlProductCardProps } from "@/components/molecules/MlProductCard";
import { createStore } from "zustand";

export interface CartProduct extends MlProductCardProps {
  quantity: number;
}

export type ProductStoreState = {
  products: CartProduct[];
};

export type ProductsActions = {
  addProduct: (product: CartProduct) => void;
  removeProduct: (id: string) => void;
};

export type ProductStore = ProductStoreState & ProductsActions;

export const initialSate: ProductStoreState = {
  products: [],
};

export const createProductsStore = (
  initState: ProductStoreState = initialSate
) => {
  return createStore<ProductStore>()((set) => ({
    ...initState,
    addProduct: (product: CartProduct) => {
      return set((state) => ({ products: [...state.products, product] }));
    },
    removeProduct: (id: string) => {
      return set((state) => ({
        products: state.products.filter((x) => x.CONTENTFUL_ID !== id),
      }));
    },
  }));
};

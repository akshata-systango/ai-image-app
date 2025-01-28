import { ChangeEvent } from "react";

// Types for product props
export type IProduct = {
  title: string;
  image: string;
  price: string;
};

// Types for form props
export type IForm = {
  setShowProducts: () => void;
  isSearched: boolean;
  isLoading: boolean;
  error: string;
  product: IProduct;
  url: string;
  trackedProducts: [];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTrack: () => void;
};

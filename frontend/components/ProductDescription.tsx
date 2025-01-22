import React from "react";
import { IProduct } from "@/types/form";

const ProductDescriptionPage = (props: { product: IProduct }) => {
  const { product } = props;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:flex lg:space-x-6">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 space-y-4 py-6 px-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-lg text-gray-600">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
